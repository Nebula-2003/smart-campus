import React from 'react'
import SidebarDemo from '../_component/header'

function Studentlayout({children}) {
  return (
    <SidebarDemo role='student'>{children}</SidebarDemo>
  )
}

export default Studentlayout