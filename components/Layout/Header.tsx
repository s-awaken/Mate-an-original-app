import React, { FC } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styles from '@/styles/Layout.module.scss';
interface Props {
  
}

const Header: FC<Props> = (props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Nav}>
        <div className={styles.NavItem}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.NavItem}>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
