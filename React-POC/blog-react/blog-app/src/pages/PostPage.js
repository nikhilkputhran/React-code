import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { loadPost } from '../utilities/post-services'
import { BASE_URL } from '../constants/constants'

const PostPage=()=> {
    const[post,setPost]=useState(null)

    useEffect(()=>{

        loadPost(postId).then((data)=>{           
            setPost(data)          
        }).catch(error=>{
            console.log(error)
        })

    },[]
    )

    const printDate=(numbers)=>
    {
        return new Date(numbers).toLocaleString()
    }

    const {postId} = useParams()
  return (
    <Base>
     <Container>
        <Row>
            <Col md={{size:12}}>

                <Card className='mt-3 ps-2' >
                    {
                        (post) &&(<CardBody>
                            <CardText>
                                Posted By <b>{post?.user?.name}</b> on <b>{printDate(post.addedDate)}</b>
                            </CardText>
                            <CardText>
                                <b>Category : </b>
                               <span className='text-muted'>{post?.category?.categoryTitle}</span>
                            </CardText>

                            <CardText className='mt-3'>
                                <h3>{post.title}</h3>
                            </CardText>
                            <CardText >
                                <div className='image-container mt-3 shadow' style={{maxwidth:'50%'}}>
                                    <img className='img-fluid' src={BASE_URL+'/post/image/'+post.imageName} alt=''  />
                                    </div>
                                    <CardText dangerouslySetInnerHTML={{__html:post.content}}/>
                            </CardText>
                        </CardBody>)
                    }
                    
                </Card>
            </Col>
        </Row>

        </Container>
    </Base>
   
  )
}

export default PostPage