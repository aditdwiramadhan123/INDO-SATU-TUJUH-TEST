import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { PaymentService } from "./payment.service";

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern("make-payment")
  make(data: any) {
    return this.paymentService.makePayment(data);
  }

  @MessagePattern("get-payment")
  get(id: string) {
    return this.paymentService.getPayment(id);
  }
}
