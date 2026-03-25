export interface PurchaseItem {
  productID: number;
  quantity: number;
  price: number;
}
export interface Purchease {
  id: number;
  customerName: string;
  PurchaseDate: String;
  PurchaseItem: PurchaseItem[];
  totalPrice: number;
}
