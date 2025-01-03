// import React from 'react'
import {MdMessage} from "react-icons/md";
import styles from './Button.module.css';

const Button = (props) => {
   
    const {isOutline, icon, text, ...rest} =props;
 
  return (
   <button 
   {...rest}
   className= { isOutline ? styles.mail_btn : styles.first_btn }>
     
    {icon}
    {text}
    
   </button>
  )
}

export default Button