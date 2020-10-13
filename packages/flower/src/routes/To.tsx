import React, { FC, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

interface IToProps {
  to: string
  children: ReactNode
}

const useStyles = makeStyles(() => ({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const To: FC<IToProps> = ({ to, children }: IToProps) => {
  const { link } = useStyles()
  return (
    <Link className={link} to={to}>
      {children}
    </Link>
  )
}

export { To }
