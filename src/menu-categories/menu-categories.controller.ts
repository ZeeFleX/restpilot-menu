import { Controller } from "@nestjs/common";
import { ICreateMenuCategoryDTO } from "src/types";
import { MenuCategoriesService } from "./menu-categories.service";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class MenuCategoriesController {
  constructor(private readonly service: MenuCategoriesService) {}

  @MessagePattern("menuCategories.findAll")
  async findAll() {
    return this.service.findAll();
  }

  @MessagePattern("menuCategories.create")
  async create(@Payload() payload: ICreateMenuCategoryDTO) {
    return this.service.create(payload);
  }
}
