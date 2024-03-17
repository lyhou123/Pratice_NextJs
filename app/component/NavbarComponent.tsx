
'use client';
import Link from 'next/link';
import { Navbar } from 'flowbite-react';

 export default function NavbarComponent() {
  return (
    <div className='bg-blue-800'>
    <Navbar  className='p-4 container mx-auto w-full bg-blue-800'>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="https://istad.co/resources/img/logo_md.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">CSTAD</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <Navbar.Link href="/"className='text-white'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/enroll" className='text-white'>
          Enroll
        </Navbar.Link>
        <Navbar.Link  href="/couse" className='text-white'>Course</Navbar.Link>
        <Navbar.Link href="/it_news" className='text-white'>IT News</Navbar.Link>
        <Navbar.Link href="/job" className='text-white'>Job Apporturnity</Navbar.Link>
        <Navbar.Link href="/about" className='text-white'>About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}
