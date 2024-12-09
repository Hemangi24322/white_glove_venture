'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mountain, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface MegaMenuItemProps {
  href: string;
  title: string;
  description: string;
  className?: string;
}

const MegaMenuItem = React.forwardRef<HTMLAnchorElement, MegaMenuItemProps>(
  ({ className, title, description, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);

MegaMenuItem.displayName = 'MegaMenuItem';

const VCMegaMenu = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 md:w-[400px] lg:w-[500px] xl:w-[600px]', className)}
    {...props}
  >
    <ul className="grid gap-3 p-4 md:grid-cols-2">
      <MegaMenuItem
        href="/"
        title="Deal Flow"
        description="Exclusive, high-quality deals curated for VCs"
      />
      <MegaMenuItem
        href="/"
        title="Advisory Services"
        description="Tailored services including due diligence and strategic support"
      />
      <MegaMenuItem
        href="/"
        title="Success Stories"
        description="Case studies showcasing our data-driven approach for VCs"
      />
      <MegaMenuItem
        href="/"
        title="Early Stage Investments"
        description="Discover promising early-stage startups"
      />
    </ul>
  </div>
));
VCMegaMenu.displayName = 'VCMegaMenu';

const StartupMegaMenu = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-4 md:w-[400px] lg:w-[500px] xl:w-[600px]', className)}
    {...props}
  >
    <ul className="grid gap-3 p-4 md:grid-cols-2">
      <MegaMenuItem
        href="/"
        title="Acceleration Programs"
        description="Tailored startup acceleration services including scaling support and pitch preparation"
      />
      <MegaMenuItem
        href="/"
        title="VC Introductions"
        description="Connect with the right VCs for funding opportunities"
      />
      <MegaMenuItem
        href="/"
        title="Founder Resources"
        description="Access mentorship, leadership development, and technical support"
      />
      <MegaMenuItem
        href="/"
        title="Pitch Support"
        description="Refine your pitch for maximum impact"
      />
    </ul>
  </div>
));
StartupMegaMenu.displayName = 'StartupMegaMenu';

export default function HeaderMenuBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            White Glove Ventures
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => {
                  const vcServicesSection =
                    document.getElementById('vc-services');
                  if (vcServicesSection) {
                    vcServicesSection.scrollIntoView({ behavior: 'smooth' });
                    // Set the active tab to 'vc'
                    const event = new CustomEvent('setActiveTab', {
                      detail: 'vc',
                    });
                    document.dispatchEvent(event);
                  }
                }}
              >
                VCs
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <VCMegaMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={() => {
                  const startupServicesSection =
                    document.getElementById('startup-services');
                  if (startupServicesSection) {
                    startupServicesSection.scrollIntoView({
                      behavior: 'smooth',
                    });
                    // Set the active tab to 'startups'
                    const event = new CustomEvent('setActiveTab', {
                      detail: 'startups',
                    });
                    document.dispatchEvent(event);
                  }
                }}
              >
                Startups
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <StartupMegaMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => {
                const footer = document.getElementById('contact-section');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact
            </Button>
            <Button
              className="text-sm font-medium"
              onClick={() => {
                const getInTouchSection =
                  document.getElementById('get-in-touch');
                if (getInTouchSection) {
                  getInTouchSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Accelerate With Us
            </Button>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <div className="grid gap-4 py-4">
      <div className="px-2 py-1">
        <h2
          className="mb-2 px-4 text-lg font-semibold tracking-tight cursor-pointer"
          onClick={() => {
            const vcServicesSection = document.getElementById('vc-services');
            if (vcServicesSection) {
              vcServicesSection.scrollIntoView({ behavior: 'smooth' });
              const event = new CustomEvent('setActiveTab', { detail: 'vc' });
              document.dispatchEvent(event);
            }
          }}
        >
          VCs
        </h2>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            Deal Flow
          </Link>
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            Advisory Services
          </Link>
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            Success Stories
          </Link>
        </div>
      </div>
      <div className="px-2 py-1">
        <h2
          className="mb-2 px-4 text-lg font-semibold tracking-tight cursor-pointer"
          onClick={() => {
            const startupServicesSection =
              document.getElementById('startup-services');
            if (startupServicesSection) {
              startupServicesSection.scrollIntoView({ behavior: 'smooth' });
              const event = new CustomEvent('setActiveTab', {
                detail: 'startups',
              });
              document.dispatchEvent(event);
            }
          }}
        >
          Startups
        </h2>
        <div className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            Acceleration Programs
          </Link>
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            VC Introductions
          </Link>
          <Link
            href="/"
            className="flex w-full items-center rounded-md p-2 hover:underline"
          >
            Founder Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
