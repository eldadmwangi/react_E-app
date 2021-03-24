import React from 'react'
import ComponentdetsSection from '../../ComponentdetsSection'
import Pricing from '../../Pricing'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'

function Home() {
    return (
        <>
            <ComponentdetsSection {...homeObjOne}/>
            <ComponentdetsSection {...homeObjThree}/>
            <ComponentdetsSection {...homeObjTwo}/>
            <ComponentdetsSection {...homeObjFour}/>
            <Pricing/>
        </>
    )
}
export default Home
