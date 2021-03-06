import React, { FC } from 'react'
import { CustomHead } from './Head';
import Header from './Header';
import Footer from './Footer';
import '@/styles/Layout.module.scss';

interface Props {
  name?: string;
}

const Layout: FC<Props> = (props) => {

  return (
    <>
      <CustomHead title="This is a title" />
      <Header />
      <div className="Body">
        {props.children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
