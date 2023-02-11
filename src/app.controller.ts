import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { HelloResult, LoginCode } from './interface/hello-result.interface';
import { HelloRequest } from './interface/hello-request.interface';

interface HelloService {
  getHello(data: HelloRequest): Observable<HelloResult>;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('HelloService', 'getHello')
  getHello(data: HelloRequest): HelloResult {
    console.log(data);
    return {
      loginCode: LoginCode.SUCCESS,
      token: 'testToken',
    };
  }
}
