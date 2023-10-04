import { Col, Row } from "react-bootstrap"
import page from "../pageStyle/page.css"
const About =()=>{
    return(
    <div className="px-4">
      
      {/* start banner about */}
      <Row className="about-banner  text-justify py-2">
        <Col className="banner-cl" >
        <h3>MISSION?</h3>
       <p>At Cats.com, we’re here to give you the knowledge you need to give your cat the best life possible. From in-depth cat product reviews to veterinarian-written guides on cat health issues, medications, and more, you’ll find everything you need to give your cat the best—all in one place.</p>
        </Col>
        <Col className="banner-cl"></Col>
        
      </Row>
      {/* end banner about */}
       

       {/* start about 3 column */}
       <Row className="py-4">

        <Col className="about-col text-justify ">
            <h3>We do what’s right for cats.</h3>
            <p>Our team is 100% cat-obsessed, and we’re dedicated to providing safe, reputable information that keeps cats happy and healthy.</p>
        </Col>
        
        <Col className=" about-col text-justify ">
            <h3>We don’t want to waste your time.</h3>
            <p>If you’ve spent some time looking for cat information on the web, you’ll know that a lot of it is slow, boring, and even seems like it was copied and pasted from somewhere else. We’re here to get you the facts with no fluff—that way, you can spend less time researching and more time with your cat.</p>
        
        </Col>
        
        <Col className="about-col text-justify ">
            <h3>We’re serious about not being “bought”.</h3>
            <p>While other cat product reviewers receive free products in exchange for reviews and even accept money behind-the-scenes for a good review, we have a strict no-paid-reviews policy. We buy all of our own products for review and test them with real cats.</p>

        </Col>

       </Row>
       {/* end about 3 column */}       

             {/* start banner about */}
      <Row className="contact-banner  text-justify py-4 px-2">
        <Col className="banner-cl" >
        
        <h3>Contact Us</h3>
        
        {/* location contact with icon */}
        <span className=" d-inline-flex   ">
        <svg className="col" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
        <p className="col pb-2">St:907, Sangkat Toul Sangke, Khan Russey Keo,Phnom Penh, Cambodia </p>
        </span>

        {/* phpne contact with icon */}
        <span className="d-flex">
        <svg  className="col" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
        </svg>            
        <p className="col ">(+885) 86308033</p>
        </span>


       {/* Telegram contact with icon */}
        <span className="d-flex">
        <svg className="col  " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
        </svg>
           <a className="link-contact col m-1" href="https://t.me/Tesnim_Ly" >
        <p className="">Telegram Contact</p></a>
        </span>

  {/* emaim contact with icon */}
  <span className="d-flex">
  <svg className="col" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
</svg>
    <a className="col mb-1 link-contact" href="mailto: snim46919@gmail.com " >
    <p>snim46919@gmail.com</p></a>
    </span>


       
     
       

        </Col>
        <Col className="banner-cl"></Col>
        
      </Row>
      {/* end banner about */}

       </div>


 
    )
}
export default About