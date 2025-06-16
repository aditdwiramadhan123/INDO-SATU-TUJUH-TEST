import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { PaymentModule } from "./payment.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentModule,
    {
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 3002,
      },
    }
  );

  await app.listen();
  console.log("💰 Payment microservice is running on TCP port 3002");
}
bootstrap();
