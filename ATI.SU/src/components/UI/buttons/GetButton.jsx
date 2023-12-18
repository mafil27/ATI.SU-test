import React from 'react'
import classes from './GetButton.module.css'

export const GetButton = ({children, ...props})=> {
  return (
    <button {...props} className={classes.getBtn}>
      {children}
    </button>
  )
}