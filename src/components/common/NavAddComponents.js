/**
 * Created by pjsmith on 16/11/2017.
 */
import React from 'react'

// Need this custom component to remove warnings from react-bootstrap
// passing down invalid attributes to the hr element
export const NavHr = (props) => {
  const { activeKey, activeHref, ...remaining } = props
  return (
      <hr {...remaining}/>
  )
}

export const NavSpacer = (props) => {
  const { activeKey, activeHref, ...remaining } = props
  return (
      <div {...remaining}/>
  )

}
