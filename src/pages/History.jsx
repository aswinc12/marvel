import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash } from 'react-feather';
import { getAllHistory } from '../services/allapis';
function History() {
    const [histories,setHistories]=useState()
    const getHistories=async()=>{
        const {data}= await getAllHistory()
        setHistories(data)
    }

    useEffect(()=>{
getHistories()
    },[])
    console.log(histories);
  return (
    <div className='bg-black' > 
        <h1 className='text-info' >Watch History</h1>
        { histories?.length>=0?(
              <Table className='w-75 container pb-5 mb-5' striped bordered hover variant="dark">
              <thead className='text-center fs-5 text-black'>
                <tr className='text-black'>
                  <th>#</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>video Url</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                {
                histories?.map((i,index)=>
                <tr>
                  <td>{index+1}</td>
                  <td>{i?.date}</td>
                  <td>{i?.video}</td>
                  <td>{i?.url}</td>
                  <td className='text-center' >
                    <Trash size={55} className='btn text-black' ></Trash>
                    </td>
                </tr>
                )}
              </tbody>
            </Table>):
        
        <h1 className='text-center p-5'>No Histories</h1>
         } 
         </div>
  )
}

export default History
