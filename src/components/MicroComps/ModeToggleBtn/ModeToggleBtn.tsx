    
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/Providers/themeProvider"
import { Button } from '@/components/ui/button';

export function ModeToggleBtn() {
    const { setTheme, theme } = useTheme();

    function toggleMode(){
        setTheme(theme === 'dark' ? "light" : 'dark')
    }


    return (

            <div className="flex items-center gap-2 justify-end z-49">
                <Button variant="outline" size="icon" onClick={toggleMode}>
                    {theme === 'dark' &&  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
                    {theme === 'light' &&   <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />}
                    <span className="sr-only">Toggle theme</span>
                </Button>

            </div>
    )
}

