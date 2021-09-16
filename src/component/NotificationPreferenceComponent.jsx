import React, { useEffect, useState } from 'react'


const NotificationPreferenceComponent = () => {

    const [notification, setNotification] = useState({
        allEmail: true,
        emailOlderUpdate: true,
        emailInventoryUpdate: true,
        emailCustomerReviewsRatingUpdate: true,
        organizationUpdate: true,
        shippingUpdate: true,
        name:""
    });
    const toggleNotification= async() =>{
        try{
        const res =  await fetch('http://localhost:5000/notification');
        const data = await res.json();
        //passing the object of notificaton not whole json data
        setNotification(data[0]);
        }catch(error){
            console.log(error);
        }
    }
    

    if(!true){
    return (
        <>
        <div>
            <button onClick={toggleNotification}>fetchNotification api</button>
            {/* <h1>fetched data from notification api : {notification?.map((e) => e.shippingUpdate)}</h1> */}
             {/* <h4>fetched data from notification api : {notification.name}</h4> */}
        </div>
        </>
        )
    }//if block end
    else{
return(
    <>
     <button onClick={toggleNotification}>fetchNotification api</button>
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
                                        value={notification.allEmail}
                                        checked={notification.allEmail}
                                        onChange={e => setNotification({...notification,allEmail:e.target.checked})}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitch1"
                                    ></label>
                                </div>
                            </span>
                        </li>
                        <li>
                            Emails
                            <ul>
                                <li>
                                    Enable to receive Order Update
                                    <span>
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customSwitch2-1"
                                                value={notification.emailOlderUpdate}
                                        checked={notification.emailOlderUpdate}
                                        onChange={e => setNotification({...notification,emailOlderUpdate:e.target.checked})}
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="customSwitch2-1"
                                            ></label>
                                        </div>
                                    </span>
                                </li>
                                <li>
                                    Enable to receive Inventory Update
                                    <span>
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customSwitch2-2"
                                                value={notification.emailInventoryUpdate}
                                                checked={notification.emailInventoryUpdate}
                                                onChange={e => setNotification({...notification,emailInventoryUpdate:e.target.checked})}
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="customSwitch2-2"
                                                
                                            ></label>
                                        </div>
                                    </span>
                                </li>
                                <li>
                                    Enable to receive Customer reviews and ratings
                                    <span>
                                        <div className="custom-control custom-switch">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customSwitch2-3"
                                                value={notification.emailCustomerReviewsRatingUpdate}
                                                checked={notification.emailCustomerReviewsRatingUpdate}
                                                onChange={e => setNotification({...notification,emailCustomerReviewsRatingUpdate:e.target.checked})}
                                            />
                                            <label
                                                className="custom-control-label"
                                                htmlFor="customSwitch2-3"
                                            ></label>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Organization Updates
                            <span>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitch3"
                                        value={notification.organizationUpdate}
                                        checked={notification.organizationUpdate}
                                        onChange={e => setNotification({...notification,organizationUpdate:e.target.checked})}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitch3"
                                    ></label>
                                </div>
                            </span>
                        </li>
                        <li>
                            Shipping Updates
                            <span>
                                <div className="custom-control custom-switch">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customSwitch4"
                                        value={notification.shippingUpdate}
                                        checked={notification.shippingUpdate}
                                        onChange={e => setNotification({...notification,shippingUpdate:e.target.checked})}
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customSwitch4"
                                    ></label>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}//else end
}//function end
export default NotificationPreferenceComponent
