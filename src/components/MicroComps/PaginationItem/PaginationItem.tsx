
import { PaginationItem } from "@/components/ui/pagination"
import  { Link } from "react-router-dom"

type PaginationLinkProps = React.ComponentProps<typeof Link>

const PaginationLink = ({ to, children, ...props }: PaginationLinkProps) => (
  <PaginationItem>
    <Link to={to} {...props}>
      {children}
    </Link>
  </PaginationItem>
)

export default PaginationLink
