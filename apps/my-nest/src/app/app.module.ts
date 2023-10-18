import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { Task } from '../task/task.entity';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [  UserModule,
    TaskModule,
    JwtModule.register({
      secret: '8adf91bd-fbb9-4f31-bc88-3b787196a1b9',
      signOptions: { expiresIn: '30h' }, 
    }),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Root#$Mysql123',
    database: 'demo',
    entities: [UserEntity,Task],
    synchronize: true,
  }),

],
  exports: [JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
