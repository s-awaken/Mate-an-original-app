import React from 'react'
import classNames from 'classnames';
import './style.button.scss';

type buttonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info';

interface Props {
  text: string;
  type?: buttonType;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}
export const Button = ({ text,type,size,disabled,onClick }: Props) => {
  
  const basicStyles = classNames('button',{
    'button--primary': type === 'primary',
    'button--secondary': type === "secondary",
    'button--warning': type === "warning",
    'button--danger': type === "danger",
    'button--success': type === "success",
    'button--info': type === "info",
    'button__size--small': size === 'small',
    'button__size--medium': size === 'medium',
    'button__size--large': size === 'large',
  });
  return (
    <button disabled={disabled} className={basicStyles} onClick={onClick}>{text}</button>
  )
}
