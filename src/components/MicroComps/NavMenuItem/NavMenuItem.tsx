import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu'

import { Link } from 'react-router-dom'
import type { INavItemProps } from '@/Interfaces/INavItemProps'


export default function NavMenuItem({navLink, navName}:INavItemProps) {
  return (
    <>
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link to={navLink} className='relative z-49'>{navName}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    </>
  )
}
