import React, { useEffect, useRef, useState } from 'react'
import { loadAllCategories } from '../utilities/category-services'
import { createPost as doCreatePost } from '../utilities/post-services'
import JoditEditor from 'jodit-react'
import { Card, CardBody, Label, Form, Input, Container, Button } from 'reactstrap'
import {  toast } from 'react-toastify';
import { getUserDetails } from '../utilities/common'

const AddPost=()=> {
    const[categories,setCategories]=useState([])

    const editor=useRef(null)
    const [user,setUser]=useState(undefined)
    const[content,setContent]=useState('')
    const [post,setPost]=useState({
        title:'',
        content:'',
        categoryId:''
    })
    const handleReset =() =>{
        setPost({
            title:'',
            content:'',
            categoryId:''
        })
      }
   

useEffect(
    ()=>{
        loadAllCategories().then((data)=>{          
            setCategories(data)
            setUser(getUserDetails())

        }).catch(error=>{
            console.log("fail")

        })
    },[]
)

const fieldChanged=(event)=>
{
    setPost({...post,[event.target.name]:event.target.value})
}
const contentFieldChange=(data)=>
{
    setPost({...post,content:data})
}

const createPost=(event)=>
{
    event.preventDefault();   
    if(post.title.trim()===''){
        toast.error("post title is required !!")
        return;
    }
    if(post.content.trim()===''){
        toast.error("post content is required !!")
        return;
    }
    if(post.categoryId.trim()===''){
        toast.error("select some category!!")
        return;
    }
    post['userId']=user.id

    doCreatePost(post).then(data=>{
        toast.success("post created")
        {handleReset()}
    }).catch((error)=>{
        toast.error("error creating post")
    })
}



  return (
    <div className="wrapper">
        <Card className="shadow">
            <CardBody>
                <h3>Express Feelings to words here !!!</h3>
                <Form onSubmit={createPost}>
                    
                    <div className="my-3">
                        <Label for ="title">Post title</Label>
                        <Input
                        type='text' 
                        id='title'
                        name='title'
                        placeholder='Enter here '
                        onChange={fieldChanged}
                        className='rounded-0'/>                      
                    </div>
                    

                    <div className="my-3">
                        <Label for ="content">Post Content</Label>                 

                        <JoditEditor
                            ref={editor}
                            value={post.content}
                            onChange={contentFieldChange}
                        />
                    </div>
                    <div className="my-3">
                        <Label for ="category">Post Category</Label>
                        <Input
                        type='select' 
                        id='categoryId'
                        name='categoryId'
                        placeholder='Enter here '                        
                        onChange={fieldChanged}
                        className='rounded-0'
                        defaultValue={0}>
                        
                            <option disabled value={0}>
                                ---Select--Category---
                            </option>
                        {
                            categories.map((category)=>
                            (
                                <option value={category.categoryId} key={category.categoryId}>
                                    {category.categoryTitle}
                                </option>
                            ))
                        }
                        </Input>                     
                    </div>
                    <Container className='text-center'> 
                        <Button type='submit' color='primary'>
                            Create Post
                        </Button>
                        <Button type='reset' className='ms-2' color='danger' onClick={handleReset}>
                            Reset
                        </Button>
                    </Container>
                    
                </Form>

            </CardBody>
        </Card>       
        AddPost
    </div>
  )
}

export default AddPost