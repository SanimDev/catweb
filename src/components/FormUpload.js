import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap"
import UploadIcon from "./UploadIcon"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { uploadCatAction } from "../services/actions/catAction";
import uploadCatImage from "../services/fileService";
import FormStyle from "../componentsStyle/FormStyle.css"

import page from "../pageStyle/page.css"


export const FormUpload =()=>{

  const dispatch = useDispatch()
  const [fileImage,setFileImage]=useState({})
  
  const  [catRequest,setCatRequest] = useState({
    'sub_id':'',
    'breed_ids':''
  });

  const onValueChangeHandler =(e)=>{
          
    const {name,value}=e.target

    setCatRequest (prevState =>{
      return{
        ...prevState,
        [name]:value
      }
    })
    console.log(catRequest)
}

const onFileImageChangeHandler =(e)=>{
    
  setFileImage(e.target.files[0])

  console.log(e.target.files[0])

}

const onFormSubmitHandler = (e)=>{
  
  e.preventDefault()
    let formData = new FormData()
    formData.append('sub_id',catRequest.sub_id)
    formData.append('breed_ids',catRequest.breed_ids)
    formData.append('file',fileImage)
    uploadCatImage(formData) 
    .then(json=>{
      console.log(json)
      dispatch(uploadCatAction(catRequest))
      .then(()=>{
        console.log('data uploaded')

      })
    })
    

 
}

    return(
        <Row className=" m-3 flex-wrap ">
          <Col className="bg-img">
          </Col>
          <Col>
            <Form className="fm-upload p-5 " onSubmit={onFormSubmitHandler} >
          <h3 className="mb-3 " style={{color:"#435334"}}>Upload Cat Image</h3>
          <InputGroup className="mb-3  ">
            <Form.Control className="form-box-color" type="text" name="breed_ids" 
              value={catRequest.breed_ids}
              onChange={onValueChangeHandler}
              placeholder="Cat Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2" />
          </InputGroup>
    
          <InputGroup className="mb-3">
            <Form.Control className="form-box-color" name="sub_id" 
            value={catRequest.sub_id}
            onChange={onValueChangeHandler}
            as="textarea" 
            placeholder="Cat's description" 
            aria-label="With textarea" 
            />
          </InputGroup>
    
          <InputGroup  className="uploadForm row d-flex  text-center  form-box-color  ">
            <div className="m-1">
              <UploadIcon/>
              </div>
            <div className="m-1 ">
            <Form.Control className="uploadFileImage  "   type="file" id="uploadFileImage" 
            onChange={onFileImageChangeHandler}
            />
            </div>
            
          </InputGroup>
          
          <div className="text-center">
          <Button type="submit" className="btnUpload my-4 justify-content-center  w-100"><h6>UPLOAD</h6></Button>
          </div>
    
            </Form>
          </Col>
          

        </Row>
      )
} 