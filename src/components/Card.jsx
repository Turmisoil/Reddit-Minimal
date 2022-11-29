import React, { useEffect } from "react";

export const Card = ({data}) => {

    return(
        <div>{data.data.title}</div>
    )
}