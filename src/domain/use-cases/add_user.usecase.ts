import { BaseUseCase } from "src/core/use_cases/base.usecase";
import { Iuser } from "../entities/user";
import { UserRepo } from "../repositories/user";
import { Observable } from "rxjs";

export class AddUser implements BaseUseCase<boolean,{ user: Iuser }> {
  constructor(private userRepo: UserRepo) {}

  execute(param: { user: Iuser }): Observable<boolean> {
    return this.userRepo.addUser(param);
  };
};