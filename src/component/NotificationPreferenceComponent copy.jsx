import React, { useEffect, useState } from 'react'


const NotificationPreferenceComponent = () => {
    const [allEmailNotification, setAllEmailNotification] = useState(true);
    const [emailOlderUpdateNotification, setEmailOlderUpdateNotification] = useState(true);
    const [emailInventoryUpdateNotification, setEmailInventoryUpdateNotification] = useState(false);
    const [emailCustomerReviewsRatingUpdateNotification, setEmailCustomerReviewRatingUpdateNotification] = useState(true);
    const [organizationUpdateNotification, setOrganizationUpdateNotification] = useState(false)
    const [shippingUpdateNotification, setShippingUpdateNotification] = useState(false)

    //api data
    const [notify, setNotify] = useState([])
    const [toggleEmail,setToggleEmail] =useState([]);
    const fetchNotification =  async () => {
       try{
           const res =  await fetch('http://localhost:5000/tasks');
           const data = await res.json()
           const test = data.map((t) => {
               return{
                   id : t.id,
                   name :t.text
               };
           });
           console.log(test);
           setNotify(test);
       } catch(error){
           console.log(error);
       }
    }
    //fetch user notification

    const fetchUserNotification=()=>{
        return;
    }
    //notification reminder
    const updateAllNotification = (e) => {
        setAllEmailNotification(e);
        setEmailOlderUpdateNotification(e);
        setEmailInventoryUpdateNotification(e);
        setEmailCustomerReviewRatingUpdateNotification(e)
        setOrganizationUpdateNotification(e);
        setShippingUpdateNotification(e);
    }
    //  useEffect(() => {
    //     // setAllEmailNotification(true);
    // //    const  getNotification = async() => {
    // //         const res = await fetchNotification();
    // //         setNotify(res)
    // //     }
    // //    getNotification()
    // //    console.log(notify);

    //   },[])
    
    
    return (
        <>
        <div>
            <button onClick={fetchUserNotification}>fetchNotification api</button>
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
                                        value={allEmailNotification}
                                        onClick={(e) => updateAllNotification(e.currentTarget.checked)}
                                        checked={allEmailNotification}
                                        onChange={e => {}}
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
                                                value={emailOlderUpdateNotification}
                                                onClick={(e) => setEmailOlderUpdateNotification(e.currentTarget.checked)}
                                                checked={emailOlderUpdateNotification}
                                                onChange={e => {}}
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
                                                value={emailInventoryUpdateNotification}
                                                onClick={(e) => setEmailInventoryUpdateNotification(e.currentTarget.checked)}
                                                checked={emailInventoryUpdateNotification}
                                                onChange={e => {}}
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
                                                value={emailCustomerReviewsRatingUpdateNotification}
                                                onClick={(e) => setEmailCustomerReviewRatingUpdateNotification(e.currentTarget.checked)}
                                                checked={emailCustomerReviewsRatingUpdateNotification}
                                                onChange={e => {}}
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
                                        value={organizationUpdateNotification}
                                        onClick={(e) => setOrganizationUpdateNotification(e.currentTarget.checked)}
                                        checked={organizationUpdateNotification}
                                        onChange={e => {}}
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
                                        value={shippingUpdateNotification}
                                        onClick={(e) => setShippingUpdateNotification(e.currentTarget.checked)}
                                        checked={shippingUpdateNotification}
                                        onChange={e => {}}
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
}

export default NotificationPreferenceComponent
