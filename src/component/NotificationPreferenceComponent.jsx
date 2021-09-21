import React, { useEffect, useState } from 'react'

const NotificationPreferenceComponent = (id) => {
    // const url = "users/(user_id)/user_app_preferences";
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
                const res = await fetch("http://localhost:5000/user_preference");
                const data = await res.json();
                let obj = {
                    shippingUpdate: data.data[0].preferences["shipping-update"],
                    emailOrderUpdate: data.data[0].preferences["email-order-update"],
                    emailReviewsUpdate: data.data[0].preferences["email-reviews-update"],
                    organizationUpdate: data.data[0].preferences["organization-update"],
                    emailInventoryUpdate: data.data[0].preferences["email-inventory-update"],
                }
                console.log(data);
                console.log(data.data[0]);

                setNotification({ ...notification, ...obj });
                //iterating over keys 
                // Object.keys(data.data[0].preferences).forEach(key=>console.log(key));
                // console.log(data);

            } catch (error) {
                console.log(error);
            }
        }
        fetchNotification();
    }, [id])


    useEffect(() => {
        if (notification.allNotification) {
            setNotification({
                ...notification,
                shippingUpdate: notification.allNotification,
                emailOrderUpdate: notification.allNotification,
                emailReviewsUpdate: notification.allNotification,
                organizationUpdate: notification.allNotification,
                emailInventoryUpdate: notification.allNotification,                
            })
        }
        else {
            setNotification({
                ...notification,
                allNotification: false,
                shippingUpdate: false,
                emailOrderUpdate: false,
                emailReviewsUpdate: false,
                organizationUpdate: false,
                emailInventoryUpdate: false,
            })
        }

    }, [notification.allNotification])


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
export default NotificationPreferenceComponent;