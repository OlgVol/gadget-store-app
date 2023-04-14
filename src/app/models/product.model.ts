export interface IProduct {
  id: number;
  title: string;
  price: string;
  short_description?: string;
  long_description: string;
  year?: number;
  RAM: string;
  warranty_period: string;
  imgUrl?: string;
  features?: [];
}
