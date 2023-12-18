import React from 'react'
import classes from './RemoveButton.module.css'

export const RemoveButton = ({children, ...props})=> {
  return (
    <button {...props} className={classes.rmvBtn}>
      {children}
    </button>
  )
}