import NavMenu from "@/components/MicroComps/NavMenu/NavMenu";
import { ModeToggleBtn } from "@/components/MicroComps/ModeToggleBtn/ModeToggleBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLogo from '@/assets/logo.png'




export default function Navbar() {

  return (
 
    <div className="fixed top-0 left-0 right-0 z-49 ">
      <div className="flex items-center justify-between w-full p-5 shiny-stars-bg text-white">

          <div className="logoImg flex  items-center gap-2.5 justify-self-start">
            <Avatar>
              <AvatarImage src={AppLogo}  />
              <AvatarFallback>App Logo</AvatarFallback>
            </Avatar>

            Products App

          </div>
        
          <NavMenu />
          <ModeToggleBtn />
          
      </div>
    </div>

  )
}

