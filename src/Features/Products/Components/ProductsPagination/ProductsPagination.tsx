import PaginationLink from "@/components/MicroComps/PaginationItem/PaginationItem"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
} from "@/components/ui/pagination"



export default function ProductsPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationLink to="/products?page=1">Previous</PaginationLink>

        <PaginationLink to="/products?page=1">1</PaginationLink>
        <PaginationEllipsis />

        <PaginationLink to="/products?page=2">Next</PaginationLink>
      </PaginationContent>
    </Pagination>
  )
}
