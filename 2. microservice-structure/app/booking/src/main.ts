import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { BookingModule } from "./booking.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BookingModule,
    {
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 3003,
      },
    }
  );

  await app.listen();
  console.log("📦 Booking microservice is running on TCP port 3003");
}
bootstrap();
