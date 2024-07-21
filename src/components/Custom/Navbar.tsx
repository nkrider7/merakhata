import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "../ui/button";
export default function Navbar() {
    const { theme, setTheme} = useTheme()

    const onThemeChange = () => {
        if(theme == 'light'){
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

  return (
    <>
     <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
                <a
                    href={"/"}
                    className="text-2xl font-leag font-extrabold text-black flex items-center ml-4 dark:text-gray-100"
                >
                    Codolio
                   
                </a>
            </div>
            {/* <nav className="hidden gap-12 lg:flex items-center">
                {navItems.map((item) => (
                    <div
                        className="text-lg font-semibold text-black transition duration-100 hover:text-red-500 active:text-red-700 dark:text-gray-200 dark:hover:text-red-500 dark:active:text-red-700"
                        key={item.name}
                    >
                        <a href={item.href}>{item.name}</a>
                    </div>
                ))}
            </nav> */}
            <Button onClick={onThemeChange}>
                {theme == 'dark'? "Light": "Dark"}
            </Button>
            </div>
    </>
  )
}
