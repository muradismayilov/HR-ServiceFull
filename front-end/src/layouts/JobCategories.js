import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function JobCategories() {

function changeToGetJob(){
  window.location.href = `/dashboardjob/job`
}
function addJob(){
  window.location.href = `/dashboardjob/job/add`
}

  return (
    <div>
        <Menu pointing vertical>
        <Menu.Item name="GET JOB" onClick={() => changeToGetJob()} />
        <Menu.Item name="ADD JOB" onClick={() => addJob()} />
        <Menu.Item name="PUT JOB" />
        <Menu.Item name="DELETE JOB" />
      </Menu>
    </div>
  )
}
