import React, { useEffect, useState } from 'react'
import Converstion from './Converstion';

const NotificationPreferenceComponent = (id) => {
    // const url = "users/(user_id)/user_app_preferences";
    const url = "http://localhost:5000/user_preference"
    const [notification, setNotification] = useState({
        allNotification: false,
        shippingUpdate: true,
        emailOrderUpdate: true,
        emailReviewsUpdate: true,
        organizationUpdate: true,
        emailInventoryUpdate: true,

    });


    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                let obj = {
                    shippingUpdate: data.data[0].preferences["shipping-update"],
                    emailOrderUpdate: data.data[0].preferences["email-order-update"],
                    emailReviewsUpdate: data.data[0].preferences["email-reviews-update"],
                    organizationUpdate: data.data[0].preferences["organization-update"],
                    emailInventoryUpdate: data.data[0].preferences["email-inventory-update"],
                }

                setNotification({ ...notification, ...obj });
                // setNotification({...kababToCamel( ...notification, ...obj )});


            } catch (error) {
                console.log(error);
            }
        }
        fetchNotification();
    }, [id])


    const onChange = async (key, value) => {
        console.log(key);

        // setNotification
        // Object.keys(data.data[0].preferences).forEach(key=>console.log(key));
        let obj = {}
        if (key === 'allNotification') {
            if (value) {
                obj.allNotification = true
                obj.shippingUpdate = true
                obj.emailOrderUpdate = true
                obj.emailReviewsUpdate = true
                obj.organizationUpdate = true
                obj.emailInventoryUpdate = true
            } else {
                obj.allNotification = false
                obj.shippingUpdate = false
                obj.emailOrderUpdate = false
                obj.emailReviewsUpdate = false
                obj.organizationUpdate = false
                obj.emailInventoryUpdate = false

            }
        } else {
            obj[key] = value
        }
        setNotification({ ...notification, ...obj })
        // TODO: change camel case keys to kabab case and send to server
        // delete allNotificaion form obj
        console.log(obj)
        delete obj.allNotification;
        let res_key = Converstion(key)
        // delete obj[key];
        // obj[resKey]=value;

        // console.log("conversion key :",res_key);
        // obj.res_key=value;
        console.log(obj);

        // send req to server to update key
        // const res = await fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         data: {
        //             user_id: id,
        //             preferences: {
        //                 ...obj,
        //                 res_key: obj[key]
        //             }
        //         }
        //     })
        // })
        // add kabab case keys object
        // ...camelToKabab({...notification,...obj})
        // jRes = await  res.json();
        // Jres.status ==="SUCCESS"
        // TODO: check res, if success then okay, if error, show error and revert prefrence

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
                                        // onChange={(e) => setNotification({ ...notification, allNotification: e.target.checked })}
                                        onChange={(e) => onChange("allNotification", e.target.checked)}

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
                                                // onChange={(e) => setNotification({ ...notification, emailOrderUpdate: e.target.checked })}
                                                onChange={(e) => onChange("emailOrderUpdate", e.target.checked)}
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
                                                // onChange={(e) => setNotification({ ...notification, emailInventoryUpdate: e.target.checked })}
                                                onChange={(e) => onChange("emailInventoryUpdate", e.target.checked)}
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
                                                // onChange={(e) => setNotification({ ...notification, emailReviewsUpdate: e.target.checked })}
                                                onChange={(e) => onChange("emailReviewsUpdate", e.target.checked)}
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
                                        // onChange={(e) => setNotification({ ...notification, organizationUpdate: e.target.checked })}
                                        onChange={(e) => onChange("organizationUpdate", e.target.checked)}
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
                                        // onChange={(e) => setNotification({ ...notification, shippingUpdate: e.target.checked })}
                                        onChange={(e) => onChange("shippingUpdate", e.target.checked)}
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
export default NotificationPreferenceComponent;