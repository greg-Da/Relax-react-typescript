import * as React from 'react'
import Card from '../Card/Card'


type Data = {
    pic: string
    first_name: String
    last_name: String
    note: Number
    link: string
    soins: string[]
    time: string
}

type Variant = 
| 'full'
| 'sm'

interface Props {
    data: Data;

    variant: Variant
}

function Prestataire(props: Props){

    const {data, variant = 'full'} = props

    if(variant === 'full'){
        return(
            <Card>
                <div className='p-2 flex items-center justify-around'>
                    <img className='rounded-full h-12 w-12' src={data.pic} />
        
                    <div className='text-left'>
                        <p><span className='underline'>Prénom:</span> {data.first_name}</p>
                        <p><span className='underline'>Nom:</span> {data.last_name}</p>
                        <p><span className='underline'>Note:</span> {data.note}</p>
                    </div>
        
                    <div><a className='font-bold underline' href={data.link}>En savoir plus</a></div>
        
                    <p>Soins pratiqués: {data.soins.map((item, index) => {
                        let num = data.soins.length
                        if (num -1 === index){
                            return (<span>{item}</span>)
                        }else{
                        return (<span>{item}, </span>)
                        }
                    })} </p>
        
                </div>
            </Card>
        )
    }else{
        return(
        <div className='border border-black rounded flex items-center justify-around bg-white p-2'>
            <img className='rounded-full h-12 w-12' src={data.pic} />
            <div>
                <p className='font-bold'>{data.first_name + ' ' + data.last_name}</p>
                <p className='text-center'>{data.time}</p>
            </div>
        </div>)
    }
    
}

export default Prestataire