import React from "react";
import { useParams } from "react-router";

const Colors =()=>{

    const { int } = useParams();
    const { font } = useParams();
    const { bg } = useParams();


    return(

            <h1 style={{
                backgroundColor : bg,
                color : font
            }}>{int}</h1>

    )
}

export default Colors;