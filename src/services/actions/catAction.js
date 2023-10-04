// import { BASE_URL } from "../../constan/ts";
import { BASE_URL } from "../constants";
import { FETCH_CATS, UPLOAD_CATS } from "./actionTypes";


export const removeCatById = (id)=>{
      return(dispatch)=>{
        return fetch(`${BASE_URL}images/${id}`,{
          method:"DELETE",
          headers: {
            "x-api-key": "live_AsZ63LQ07ay0tKzMx667Ush1tygfi9fkupZdwt7p2tjURpMAPttFXCSs17AjwV2t",
            "Content-Type":"application/json"
          }
          })
        .then(res=>res.json())
        .then(json=>{
          if(json.status){
            return Promise.resolve()
          }
        })
        .catch(error => console.log("error", error))
      }
}

export const uploadCatAction =  (catRequest) => {
  return (dispatch)=>{
      return fetch(`${BASE_URL}images/upload`,{
        method: "POST",
        headers: {
          "x-api-key": "live_AsZ63LQ07ay0tKzMx667Ush1tygfi9fkupZdwt7p2tjURpMAPttFXCSs17AjwV2t",
          "Content-Type":"application/json"
        } ,
        body:JSON.stringify(catRequest)
    })
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
          dispatch({
          type: UPLOAD_CATS,
          payload:json
        })
        return Promise.resolve()
    })
    .catch(error => console.log("error", error))
  }
  
};


export const fetchCat =(keyword='')=>{
    return(dispatch)=> {
        return fetch(`${BASE_URL}images/?limit=10&page=0&order=DESC&breed_ids=${keyword}&api_key=live_AsZ63LQ07ay0tKzMx667Ush1tygfi9fkupZdwt7p2tjURpMAPttFXCSs17AjwV2t`)
        .then(res => res.json())
        .then(json =>{
        console.log(json)   
        dispatch({
            type: FETCH_CATS,
            payload:json
        })
        return Promise.resolve() 
        } ) 
        .catch(error => console.log("error", error))
    }

}



