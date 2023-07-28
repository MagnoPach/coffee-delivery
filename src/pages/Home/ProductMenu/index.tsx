import { productsList } from "../../../utils/productsList";
import { ProductCard, ProductProps } from "../ProductCard";

export function ProductMenu() {
  return (
    <>
      {productsList.map((product: ProductProps) => 
        <ProductCard key={product.id} coffee={product}/>)
      }
    </>
  )
}