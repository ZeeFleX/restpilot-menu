import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { MenuDTO } from "src/types/shared";

@Injectable()
export class CategoriesService {
  constructor(private readonly db: PrismaService) {}

  findAll() {
    return this.db.category.findMany();
  }

  create(createCategoryInput: MenuDTO.Request.CreateCategory) {
    return this.db.category.create({
      data: createCategoryInput,
    });
  }
}
