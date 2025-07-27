import EmptyStar from "@/components/MicroComps/EmptyStar/EmptyStar";
import FilledStar from "@/components/MicroComps/FilledStar/FilledStar";



export default function Rating({productRating}:{productRating:number}) {
  return (
    <>
        <div className="grid w-1/2 py-6  overflow-x-scroll rounded-lg lg:overflow-visible">
            <div className="inline-flex items-center">
                {Array(productRating).fill(null).map((_, i) => <FilledStar key={i} />)}
                {productRating !== 5 && Array(5-productRating).fill(null).map((_, i) => <EmptyStar key={i+productRating} />)}
            </div>
        </div>


    
    </>
  )
}
