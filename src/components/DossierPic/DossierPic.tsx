import * as React from 'react'
import { AiFillFolder } from 'react-icons/ai'
import {Switch} from '../Switch/Switch'

type Color = 'green' | 'gold'

interface Props{
title?: string
value: boolean
pic?: React.ReactNode
color?: Color
}

export default function DossierPic(props: Props){
const {title, value, pic, color = 'green'} = props
console.log(pic)

if(pic !== undefined){
    return(
        <div style={{
            backgroundSize: "cover",
            backgroundRepeat: "none",
            backgroundImage: `url(${pic})`,
        }} 
        className={`w-48 h-48 rounded border flex flex-col justify-center items-center relative`}>
            <div className={`w-full flex justify-between items-center absolute bottom-0 ${title !== undefined ? "bg-white bg-opacity-60" : ""} py-1`}>
                <p className='ml-2 text-sm'>{title}</p>
                <div className='mr-2'>
                    <Switch color={color} defaultSelected={value} />
                </div>
            </div>
        </div>
    )
}else{
    return(
        <div className={`w-48 h-48 rounded border flex flex-col justify-center items-center`}>
            <AiFillFolder className='w-32 h-32 text-grey' />
            <div className='w-full flex justify-between items-center -mb-2'>
                <p className='ml-2 text-sm'>{title}</p>
                <div className='mr-2'>
                    <Switch color={color} defaultSelected={value} />
                </div>
            </div>
        </div>
    )
}
    
}

export { DossierPic }