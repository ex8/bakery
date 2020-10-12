import React, { Dispatch, FC } from 'react'
import { CardActions, Grid, Tooltip, IconButton, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons'
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
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}))

const ProductItemActions: FC<IProductItemActionsProps> = ({ expanded, setExpanded }: IProductItemActionsProps) => {
  const { expand, expandOpened, link } = useStyles()
  return (
    <CardActions>
      <Grid container justify='space-between'>
        <Grid item>
          <Link className={link} to='/menu/ff'>
            <Button
            variant='contained'
            color='secondary'
            size='small'
          >
              View Item
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Tooltip title='Add to cart' arrow>
            <IconButton>
              <FontAwesomeIcon icon={faCartPlus} />
            </IconButton>
          </Tooltip>
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
