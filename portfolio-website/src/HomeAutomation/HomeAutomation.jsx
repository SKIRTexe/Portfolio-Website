import { useState } from "react";
import "./HomeAutomation.css"
import Login from "./login";
import "./login.css"

function moveLock(lockState){
    return ()=>{
        fetch("/move", {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({state: lockState?"ON":"OFF"})
        });
    }
};
function HomeAutomation(){
    const [loggedin,setloggedin] = useState(false);
    return <>
    {!loggedin && <Login sli={setloggedin}/>}
    {loggedin && <>
        <button className="button" onClick={moveLock(true)}>On</button>
        <button className="button" onClick={moveLock(false)}>Off</button>
    </>}
    </>
};
export default HomeAutomation