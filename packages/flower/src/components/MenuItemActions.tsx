import React, { Dispatch } from 'react'
import { CardActions, Grid, Tooltip, IconButton } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

export interface IMenuItemActionsProps {
  expanded: boolean
  setExpanded: Dispatch<boolean>
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
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
  label: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(1),
    margin: theme.spacing(0.5),
  },
  labelIcon: {
    paddingRight: theme.spacing(0.5),
  },
}))

const MenuItemActions: React.FC<IMenuItemActionsProps> = ({ expanded, setExpanded }: IMenuItemActionsProps) => {
  const { expand, expandOpened } = useStyles()
  return (
    <CardActions>
      <Grid container justify='space-between'>
        <Grid item>
          <Tooltip title='View' arrow>
            <IconButton>
              <FontAwesomeIcon icon={faEye} />
            </IconButton>
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

export default MenuItemActions
