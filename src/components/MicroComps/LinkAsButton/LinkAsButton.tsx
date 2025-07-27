

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export function LinkAsButton({link,BtnText}:{link:string,BtnText:string}) {
  return (
    <Button asChild>
      <Link to={link}>{BtnText}</Link>
    </Button>
  )
}