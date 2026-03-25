import { Controller, Get } from '@nestjs/common';
import type { ApiResponse } from 'src/interfaces/response.interface';
import { Purchase } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}
  @Get()
  findAll(): ApiResponse<Purchase[]> {
    const result = this.PurchaseService.findAll();
    return {
      success: true,
      data: result,
      message: 'Fetched purchases successfully',
    };
  }
}
