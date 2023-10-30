import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Trash2} from 'react-feather'
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import {format} from 'date-fns'
function VideoCard({video,deleteUpdate}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() =>  {
      setShow(true);
      // id
var id=uniqid()
// title
var video_title=video.caption

// url
var url=video.video_url
// date
var date=format(new Date(),'yyyy-MM-dd h:mm:ss a')
// console.log(date);
// api call
const body={id,video_title,url,date}
if(body){
  const result=await addHistory(body)
  console.log(result);
}

    }
  const handleDelete=async(id)=>{
  const result=await deleteVideo(id)
if(result.status>=200 && result.status<300){
  deleteUpdate(result.data)
}
// body
  }
  const dragStart=(e,id)=>{
    console.log("drag started...source card id-"+id);
    e.dataTransfer.setData('cardId',id)
  }
  return (
    <div className='mb-5' >
          <Card draggle onDragStart={(e)=>dragStart(e,video.id)} style={{ width: '18rem',margin:'1px' }}>
      <Card.Img  onClick={handleShow} 
      variant="top" height={'200px'} src={video.cover_image} />
      <Card.Body>
        <Card.Title>{video.caption}
        <Trash2 onClick={()=>handleDelete(video.id)} size={40} className='btn'></Trash2>

        </Card.Title>
        <Card.Text>
         {/* <i class="fa-solid fa-trash fa-fade fa-lg"></i>  */}
                 </Card.Text>
      </Card.Body>
    </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="300" 
        src={video.video_url} 
        title="Google Pixel 8 Pro | 4 days Review | Malayalam with Eng Sub" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default VideoCard