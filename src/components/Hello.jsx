import React from "react";
import { useParams } from "react-router";

const Hello =()=>{
    const { txt } = useParams();
    return(
        <div>
            
            <h3>Word is: {txt}</h3>
        </div>
    )
}

export default Hello;