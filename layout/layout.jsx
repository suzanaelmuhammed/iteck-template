import React from 'react';
import Header from '../component/layout/header/header';
import Component_Navbar from '../component/layout/navbar/navbar';
import Body from '../component/web/manset/manset';


export default function Layout({children , hasHeader = false}) {
  return (
    <div>
        {hasHeader && <Header />}
        <Component_Navbar />
        {children}
    </div>
  )
}
