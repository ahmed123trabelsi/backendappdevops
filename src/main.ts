import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cookieParser from 'cookie-parser'
import * as express from 'express';

const fs = require('fs');
async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(process.env.SERVER_PORT);
  app.enableCors({
    origin: [ 'http://192.168.33.10:4200'],   // Adjust according to your front-end URL
    credentials:  true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  
    
  });
  app.use(cookieParser());
  const expressApp = express();
}


bootstrap();
