import React from 'react'
import SidebarDemo from './_component/header'
function layout({children}) {
  return (
    <div>
        <SidebarDemo>{children}</SidebarDemo>
    </div>
  )
}

export default layout