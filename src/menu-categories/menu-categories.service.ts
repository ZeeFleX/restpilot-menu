import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class MenuCategoriesService {
  constructor(private readonly db: PrismaService) {}

  findAll() {
    return this.db.menuCategory.findMany();
  }
}
