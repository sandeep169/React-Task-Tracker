import React, { useEffect, useState } from 'react'

const TaskMasterApi = () => {
    //api data
    const [notify, setNotify] = useState([])

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
    
    
    // notification reminder
    
     useEffect(() => {
        setAllEmailNotification(true);
       const  getNotification = async() => {
            const res = await fetchNotification();
            setNotify(res)
        }
       getNotification()
       console.log(notify);

      },[])
    
    
    return (
        <>
        <div>
             <button onClick={fetchNotification}>fetchTask api</button>
             <h1>{notify.map((data) => data.name)}</h1>
        </div>
        </>
        );
    }
export default TaskMasterApi;