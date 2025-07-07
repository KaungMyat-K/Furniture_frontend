import type { MainNavItem } from "@/types";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MainNavigationProps {
  items?: MainNavItem[];
}

function MobileNavigation({ items }: MainNavigationProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="ml-4 size-5">
            <Icons.menu aria-hidden="true" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pt-9 ">
          <SheetClose asChild>
            <Link to="/" className="flex items-center ml-4">
              <Icons.logo className="size-4 mr-2" />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </SheetClose>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8 ml-4">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value={items?.[0]?.title ?? ""}>
                <AccordionTrigger>{items?.[0]?.title}</AccordionTrigger>
                <AccordionContent className="">
                  <div className="flex  flex-col space-y-2">
                    {items?.[0]?.card?.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          to={item.href ?? "#"}
                          className="flex items-center ml-4 text-foreground/70"
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col space-y-2 mt-4">
              {items?.[0]?.menu?.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link
                    to={item.href ?? "#"}
                    className="flex items-center font-medium text-sm"
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavigation;
