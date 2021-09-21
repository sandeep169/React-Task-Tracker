import React, { useEffect, useState } from 'react'


const NotificationPreferenceComponent = (id) => {
    const url = "";
    const [notification, setNotification] = useState({
        allNotification: false,
        emailOlderUpdate: false,
        emailInventoryUpdate: true,
        emailCustomerReviewsRatingUpdate: false,
        organizationUpdate: true,
        shippingUpdate: true,
    });
    useEffect(() => {
        const fetchNotification = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log("data[0].allNotification ", data[0].allNotification)
                setNotification(data[0])
            } catch(error) {
                console.log(error)
            }
        }
        fetchNotification();
    },[id])

    useEffect(() => {
        if (notification.allNotification) {
            setNotification({
                ...notification,
                emailOlderUpdate: notification.allNotification,
                emailInventoryUpdate: notification.allNotification,
                emailCustomerReviewsRatingUpdate: notification.allNotification,
                organizationUpdate: notification.allNotification,
                shippingUpdate: notification.allNotification
            })
        }
        else {
            setNotification({
                allNotification: false,
                emailOlderUpdate: false,
                emailInventoryUpdate: false,
                emailCustomerReviewsRatingUpdate: false,
                organizationUpdate: false,
                shippingUpdate: false,
            })
        }

    },[notification.allNotification])

    return (
        <>
            {/* <button onClick={toggleNotification}>fetchNotification api</button> */}
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
                                                value={notification.emailOlderUpdate}
                                                checked={notification.emailOlderUpdate}
                                                onChange={(e) => setNotification({ ...notification, emailOlderUpdate: e.target.checked })}
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
                                                value={notification.emailCustomerReviewsRatingUpdate}
                                                checked={notification.emailCustomerReviewsRatingUpdate}
                                                onChange={(e) => setNotification({ ...notification, emailCustomerReviewsRatingUpdate: e.target.checked })}
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
export default NotificationPreferenceComponent
