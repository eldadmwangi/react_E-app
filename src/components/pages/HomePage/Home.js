import React from 'react'
import ComponentdetsSection from '../../ComponentdetsSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'

function Home() {
    return (
        <>
            <ComponentdetsSection {...homeObjOne}/>
            <ComponentdetsSection {...homeObjThree}/>
            <ComponentdetsSection {...homeObjTwo}/>
            <ComponentdetsSection {...homeObjFour}/>
        </>
    )
}
export default Home
