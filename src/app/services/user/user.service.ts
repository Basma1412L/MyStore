import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:User;
  public id:number;
  constructor() { 
    this.id=0;
  }
  public setUser(user:User) {
    this.user=user;
  }
   
  public getUser(){
    return this.user;
  }

  public getId(){
    this.id++;
    return this.id;
  }
}
