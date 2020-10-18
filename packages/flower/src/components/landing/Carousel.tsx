import React, { FC } from 'react'
import MCarousel from 'react-material-ui-carousel'
import { makeStyles, Theme } from '@material-ui/core'
import clsx from 'clsx'

interface ICarouselProps {
  navAlwaysVisible?: boolean
  noHeight?: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  img: {
    width: '100%',
    objectFit: 'cover',
  },
  yHeight: {
    [theme.breakpoints.up('sm')]: {
      height: '500px',
    },
  },
}))

const Carousel: FC<ICarouselProps> = ({ navAlwaysVisible, noHeight }: ICarouselProps) => {
  const images = [
    'https://i.imgur.com/WgQuxlv.jpg',
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    'https://images.unsplash.com/photo-1514056052883-d017fddd0426',
  ]

  const { img, yHeight } = useStyles()
  let imageStyles: string = clsx(img, yHeight)
  if (noHeight) {
    imageStyles = clsx(img)
  }
  return (
    <MCarousel navButtonsAlwaysVisible={navAlwaysVisible}>
      {images.map((image, i) => <img className={imageStyles} key={i} src={image} />)}
    </MCarousel>
  )
}

export { Carousel }
