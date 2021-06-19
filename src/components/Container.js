import React from "react";
import { Containerwrapper } from "../elements/containerElements";

export const Container = ({children}) =>{
    return(
    <Containerwrapper>{children}</Containerwrapper>
    )
}