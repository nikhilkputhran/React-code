import React, { useEffect, useState } from 'react'
import { loadAllPosts } from '../utilities/post-services'
import {Row ,Col,Pagination,PaginationItem,PaginationLink, Container} from 'reactstrap'
import Post from './Post';

const NewFeed=()=> {

    const[postContent,setPostContent]=useState({
        content:[],
        totalPages:'',
        totalElements:'',
        pageSize:'',
        lastPage:false,
        pageNumber:''
    });
    useEffect(()=>{
        changePage(0);

    },[]
    )

    const changePage=(pageNumber=0,pageSize=5)=>{
        if(pageNumber > postContent.pageNumber && postContent.lastPage){
            return
        }
        if(pageNumber < postContent.pageNumber && postContent.pageNumber==0){
            return
        }
        loadAllPosts(pageNumber,pageSize).then((data)=>{
            console.log(data)
            setPostContent(data)
            window.scroll(0,0)
        }).catch(error=>{
            console.log(error)
        })
    }
  return (
   <div className="container-fluid">
    <Row>
        <Col md={{size:10,offset:1}}>

        <h1 color='Base'>Blogs Count({postContent?.totalElements})</h1>
        {
            postContent.content.map((post)=>(
                <Post post={post} key={post.postId}/>
            ))
        }
      <Container className='mt-3'>
      <Pagination size='lg'>
            <PaginationItem onClick={()=>changePage(postContent.pageNumber - 1)} disabled={postContent.pageNumber==0}>
                <PaginationLink previous>
                    previous
                </PaginationLink>
            </PaginationItem>
            {
                [...Array(postContent.totalPages)].map((item,index)=>(
                    <PaginationItem onClick={()=>changePage(index)} active={index==postContent.pageNumber} key={index}>
                        <PaginationLink>
                            {console.log(index)}
                            {index+1}
                        </PaginationLink>

                    </PaginationItem>

                ))
            }

            <PaginationItem onClick={()=>changePage(postContent.pageNumber + 1)} disabled={postContent.lastPage}>
                <PaginationLink next>
                    next
                </PaginationLink>
            </PaginationItem>
        </Pagination>
      </Container>
       

        </Col>

    </Row>


   </div>
  )
}

export default NewFeed