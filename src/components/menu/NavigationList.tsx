"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Cars from "../icons/cars";
import NewCars from "../icons/newcars";
import Motorcycle from "../icons/motorcycle";
import Newmotorcycle from "../icons/newmotorcycle";
import Sellcars from "../icons/sellcars";
import Sellmotorcycle from "../icons/sellmotorcycle";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className={"hidden md:block"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Comprar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <Cars /> Carros Usados
              </NavigationMenuLink>
            </Link>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <NewCars /> Carros Novos
              </NavigationMenuLink>
            </Link>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <Motorcycle /> Motos Usadas
              </NavigationMenuLink>
            </Link>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <Newmotorcycle /> Motos Novas
              </NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Vender</NavigationMenuTrigger>
          <NavigationMenuContent>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <Sellcars /> Vender carro
              </NavigationMenuLink>
            </Link>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "gap-2 p-7")}
              >
                <Sellmotorcycle /> Vender moto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ajuda
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
