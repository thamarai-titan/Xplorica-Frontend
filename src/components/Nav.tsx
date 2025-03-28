import React from "react"
import { Moon } from "../icons/Moon"
import {Sun } from "../icons/Sun"
import { useState,useEffect } from "react"

export const Nav = () => {

    const [toggle , SetToggle] = useState<boolean>(false)


    useEffect(()=>{
        if(toggle){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[toggle])

    const ToggleFunction = () => {
        SetToggle(!toggle)
    }
    return <>
        <nav className="dark:bg-[#151515]">
            <div className="flex justify-between items-center p-5 shadow-2xl 2xl:w-7xl mx-auto">
                <div className="font-lato sm:text-2xl dark:text-white">
                    Xplorica
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={()=>{ToggleFunction()}} className="pe-8 dark:text-white">
                        {toggle ? <Sun/> : <Moon/>}
                    </button>
                    <button className="bg-black dark:bg-white dark:text-black text-white p-2 rounded px-3 hover:-translate-y-1 cursor-pointer">Explore</button>
                </div>
            </div>
        </nav>
    </>     
        
}