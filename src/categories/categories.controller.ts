import { Controller } from "@nestjs/common";
import { MenuDTO } from "shared-types";
import { CategoriesService } from "./categories.service";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @MessagePattern("menu.categories.findAll")
  async findAll() {
    return this.service.findAll();
  }

  @MessagePattern("menu.categories.create")
  async create(@Payload() payload: MenuDTO.Request.CreateCategory) {
    return this.service.create(payload);
  }
}
