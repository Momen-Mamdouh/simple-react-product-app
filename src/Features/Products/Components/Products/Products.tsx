import MainHeader from "@/components/MainComps/MainHeader/MainHeader";
import ProductsSection from "../ProductsSection/ProductsSection";
import heroImg from '/productsHero.jpg'

export default function Products() {
  return (
    <>  
        <MainHeader  headerText="Products" bgImg={heroImg}/>
        <ProductsSection /> 
    </>
  )
}
