import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentService {
  private payments: any[] = [];

  makePayment(data: any) {
    const payment = {
      id: Date.now().toString(),
      ...data,
      status: "PAID",
    };
    this.payments.push(payment);
    return { message: "Payment successful!", payment };
  }

  getPayment(id: string) {
    const payment = this.payments.find((p) => p.id === id);
    return payment || { message: "Payment not found" };
  }
}
