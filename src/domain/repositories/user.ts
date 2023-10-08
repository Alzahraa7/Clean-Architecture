// put all logic that related to user entity

import { Observable } from "rxjs";

import { Iuser } from "../entities/user";

export abstract class UserRepo {
  abstract getAllUsers(): Observable<Iuser[]>;  
  abstract getUserByUserName(params: { user_name: string }): Observable<Iuser>;
  abstract addUser(params: { user: Iuser }): Observable<boolean>
}