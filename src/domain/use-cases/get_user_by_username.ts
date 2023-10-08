import { BaseUseCase } from "src/core/use_cases/base.usecase";
import { Iuser } from "../entities/user";
import { UserRepo } from "../repositories/user";
import { Observable } from "rxjs";

export class GetUserByUserName implements BaseUseCase<Iuser, { user_name: string}> {
  constructor(private userRepo: UserRepo) {};

  execute(param: { user_name: string }): Observable<Iuser> {
    return this.userRepo.getUserByUserName(param);
  }
};