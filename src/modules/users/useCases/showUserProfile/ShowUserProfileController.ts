import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id: String(user_id) });
      return response.json(user);
    } catch (error) {
      return response.status(404).json(error.message)
    }

  }
}

export { ShowUserProfileController };
