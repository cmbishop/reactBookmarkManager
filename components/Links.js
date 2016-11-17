import React from "react"

const Link = ({linkdata}) => (
  <a className='week-link' href={linkdata.link}>{linkdata.link_text}</a>
)

export default Link
