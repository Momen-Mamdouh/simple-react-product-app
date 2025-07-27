
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { ReactNode } from "react"

export default function MainToolTip({tipEle, tipContent}:{tipEle:ReactNode,tipContent:string}) {
  return (
    <>
        <Tooltip>
            <TooltipTrigger>{tipEle}</TooltipTrigger>
            <TooltipContent>
                <p>{tipContent}</p>
            </TooltipContent>
        </Tooltip>
    </>
  )
}
