import React, {MouseEventHandler} from "react";

export interface CustomButtonProps {
    title: String;
    containerStyles?: String;
    btnType: "button" | "submit"
    handleClick?:
        MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
    manufacturer: String;
    setManufacturer: (manufacturer: String) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
