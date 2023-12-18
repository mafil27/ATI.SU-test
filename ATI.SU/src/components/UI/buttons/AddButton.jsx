import React from 'react'
import classes from './AddButton.module.css'

export const AddButton = ({children, ...props})=> {
  return (
    <button {...props} className={classes.addBtn}>
      {children}
    </button>
  )
}