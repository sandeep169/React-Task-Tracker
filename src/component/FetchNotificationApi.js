import React, { useEffect, useState } from 'react'


export default function FetchNotificationApi(id) {
    const [notification,setNotication] = useState({
        allEmail: false,
        review:false,
        name:""
    })
    // const [userData, setUserData] = useState();
    const toggleNotification = async () => {
        const res = await fetch('http://localhost:5000/jsonNotification');
        const data = await res.json();
        // console.log("toggle data", data);
        // const test = data.map((e) => {
        //     return {
        //         allEmail: e.notification_of_all_email,
        //         review:e.review
        //     }
        // }
        // )
        // setNotication(data[0]);
        setNotication(data)

        // setUserData(test.allEmail);
        // setAllEmailNotification(test);

    }
    console.log("user data  value ", notification);
    //update value by toggle all notification input
    // const updateAllNotification = (e) => {
    //     setAllEmailNotification(e);

    // }
    useEffect(()=>{

    },[id])
    return (
        <>
            <div>
                <button onClick={toggleNotification}>call user notify</button>
            </div>
            {/* Wwithout ? thrown map function not defined error */}
            
            <div>
            <h1>yesh: {notification.name} </h1>
            {/* <h1>fetched data from notification api : {notification?.map((e) => e.shippingUpdate)}</h1> */}
        </div>

            <div className="row">
                <div className="col">
                    <ul className="notification-itemlist">
                        <li>
                            All Notifications
                            <span>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitch1"
                                        // value={userData?.map((e) => e.notification_of_all_email)}
                                        // value={allEmailNotification}
                                        value = {notification.allEmail}

                                        // onClick={(e) => updateAllNotification(e.currentTarget.checked)}
                                        // onClick= {toggleNotification}
                                        //on click for button 
                                        //on change for form feild
                                        checked={notification.allEmail}
                                        // checked= {userData?.map((e) => e.notification_of_all_email)}
                                        onChange={e =>setNotication({...notification,allEmail:e.target.checked}) }
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitch1"
                                    ></label>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    )
}
