import React, { Dispatch } from 'react'
import { CardActions, Grid, Tooltip, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export interface IProductItemActionsProps {
  expanded: boolean
  setExpanded: Dispatch<boolean>
}

const useStyles = makeStyles((theme: Theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpened: {
    transform: 'rotate(180deg)',
  },
}))

const ProductItemActions: React.FC<IProductItemActionsProps> = ({ expanded, setExpanded }: IProductItemActionsProps) => {
  const { expand, expandOpened } = useStyles()
  return (
    <CardActions>
      <Grid container justify='space-between'>
        <Grid item>
          <Tooltip title='View' arrow>
            <Link to='/menu/ff'>
              <IconButton>
                <FontAwesomeIcon icon={faEye} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title='Add to cart' arrow>
            <IconButton>
              <FontAwesomeIcon icon={faCartPlus} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={expanded ? 'Collapse' : 'Expand'} arrow>
            <IconButton
              className={clsx(expand, { [expandOpened]: expanded })}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default ProductItemActions
