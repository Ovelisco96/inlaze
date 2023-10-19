import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
     AppModule,
     {
       transport: Transport.TCP,
       options: {
         host: 'localhost',
         port: 6379,
       },
     },
   ); */
  await app.listen(3000);
  console.log('server on port 3000');
}
bootstrap();
