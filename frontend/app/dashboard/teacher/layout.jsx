import React from 'react'
import SidebarDemo from '../_component/header'

function TeacherLayout({children}) {
  return (
    <SidebarDemo role='teacher'>
      {children}
    </SidebarDemo>
  )
}

export default TeacherLayout