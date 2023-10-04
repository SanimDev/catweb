import React from 'react';
import { useEffect, useState } from "react";
import {  Card, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import HeartButton from "./LoveIcon";
import Bin from "./Bin";
import EditIcon from "./EditIcon";
import { fetchCat, removeCatById } from "../services/actions/catAction";

const CatCard =()=>{
  
  const dispatch =useDispatch();
  
  const {json} = useSelector(state => state.CAT_REDUCER)
  
  const [isReload,setIsReload]=useState(false)
  
  useEffect(()=>{
    console.log(json)
    dispatch(fetchCat())
    .then(()=>{
      console.log(`Cat has been fetched`)
      setIsReload(false)
    })
  },[isReload])

  const removeIconHandler =(id)=>{
    // console.log(id)
    let confirm = window.confirm('Are you sure to remove this cat?')
    if(confirm){
      dispatch(removeCatById(id)).then(()=>setIsReload(true))
    }
  }


return(
  <Row className="m-3" >
    {
      json&&json.map((cat)=>(
        <Col>
            <div className="row">
              <div className="col">
              <Card style={{ width: '18rem' }}>
              <Card.Img   src={cat.url} />
              <Card.Body>
                <Card.Title>
                  {cat.breed_ids}</Card.Title>
                <Card.Text>
                  {cat.sub_id}
                </Card.Text>
                <Row className="flex justify-content-between m-0">
                  <Col  className="d-flex justify-content-start p-0">
                  
                  < HeartButton/ >
                  </Col>
                  <Col className="d-flex justify-content-end p-0">
                    <div>

                       <svg onClick={()=>removeIconHandler(cat.id)}
                       xmlns="http://www.w3.org/2000/svg"
                       width="16"
                       height="16"
                       fill="currentColor"
                       class="bi bi-trash-fill"
                       viewBox="0 0 16 16"
                     >
                       <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                     </svg>  
                    </div>

                    <div className="mx-2">
                      <EditIcon/>
                    </div>

                  </Col>
                </Row>
              </Card.Body>
              </Card>
              </div>

            
            </div>
        </Col>
      ))
    }

  </Row>
    
)
}



export default CatCard;