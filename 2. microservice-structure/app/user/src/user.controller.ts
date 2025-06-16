import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { UserService } from "./user.service";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern("create-user")
  create(data: any) {
    return this.userService.createUser(data);
  }

  @MessagePattern("get-user")
  get(id: string) {
    return this.userService.getUser(id);
  }
}
