/**
 * Created by pjsmith on 15/11/2017.
 */
import React from 'react';
import {Badge} from 'react-bootstrap'
import Avatar from './Avatar'



const AvatarCard = (props) => (
  <div style={props.style}>
    <Avatar width={props.width} avatar_url={props.avatar_url} alt="avatar"/>
    {(props.notifications) ? <Badge style={{backgroundColor: 'red', position: 'absolute', marginTop: '-5px', marginLeft: '-15px'}}>{props.notifications}</Badge>

      : null}
    <div style={{verticalAlign: 'top', display: 'inline-block', marginLeft: 10}}>
      <div style={{ fontWeight: 'bold'}}>{props.message}</div>
      <div>{props.name}</div>
    </div>
  </div>

)



export default AvatarCard
