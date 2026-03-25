import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Purchease } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller('products')
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}
  @Get()
  findAll(): ApiResponse<Purchease[]> {
    const result = this.PurchaseService.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched products successfully',
    };
  }
}
