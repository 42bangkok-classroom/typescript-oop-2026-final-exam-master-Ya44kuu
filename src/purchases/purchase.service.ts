import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
@Injectable()
export class PurchaseService {
  findAll(): Purchase[] {
    const data = fs.readFileSync('data/purchase.json', 'utf-8');
    return JSON.parse(data) as Purchase[];
  }
  findOne(id: number): Purchase | null {
    const users = this.findAll();
    const user = users.find((u) => u.id === id);

    if (!user) {
      return null;
    }
    return user;
  }
}
