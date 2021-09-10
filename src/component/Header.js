import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'
 const Header = ({title, onAdd, showAdd}) => {
    // const onClick =()=>{
    //     console.log("click");
    //  }
    const location = useLocation();
    return (
        <header  className="header">
            <h1 >{title} </h1>
            {/* <h1 style={ headingStyle}>Task Tracker</h1> */}
            {/* <button className="btn">Add</
            button> */}
           {location.pathname === '/' && ( <Button color ={showAdd ?'red' : 'green'} 
            text={showAdd ? 'Close' : 'ADD' } 
            onClick={onAdd} />
            // {/* <Button color= "grey" text= "hello 2" onClick={onClick}/> */}
           )}
        </header>
    )
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}


// Header.defaultProps ={
//     title : 'Task Default Props',
//     name : "sandeep",
// }

//css in js
// const headingStyle = {
//     backgroundColor: 'black',
//     color: 'red'
// }


export default Header
