import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllvideos } from '../services/allapis'
import { Row,Col } from 'react-bootstrap'

function View(updateState) {
const [allVideos,setAllVideos]=useState([])

// state to update delete
const [deleteUpdate,setDeleteUpdate]=useState({})

const accessAllVideos=async()=>{
  const result=await getAllvideos()
  if(result.status>=200 && result.status<300){
    setAllVideos(result.data)
  }
}

console.log(allVideos);

useEffect(()=>{
accessAllVideos()
} ,[updateState])
   return (
    <div>
<Row>

{
      allVideos.length>0?(
        allVideos.map(i=>
       <Col style={{margin:'30px'}} lg={4} md={6}> <VideoCard video={i}></VideoCard>
       </Col>  

          )
      ): <h1>No videos in your collection</h1>

      }

</Row>
    </div>
  )
}

export default View