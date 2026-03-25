import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Product } from './product.interface';
@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @Get()
  findAll(): ApiResponse<Product[]> {
    const result = this.ProductService.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
