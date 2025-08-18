import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })

export class IllUserService {
  userName?: string;
  userGroup?: string;
  decodedToken: any;

  constructor() {
    this.loadUserData();
  }

  private loadUserData() {
    
    let token = sessionStorage.getItem('primoExploreJwt');

    if (token) {
      try {
        this.decodedToken = jwtDecode<any>(token);
        this.userName = this.decodedToken?.userName ?? null;
        this.userGroup = this.decodedToken?.userGroup ?? null;
      } catch (err) {
        console.error('Invalid token:', err);
      }
    }
  }
}
