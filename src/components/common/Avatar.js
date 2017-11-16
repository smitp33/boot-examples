/**
 * Created by pjsmith on 15/11/2017.
 */
import React from 'react';
import {Image} from 'react-bootstrap'

const Avatar = (props) => (
  <span>
  <Image style={{width: props.width}} src={props.avatar_url} alt="avatar" circle/>
    
  </span>
)

export default Avatar
