import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { ICreateMenuCategoryRequestDTO } from "src/types";

@Injectable()
export class MenuCategoriesService {
  constructor(private readonly db: PrismaService) {}

  findAll() {
    return this.db.menuCategory.findMany();
  }

  create(createMenuCategoryInput: ICreateMenuCategoryRequestDTO) {
    return this.db.menuCategory.create({
      data: createMenuCategoryInput,
    });
  }
}
