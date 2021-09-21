import React, { useEffect, useState } from 'react'


const oldNotificationPreferenceComponent = (id) => {

    const [notification, setNotification] = useState({
        allNotification: false,
        shippingUpdate: true,
        emailOrderUpdate: true,
        emailReviewsUpdate: true,
        organizationUpdate: true,
        emailInventoryUpdate: true,
    });
    const fetchNotfication = async (id) => {
        const res = fetch(`http://localhost:5000/tasks/${id}`);
        const data = (await res).json();
        // const data = await res.json();
        // console.log(data);
        return data;
    }

    const toggleNotification = async (id) => {
        // console.log(id);
        const taskToToggle = await fetchNotfication(id)
        const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
        const data = await res.json();
        // setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
    }
    const toggleNotification = async () =>{
        const toggle = await fetchNotfication();
        const updateNOtfication = {...notification,}
        const res = await fetch(`http://localhost:5000/user_preference`,{
            method:'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(updateNOtfication)
        })
        const data = await res.json();
        setNotification
    }
    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const res = await fetch("http://localhost:5000/user_preference");
                const data = await res.json();
                let obj = {
                    emailOrderUpdate: data.data[0].preferences["email-order-update"],
                    emailInventoryUpdate: data.data[0].preferences["email-inventory-update"],
                    emailReviewsUpdate: data.data[0].preferences["email-reviews-update"],
                    organizationUpdate: data.data[0].preferences["organization-update"],
                    shippingUpdate: data.data[0].preferences["shipping-update"],
                }
                console.log(obj);
                const x = true;
                let d = Object.values(obj);
                d.forEach(element => {
                    let d_size = d.length;
                    if (element === true) {
                     d_size = --d_size;  
                        console.log(d_size)
                        if (d_size === 0) {
                            setNotification({ ...notification, ...obj,allNotification:true});
                        }
                        else {
                            setNotification({ ...notification, ...obj});
                        }
                    }
                });

                // if (x===Object.keys(obj).forEach((key)=>{
                //     return key;
                // })){
                //     console.log("got true");
                // }
                //overridong values or updating
                //iterating over keys 
                // Object.keys(data.data[0].preferences).forEach(key=>console.log(key));
                // console.log(data);

            } catch (error) {
                console.log("error occured :", error);
            }
        }
        fetchNotification();
    }, [id])

    useEffect(() => {
        if (notification.allNotification) {
            setNotification({
                ...notification,
                emailOrderUpdate: notification.allNotification,
                emailInventoryUpdate: notification.allNotification,
                emailReviewsUpdate: notification.allNotification,
                organizationUpdate: notification.allNotification,
                shippingUpdate: notification.allNotification
            })
        }
        else {
            setNotification({
                ...notification,
                allNotification: false,
                emailOrderUpdate: false,
                emailInventoryUpdate: false,
                emailReviewsUpdate: false,
                organizationUpdate: false,
                shippingUpdate: false,
            })
        }

    }, [notification.allNotification])


    //version 2 code
    // if(false)
    // {    
    //     const [notification, setNotification] = useState({
    //         allNotification: false,
    //         emailOlderUpdate: false,
    //         emailInventoryUpdate: true,
    //         emailCustomerReviewsRatingUpdate: false,
    //         organizationUpdate: true,
    //         shippingUpdate: true,
    //     });
    //     const url="";
    //     useEffect(() => {
    //         const fetchNotification = async () => {
    //             try {
    //                 const res = await fetch('http://localhost:5000/notification');
    //                 // const res = await fetch(`/6/user_app_preferences.json`);
    //                 // const res = await fetch(url);
    //                 const data = await res.json();
    //                 //passing the object of notificaton not whole json data

    //                 console.log("data[0].allNotification ", data[0].allNotification)
    //                 // setNotification(data[0])
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         fetchNotification();
    //     },[id])

    //     useEffect(() => {
    //         if (notification.allNotification) {
    //             setNotification({
    //                 ...notification,
    //                 emailOlderUpdate: notification.allNotification,
    //                 emailInventoryUpdate: notification.allNotification,
    //                 emailCustomerReviewsRatingUpdate: notification.allNotification,
    //                 organizationUpdate: notification.allNotification,
    //                 shippingUpdate: notification.allNotification
    //             })
    //         }
    //         else {
    //             setNotification({
    //                 allNotification: false,
    //                 emailOlderUpdate: false,
    //                 emailInventoryUpdate: false,
    //                 emailCustomerReviewsRatingUpdate: false,
    //                 organizationUpdate: false,
    //                 shippingUpdate: false,
    //             })
    //         }

    //     }, [notification.allNotification]);
    //     }
    //old code 
    if (false) {
        const toggleNotification = async () => {
            try {
                const res = await fetch('http://localhost:5000/notification');
                const data = await res.json();
                //passing the object of notificaton not whole json data
                console.log("data[0].allNotification ", data[0].allNotification)
                setNotification(data[0])
                // if (data[0].allNotification === true) {
                //     console.log("in all email true")
                //     // setNotification(true)
                //     setNotification({
                //         allNotification: true,
                //         emailOlderUpdate: true,
                //         emailInventoryUpdate: true,
                //         emailCustomerReviewsRatingUpdate: true,
                //         organizationUpdate: true,
                //         shippingUpdate: true,
                //     })
                // }
                // else {
                //     console.log("in all email else part")
                //     setNotification(data[0]);
                // }
                // setNotification(data[0]);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
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
                                        value={notification.allNotification}
                                        checked={notification.allNotification}
                                        onChange={(e) => setNotification({ ...notification, allNotification: e.target.checked })}
                                        // onChange={(e) => toggleNotification}

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
                                                value={notification.emailOrderUpdate}
                                                checked={notification.emailOrderUpdate}
                                                onChange={(e) => setNotification({ ...notification, emailOrderUpdate: e.target.checked })}
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
                                                onChange={(e) => setNotification({ ...notification, emailInventoryUpdate: e.target.checked })}
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
                                                value={notification.emailReviewsUpdate}
                                                checked={notification.emailReviewsUpdate}
                                                onChange={(e) => setNotification({ ...notification, emailReviewsUpdate: e.target.checked })}
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
                                        onChange={(e) => setNotification({ ...notification, organizationUpdate: e.target.checked })}
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
                                        onChange={(e) => setNotification({ ...notification, shippingUpdate: e.target.checked })}
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
export default oldNotificationPreferenceComponent;