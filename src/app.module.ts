import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";
import { RabbitmqModule } from "./rabbitmq/rabbitmq.module";
import { MenuCategoriesModule } from "./menu-categories/menu-categories.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RabbitmqModule,
    MenuCategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
