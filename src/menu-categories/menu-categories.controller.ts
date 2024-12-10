import { Controller } from "@nestjs/common";
import { ICreatemenuCategoryDTO } from "src/types";
import { MenuCategoriesService } from "./menu-categories.service";
import { RabbitRPC } from "@golevelup/nestjs-rabbitmq";

@Controller()
export class MenuCategoriesController {
  constructor(private readonly menuCategoriesService: MenuCategoriesService) {}

  @RabbitRPC({
    exchange: "menu-exchange",
    routingKey: "menu.menuCategories.findAll",
    queue: "menu.menuCategories.findAll",
  })
  async findAll() {
    return this.menuCategoriesService.findAll();
  }

  @RabbitRPC({
    exchange: "menu-exchange",
    routingKey: "menu.menuCategories.create",
    queue: "menu.menuCategories.create",
  })
  async create(createMenuCategoryInput: CreateMenuCategoryInput) {
    return this.menuCategoriesService.create(createMenuCategoryInput);
  }
}
