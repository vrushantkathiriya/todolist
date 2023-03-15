import React, { useRef } from "react";
import {Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
    let inputname = useRef(null)
    let inputlastname = useRef(null)
    let inputAge = useRef(null)
    let inputEmail = useRef(null)
    let inputPhoneNumber= useRef(null)

    function submitform(){

        console.log({
          firstname:inputname.current.value,
          lastName :inputlastname.current.value,
          Age:inputAge.current.value,
          Email : inputEmail.current.value,
          PhoneNumber : inputPhoneNumber.current.value
        });
    }
  return (
    <div className="App" id="form">
      <h1>Enter Your Details Below!!</h1><hr></hr>
      <form onSubmit={submitform}>
    <label> Enter Your  First Name : </label>
       <input ref={inputname} type="text"/>
       <br/> <br/>
       <label> Enter Your Last Name :   </label>
       <input ref={inputlastname} type="text"/>
       <br/><br/>
       <label> Enter Your Age :  </label>
       <input ref={inputAge} type="number"/>
       <br/><br/>
       <label> Enter Your Email :  </label>
       <input ref={inputEmail} type="text"/>
       <br/><br/>
       <label> Enter Your Phone Number :  </label>
       <input ref={inputPhoneNumber} type="number"/>
       <br/>
       <br/>
       <Button onClick={()=>submitform()}>Submit</Button>
      </form>
    </div>
  )
}

export default Contact;