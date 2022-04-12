import React, {FC} from 'react'
import styles from '@/styles/Layout.module.scss';
interface Props {
  
}

const Footer: FC<Props> = (props) => {
  return (
    <div className={styles.Footer}>
      This is Footer
    </div>
  )
}

export default Footer
