import React from "react"
import {  Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import NavbarStyle from "../componentsStyle/NavbarStyle.css"
import { useDispatch } from "react-redux"
import { fetchCat } from "../services/actions/catAction"
const NavbarCompo =()=>{
   const navigate = useNavigate()
    const dispatch = useDispatch()
    const onSearch =(e)=>{
      // console.log(e)
      if(e.keyCode === 13){
        // console.log(`start searching`)
        let keyword=e.target.value
        dispatch(fetchCat(keyword))
        .then(()=>{
          navigate('/cat')
        }
        // console.log('Searched...!')
        )
      }
    }
    return(
      <div>
        <Navbar className="navbar p-0 " variant="white">
          <Container className=" navbar-container flex-row d-inline-flex  p-0 m-0">
            <div className="logo col ">
            <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/045/633/original/Coding_Cat.gif?1662445143" width={50} height={100} alt="Logo" />
   
            </div>

            <div className="menu col">
              <Nav className="navbar justify-content-between flex-row d-inline-flex " id="navbar">
                <Link to={"/"} className="nav-item text-decoration-none   text-black col">
                  <h5 className="nav-item px-2 ">Home</h5>
                </Link>
                <Link to={"/cat"} className="nav-item text-decoration-none  text-black  col">
                  <h5 className="nav-item px-2">Cats</h5>
                </Link>
                <Link to={"/upload"} className="nav-item text-decoration-none text-black  col">
                  <h5 className="nav-item px-2 ">Upload</h5>
                </Link>
                <Link to={"/about"} className="nav-item text-decoration-none text-black  col">
                  <h5 className="nav-item  px-2">About</h5>
                </Link>
                
              </Nav>
            </div>
           
          </Container>
          <div className=" mx-5">
              <InputGroup>
                <Form.Control className="search-box " 
                  onKeyDown={onSearch}
                  type="text"
                  placeholder="Search"
                  // className=" mr-sm-2"
                />
                </InputGroup>
              </div>
          
        </Navbar>
      </div>
            )
}
export default NavbarCompo