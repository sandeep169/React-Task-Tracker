import React from 'react'

export default function Converstion(key) {
    const kebabCase = string => string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
    
    return kebabCase(key);
}
    
    //     function camelize(str) {
    //     let arr = str.split('-');
    //     let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase());
    //     // ^-- change here.
    //     let capitalString = capital.join("");

    //     console.log(capitalString);
    // }

    // camelize("my-kebab-string");
    // return obj
// camelize = s => s.replace(/-./g, x=>x.toUpperCase()[1])


// const kebabCase = string => string
// .replace(/([a-z])([A-Z])/g, "$1-$2")
// .replace(/[\s_]+/g, '-')
// .toLowerCase();