import React from 'react'
import { IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const SocialButtons: React.FC = () => {
  return (
    <div>
      <IconButton><FontAwesomeIcon icon={faInstagram} /></IconButton>
      <IconButton><FontAwesomeIcon icon={faTwitter} /></IconButton>
      <IconButton><FontAwesomeIcon icon={faFacebook} /></IconButton>
    </div>
  )
}

export default SocialButtons
