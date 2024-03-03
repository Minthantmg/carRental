import React, {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title : String;
    containerStyles? : String;
    btnType :"button" | "submit"
    handleClick ?:
        MouseEventHandler<HTMLButtonElement>;
}

export interface  SearchManufacturerProps{
    manufacturer : String;
    setManufacturer : (manufacturer:String) => void;
}