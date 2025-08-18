import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IllArticleData {
  url: string;
  title: string;
  jtitle: string;
  author: string;
  count: number;
  expires: string;
}

@Component({
  selector: 'ill-article',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div>
        <p>
          Title: <a [href]="item.url" target="_blank">{{ item.title }}</a>
        </p>
        <p>Author: {{ item.author }}</p>
        <p>Expires: {{ item.expires }}.</p>
      </div>
    </div>
  `
})
export class IllArticleComponent {
  @Input() item!: IllArticleData;
}
