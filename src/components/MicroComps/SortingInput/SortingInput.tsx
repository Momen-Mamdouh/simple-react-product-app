import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {  type SetStateAction, type Dispatch } from "react";

interface SortingProps{
    setSort: Dispatch<SetStateAction<string>>,
}


export default function SortingInput({setSort}:SortingProps) {

    const handleSelectChange = (value:string)=>{
           setSort(value)
    }

  return (
    <div className="selectInput p-12">
        <Select onValueChange={handleSelectChange} >

            <SelectTrigger className="w-[280px] bg-gradient-to-r from-gray-800 to-gray-900 text-white border-none shadow-md hover:brightness-110">
                <SelectValue placeholder="View By" />
            </SelectTrigger>

            <SelectContent>

                <SelectGroup>
                    <SelectLabel>Name</SelectLabel>
                    <SelectItem value="A-Z">Ascedning</SelectItem>
                    <SelectItem value="Z-A">Descedning</SelectItem>
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel>Price</SelectLabel>
                    <SelectItem value="low">Low To High</SelectItem>
                    <SelectItem value="high">High To Low</SelectItem>
                </SelectGroup>

            </SelectContent>
        </Select>
    </div>
  )
}


