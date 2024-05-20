import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props =>{
    return <div>
        {
            React.Children.map(props.children, (child, i) =>{
                return React.cloneElement(child, {...props, key: i});
            })
        }
    </div>
}