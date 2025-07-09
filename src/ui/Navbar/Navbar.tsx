'use client';

import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import './Navbar.scss';
import Link from 'next/link';
import { MdClose, MdMenu } from 'react-icons/md';
import useMediaQuery from '@/hooks/useMediaQuery';

const TABLET_SCREEN = 1080;

const MenuIcon = ({ menuOpen } : { menuOpen: boolean}): React.JSX.Element => {
  const Icon = menuOpen ? MdClose : MdMenu;
  return <Icon style={{ verticalAlign: 'middle' }} />
}

export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const closeMenu = () => setIsMenuOpened(false);

  // Resize navbar
  const isTabletVp = useMediaQuery(`(max-width: ${TABLET_SCREEN}px)`);

  // Disable Body
  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = '';
    }
  
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpened]);

  return (
    <nav className='s-px'>
      <Logo />
      <div className="nav-container">
        {
          isTabletVp && (
            <span 
              className='drop-menu-button'
              onClick={() => setIsMenuOpened(prevState => !prevState)}
              ><MenuIcon menuOpen={isMenuOpened} />
            </span>
          )
        }
        <ul className={`link-pages ${isMenuOpened ? 'show' : 'hide'}`}>
          <li onClick={closeMenu}><Link href='/'>Home</Link></li>
          <li onClick={closeMenu}><Link href='https://kjobmsyqzvhwxbfnjgkz.supabase.co/storage/v1/object/public/menu//menu.pdf' rel='noopener noreferrer' target='_blank'>Menù</Link></li>
          <li onClick={closeMenu}><Link href='/galleria' scroll={true}>Galleria</Link></li>
          <li onClick={closeMenu}><Link href='/orario'>Orario</Link></li>
          <li onClick={closeMenu}><Link className='btn-1s' href='/prenota'>Prenota</Link></li>
        </ul>
      </div>
    </nav>
  );
};
