import React, { FC } from 'react'
import MCarousel from 'react-material-ui-carousel'
import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: '100%',
    maxHeight: '80%',
  },
}))

const Carousel: FC = () => {
  const images = [
    'https://i.imgur.com/WgQuxlv.jpg',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  ]

  const { img } = useStyles()
  return (
    <MCarousel>
      {images.map((image, i) => <img className={img} key={i} src={image} />)}
    </MCarousel>
  )
}

export { Carousel }
