import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function MiscCategories() {
  return (
    <div>
   
<Menu pointing vertical>
        <Menu.Item name="GET" as={NavLink} to="/dashboardmisc/misc"/>
        <Menu.Item name="ADD" as={NavLink} to="/dashboardmisc/misc/add" />
        <Menu.Item name="PUT" />
        <Menu.Item name="DELETE" />
      </Menu>


    </div>
  )
}
