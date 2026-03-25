import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface';
import * as fs from 'fs';
@Injectable()
export class ProductService {
  findAll(): Product[] {
    const data = fs.readFileSync('data/products.json', 'utf-8');
    return JSON.parse(data) as Product[];
  }
}
