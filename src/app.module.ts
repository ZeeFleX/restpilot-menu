import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { RabbitmqModule } from "./rabbitmq/rabbitmq.module";
import { CategoriesModule } from "./categories/categories.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RabbitmqModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
