import NavMenuItem from "@/components/MicroComps/NavMenuItem/NavMenuItem"
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import type { INavItemProps } from '@/Interfaces/INavItemProps'


const navBarLinks:INavItemProps[] = [
  {id:1, navLink:'/', navName:'Home'},
  {id:2, navLink:'/products', navName:'Products'},
  {id:3, navLink:'/cart', navName:'Cart'},
]

export default function NavMenu() {
  return (
   <>
        <NavigationMenu >
            <NavigationMenuList className="gap-4  ">
                {navBarLinks.map((navItem)=> <NavMenuItem key={navItem.id} navLink={navItem.navLink} navName={navItem.navName} />)}
            </NavigationMenuList>
        </NavigationMenu>
   </>
  )
}
