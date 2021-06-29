import { PrismaClient } from '.prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(){
    super({log: ['info']})
  }

  findPublishedProducts() {
    return this.product.findMany({ where: { published: true }})
  }
}
