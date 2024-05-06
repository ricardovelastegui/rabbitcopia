import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private users = [
    { id: 1, username: 'user1', password: 'password1', role: 'admin' },
    { id: 2, username: 'user2', password: 'password2', role: 'user' },
    { id: 3, username: 'user3', password: 'password3', role: 'user' },
    { id: 4, username: 'user4', password: 'password4', role: 'user' },
    { id: 5, username: 'user5', password: 'password5', role: 'admin' }
  ];

  constructor() { }

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  login(username: string, password: string): Observable<boolean> {

    return of(this.users).pipe(
      map((users) => users.some((user) => user.username === username && user.password === password))
    );

  }
}
