import { baseUrl } from "./baseurl"
import { commonRequests } from "./commonRequests"


// add video
export const addVideo=async(body)=>{
    return await commonRequests('POST',`${baseUrl}/videos`,body)
}


// get all videos
export const getAllvideos=async()=>{
    return await commonRequests('GET',`${baseUrl}/videos`,{})
}

// delete single video
export const deleteVideo=async(id)=>{
    return await commonRequests('DELETE',`${baseUrl}/videos/${id}`,{})
}
// add category
export const addCategory=async(body)=>{
    return await commonRequests('POST',`${baseUrl}/categories`,body)
}

// get all categories
export const getAllCat=async()=>{
    return await commonRequests('GET',`${baseUrl}/categories`,{})
}

// category delete
export const deleteCat=async(id)=>{
    return await commonRequests('DELETE',`${baseUrl}/categories/${id}`,{})
}
// add history
export const addHistory=async(body)=>{
    return await commonRequests('POST',`${baseUrl}/histories`,body)
}
// get all histories
export const getAllHistory=async()=>{
    return await commonRequests('GET',`${baseUrl}/histories`,{})
}
// delete history
export const deleteHistory=async(id)=>{
    return await commonRequests('DELETE',`${baseUrl}/histories/${id}`,{})
}
// drag and drop
export const getVideo=async(id)=>{
    return await commonRequests('GET' ,`${baseUrl}/videos/${id}`,{})
}
// upadte category
export const updateCategory=async(id,body)=>{
    return await commonRequests('put',`${baseUrl}/categories/${id}`,body)
}






























