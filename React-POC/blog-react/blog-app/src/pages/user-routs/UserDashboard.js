import React from 'react'
import Base from '../../components/Base'
import AddPost from '../../components/AddPost'
import { Container } from 'reactstrap'

const UserDashboard = ()=> {
  return (
    <div>
    <Base>
    <Container>
      <AddPost />
    </Container>
    
    </Base>
    </div>
  )
}

export default UserDashboard