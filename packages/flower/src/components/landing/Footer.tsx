
import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faInfoCircle, faShoppingBasket, faPhoneAlt, faTh, faBirthdayCake, faCamera } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

type FooterMenu = 'main' | 'sweets' | 'social'

interface IFooterMenuItem {
  to: string
  icon: IconProp
  text: string
}

const menus: Record<FooterMenu, IFooterMenuItem[]> = {
  main: [
    { to: '/', icon: faHome, text: 'Home' },
    { to: '/about', icon: faInfoCircle, text: 'About' },
    { to: '/contact', icon: faPhoneAlt, text: 'Contact' },
  ],
  sweets: [
    { to: '/menu', icon: faTh, text: 'Menu' },
    { to: '/custom', icon: faBirthdayCake, text: 'Custom' },
    { to: '/checkout', icon: faShoppingBasket, text: 'Checkout' },
    { to: '/gallery', icon: faCamera, text: 'Gallery' },
  ],
  social: [
    { to: '/', icon: faInstagram, text: 'Instagram' },
    { to: '/', icon: faTwitter, text: 'Twitter' },
    { to: '/', icon: faFacebook, text: 'Facebook' },
    { to: '/', icon: faYoutube, text: 'YouTube' },
  ],
}

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const Footer: FC = () => {
  const { container, link } = useStyles()

  const renderMenu = (menu: IFooterMenuItem[]) => {
    return (
      <List>
        {menu.map(({ to, icon, text }, i) => (
          <Link key={i} className={link} to={to}>
            <ListItem button>
              <ListItemIcon>
                <FontAwesomeIcon icon={icon} />
              </ListItemIcon>
              <ListItemText>
                {text}
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    )
  }

  return (
    <footer className={container}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h5'>Heavenly Sweets</Typography>
          <Typography gutterBottom>
            Made with {<FontAwesomeIcon color='#EBB5CF' icon={faHeart} size='sm' />}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderMenu(menus.main)}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderMenu(menus.sweets)}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {renderMenu(menus.social)}
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
