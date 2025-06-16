// booking.module.ts
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "USER_SERVICE",
        transport: Transport.TCP,
        options: { host: "localhost", port: 3001 },
      },
      {
        name: "PAYMENT_SERVICE",
        transport: Transport.TCP,
        options: { host: "localhost", port: 3002 },
      },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
