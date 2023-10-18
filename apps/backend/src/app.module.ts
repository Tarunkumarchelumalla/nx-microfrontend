
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './Auth/auth.module';
import { Auth } from './Auth/auth.entity';
import { Todo } from './todos/todos.entity';
import { Profile } from './profile/profile.entity';
import { ProfileModule } from './profile/profile.module';
import { OrderModule } from './orders/orders.module';
import { CustomerModule } from './customers/customers.module';
import { Customer } from './customers/customers.entity';
import { Order } from './orders/orders.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root#$Mysql123',
      database: 'demo',
      entities: [Auth,Todo,Profile,Customer,Order],
      synchronize: true,
    }),
    TodosModule,
    AuthModule,
    ProfileModule,
    OrderModule,
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
