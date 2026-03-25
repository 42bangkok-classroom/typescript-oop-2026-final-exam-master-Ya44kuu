export interface PurchaseItem {
  productID: number;
  quantity: number;
  price: number;
}
export interface Purchase {
  id: number;
  customerName: string;
  PurchaseDate: String;
  PurchaseItem: PurchaseItem[];
  totalPrice: number;
}
