import { Module } from "@nestjs/common";
import { MenuCategoriesService } from "./menu-categories.service";
import { MenuCategoriesController } from "./menu-categories.controller";
import { PrismaService } from "src/database/prisma.service";

@Module({
  controllers: [MenuCategoriesController],
  providers: [MenuCategoriesService, PrismaService],
})
export class MenuCategoriesModule {}
