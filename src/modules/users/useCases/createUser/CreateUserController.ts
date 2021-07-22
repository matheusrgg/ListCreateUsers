import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      this.createUserUseCase.execute({ name, email });
      return response.status(201).send();

    } catch (error) {
      return response.status(401).json(error.message)
    }
  }
}

export { CreateUserController };
