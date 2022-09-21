import React from 'react';
import { slide as Menu } from "react-burger-menu";

export default function Navbar()    {
  return (
    // Pass on our props
    <Menu>
      <a className='menu-item' href="/home">
        Home
      </a>

      
      <a className='menu-item' href="/articles">
        Articles
      </a>


      <a className='menu-item' href="/about">
        About
      </a>


      <a className='menu-item' href="/contact">
        Contact
      </a>

    </Menu>
  );
}