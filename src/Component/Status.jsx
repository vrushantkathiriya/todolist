import React,{useState, useEffect} from "react";
export default function Status() {

const [onlineStatus, setonlineStatus] = useState(false);
function ping() {
console.log("Hello World")
setonlineStatus(true)
console.log(onlineStatus)
}

useEffect(() => {
      console.log("call")
      setonlineStatus(true)
      console.log(onlineStatus)
  }, [onlineStatus]);
  return (
    <div>
     <h1>online:{onlineStatus}</h1>
     <button onClick={ping}>status</button>
    </div>
  )
}

