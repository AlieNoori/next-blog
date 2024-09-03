'use client';

import { Menu, X } from 'lucide-react';
import { Session } from 'next-auth';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';
import NavbarRoutes from './NavbarRoutes';

type MobileNavbarMenuProps = {
  session: Session | null;
};

function MobileNavbarMenu({ session }: MobileNavbarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <div>
      <button className='rounded-md hover:bg-gray-200' onClick={toggleOpen}>
        <Menu className='size-8' />
      </button>
      {isOpen &&
        createPortal(
          <div
            className='fixed top-0 flex h-full w-64 flex-col gap-y-4 bg-gray-100 p-5 ring-0'
            onClick={e => e.preventDefault()}
          >
            <div className='flex items-center justify-between'>
              <Logo />
              <button
                className='rounded-md hover:bg-gray-200'
                onClick={toggleOpen}
              >
                <X className='size-10' />
              </button>
            </div>
            <div className='border-b'></div>
            <div className='flex'>
              <NavbarRoutes session={session} vertical />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default MobileNavbarMenu;
