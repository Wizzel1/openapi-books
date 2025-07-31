import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/library.db',
      entities: [User, Book],
      synchronize: true, // Only for development
      logging: true, // Enable SQL logging for development
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
