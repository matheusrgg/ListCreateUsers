import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const adminUser = this.usersRepository.turnAdmin(User);
    if (!adminUser) {
      throw new Error("User not found");
    }
    return adminUser;
  }
}

export { TurnUserAdminUseCase };
