/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Grid} from '@material-ui/core'

const image = '/static/images/cards/signup2.jpg';

export default function Signup() {
  return (
    // <Grid container     style={{width: '100%'}}>
    //   <img
    //     style={{width: '100%', objectFit: 'center', objectPosition: 'center center'}}
    //     src='/static/images/cards/signup2.jpg' />
    //     <Grid item xs={12} >hello</Grid>
    // </Grid>
    <div style={{backgroundImage: `url(${image})`}}>

    </div>
  )
}
