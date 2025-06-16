import { Injectable } from "@nestjs/common";

@Injectable()
@Injectable()
export class BookingService {
  constructor(
    @Inject("USER_SERVICE") private readonly userClient: ClientProxy,
    @Inject("PAYMENT_SERVICE") private readonly paymentClient: ClientProxy
  ) {}

  async checkUser(userId: string) {
    return this.userClient.send({ cmd: "get-user" }, userId).toPromise();
  }

  async createPayment(data: any) {
    return this.paymentClient.send({ cmd: "create-payment" }, data).toPromise();
  }
}
