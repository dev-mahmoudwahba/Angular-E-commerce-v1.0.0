export interface AllProduct {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  rating:any,
  image:string
}
export enum DiscountOffers {not = "No Discount" , up =  "10%" , down =  "15%"};
