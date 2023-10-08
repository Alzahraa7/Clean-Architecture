import { BaseUseCase } from "src/core/use_cases/base.usecase";

import { Iuser } from "../entities/user";
import { UserRepo } from "../repositories/user";
import { Observable } from "rxjs";

export class GetAllUsersUseCase implements BaseUseCase<Iuser[]> {
  constructor(private userRepo: UserRepo) {};

  execute(param: null):Observable<Iuser[]> {
    return this.userRepo.getAllUsers();
  };
};