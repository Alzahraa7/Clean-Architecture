import { Mapper } from "src/core/utils/mapper";
import { Iuser } from "src/domain/entities/user";
import { UserModel } from "../user_model";

export class UserMapper extends Mapper<UserModel, Iuser> {
  override fromJson(param: UserModel): Iuser {
    return {
      first_name: param.userName[0],
      last_name: param.userName[1],
      user_name: param.name,
      age: param.age,
      email: param.email,
      phone_number: param.phone
    }
  }

  override toJson(param: Iuser): UserModel {
    return {
      name: param.first_name,
      age: param.age,
      email: param.email,
      userName: param.last_name,
      phone: param.phone_number
    }
  }
}