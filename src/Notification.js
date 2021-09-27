import React  from "react";
import { Link } from "react-router-dom";
import NotificationPreferenceComponent from "./component/NotificationPreferenceComponent";

function Notification() {
    return(
        <>
        <Link to='/' style={{textDecoration:'none', color: "grey", margin:"10px"}}>Back</Link>
        <NotificationPreferenceComponent/>
        </>
    )
}
export default Notification;