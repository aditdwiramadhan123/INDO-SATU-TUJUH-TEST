import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users: any[] = [];

  createUser(data: any) {
    const user = {
      id: Date.now().toString(),
      ...data,
    };
    this.users.push(user);
    return { message: "User created!", user };
  }

  getUser(id: string) {
    const user = this.users.find((u) => u.id === id);
    return user || { message: "User not found" };
  }
}
