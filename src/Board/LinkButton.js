import React from 'react'
import { Button } from 'elemental'
import { styles } from 'refire-app'

const LinkButton = ({ visible, linkHere, styles }) => {
  if (visible) {
    return (
      
      <Button type="submit" onclick="">
        Read the Article 
      </Button>
    )
  } else {
    return <span />
  }
}

const css = {
  button: {
    width: "100%",
    "@media (min-width: 480px)": {
      width: "auto",
      marginRight: "10px",
    },
  },
}

export default styles(css, LinkButton)
