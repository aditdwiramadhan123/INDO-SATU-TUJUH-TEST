import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { BookingService } from "./booking.service";

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern("create-booking")
  create(data: any) {
    return this.bookingService.createBooking(data);
  }

  @MessagePattern("get-booking")
  getBooking(id: string) {
    return this.bookingService.getBooking(id);
  }
}
