import { Injectable } from '@nestjs/common';
import { Purchease } from './purchase.interface';
import * as fs from 'fs';
@Injectable()
export class PurchaseService {
  findAll(): Purchease[] {
    const data = fs.readFileSync('data/purchase.json', 'utf-8');
    return JSON.parse(data) as Purchease[];
  }
}
