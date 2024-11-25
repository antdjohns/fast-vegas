import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/solid';

export const CombinedHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [openHover, setOpenHover] = React.useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // Detect mobile device
  useEffect(() => {
    const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  // Handle scroll state
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      setOpen(false);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Handle Call Button Click
  const handleCallClick = () => {
    if (isMobile) {
      window.location.href = 'tel:+17022222222';
    } else {
      window.open('https://voice.google.com/u/0/calls?a=nc,%2B17022222222', '_blank');
    }
  };

  return (
    <header className={`sticky top-0 z-50 h-20 font-serif opacity-0-scroll ${isScrolling ? 'scrolling' : ''}`}>
    <div className="flex justify-between items-center bg-white text-golden px-2 h-20">
    <div className="flex-shrink-0">
      <a href='/'>
        <img src='/fast_vegas_cash_offer.png' className="h-32 pt-2 w-auto max-h-full" alt="Logo" />
      </a>
    </div>

    <nav className="hidden md:flex items-center h-full space-x-6">
      <div
        className="block bg-white h-full flex items-center"
        onMouseEnter={() => setOpenHover(true)}
        onMouseLeave={() => setOpenHover(false)}
      >
        <a href="/#" className="hover:text-gray-400 bg-white">Home</a>
        <HoverMenuCollapse open={openHover}>
          <HoverMenuNav>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#about">About</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#partner">Process</HamburgerMenuLink>
            </HamburgerMenuItem>
          </HoverMenuNav>
        </HoverMenuCollapse>
      </div>

      <a href="/book" className="hover:text-gray-400">Book</a>
      <a href="/team" className="hover:text-gray-400">Team</a>
      <Link className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out" href="/get-cash-offer">
        Get Cash Offer
      </Link>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md flex items-center shadow-md transition duration-300 ease-in-out"
      >
        <PhoneIcon className="h-5 w-5 mr-2" />
        Call 702-222-2222
      </button>
    </nav>

    <div className="md:hidden">
      <HamburgerMenuToggler toggle={toggle} />
    </div>
</div>


      {/* Hamburger Menu for Mobile */}
      <HamburgerMenu bgColor="bg-black" textColor="text-white">
        <HamburgerMenuCollapse open={open}>
          <HamburgerMenuNav>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#">Home</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#about">About</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#partner">Benefit</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/#investment">Process</HamburgerMenuLink>
            </HamburgerMenuItem>
          </HamburgerMenuNav>
        </HamburgerMenuCollapse>
      </HamburgerMenu>
    </header>
  );
};


/* Logic (remains unchanged) */

const style = {
  nav: `block pl-0 mb-0 `,
  nav2: `flex pl-0 mb-0 space-x-6`,
  navbar: `font-light shadow px-4 relative`,
  collapse: `absolute top-full left-0 right-0 bg-black z-50 transition-height ease duration-300 overflow-hidden`,
  collapse2: `absolute top-full flex flex-row left-0 right-0 text-white items-center justify-center bg-black p-6 transition-height ease duration-300 overflow-hidden`,
  toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer py-1.5 px-4 hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

function HamburgerMenu({ children, bgColor, textColor }) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
  );
}

function HamburgerMenuToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }) {
  const ref = React.useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight, visibility: 'visible', opacity: 1 }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HoverMenuCollapse({ children, open }) {
  const ref = React.useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight, visibility: 'visible', opacity: 1, }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse2} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HoverMenuNav({ children }) {
  return <ul className={style.nav2}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}

function HamburgerMenuLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}
