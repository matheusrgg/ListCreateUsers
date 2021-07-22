import { response } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {

    const emailAlreadyExists = this.usersRepository.findByEmail(email);
    if (emailAlreadyExists) {
      throw new Error("message:user already exists")
    }
    const user = this.usersRepository.create({ name, email })
    console.log("usuário criado", user)
    return user;

  }


}

export { CreateUserUseCase };
