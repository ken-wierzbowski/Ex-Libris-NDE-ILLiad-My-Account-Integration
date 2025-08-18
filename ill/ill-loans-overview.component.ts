import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { IllService } from '../services/ill-service';
import { IllUserService } from '../services/ill-user-service';
import { IllArticleComponent, IllArticleData } from './ill-article.component';
import { IllRequestComponent, IllRequestData } from './ill-request.component';
import { illiadOptions } from './illiad-options.constant';

@Component({
  selector: 'ill-loans-overview',
  standalone: true,
  imports: [CommonModule, IllArticleComponent, IllRequestComponent, NgIf, NgFor],
  templateUrl: './ill-loans-overview.component.html'
})
export class IllLoansOverviewComponent implements OnInit {
  
  boxTitle = illiadOptions.boxTitle;
  illiadURL = illiadOptions.illiadURL;

  articles: IllArticleData[] = [];
  requests: IllRequestData[] = [];

  isLoading = true;
  illPermitted = true;

  userGroup?: string;
  user?: string;

  constructor(private illService: IllService, private illUserService: IllUserService) {}



  ngOnInit(): void {
    this.user = this.illUserService.userName;
    this.userGroup = this.illUserService.userGroup;

    const whitelistGroups = illiadOptions.groups;    

    if (whitelistGroups.includes(this.userGroup!)) {
      const url = illiadOptions.remoteScript;
      this.illService.getILLiadData(url, this.user!).subscribe(response => {
        this.articles = Object.values(response.Articles || {});
        this.requests = Object.values(response.Requests || {});
        this.isLoading = false;
      });
    } else {
      this.illPermitted = false;
    }
  }

  hasItems<T>(arr: T[]): boolean {
    return Array.isArray(arr) && arr.length > 0;
  }
}
