import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  },
  {
    title: 'Messages',
    path: '/Messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
    
  },
  {
    title: 'News',
    path: '/News',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks:'linkSideDec'
  },
  {
    title: 'Music',
    path: '/Music',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  },
  {
    title: 'Setting',
    path: '/Setting',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
  },
  {
    title: 'Friends',
    path: '/Friends',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
    cNameSide: 'linkSide',
    cNameSideLinks: 'linkSideDec'
    
  }

];
