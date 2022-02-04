import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
  title?: string;

}

export const CustomHead:FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title || 'EventUp Clone'}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
