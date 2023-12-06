import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      this.isAdmin = true;
      return true;
    } else if (username === 'user' && password === 'user') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      this.isAdmin = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.isAdmin = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }
}