import { Injectable } from "@nestjs/common";
import { RabbitmqService } from "./rabbitmq/rabbitmq.service";

@Injectable()
export class AppService {
  constructor(private readonly rabbitMQ: RabbitmqService) {}

  test(data): any {
    return "Hello from menu-microservice";
  }

  async testWithOrders(data) {
    return await this.rabbitMQ.rpcSend("menu-exchange", "menu.test2", data);
  }
}
