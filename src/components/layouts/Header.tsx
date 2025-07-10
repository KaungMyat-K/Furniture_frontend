import { siteConfig } from "@/config/site";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import { ModeToggle } from "../mode-toggle";

function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container mx-auto flex h-16 items-center ">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 mr-8 lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
