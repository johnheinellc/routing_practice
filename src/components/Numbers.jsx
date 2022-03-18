import React from "react";
import { useParams } from "react-router";

const Numbers =()=>{
    const { int } = useParams();

    return(
        <div>
            {
                isNaN(int)
                ?
                <h3>Word is: {int}</h3>
                :
                <h3>The number is: {int}</h3>
            }
        </div>
    )
}

export default Numbers;