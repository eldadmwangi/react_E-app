import React from 'react'
import ComponentdetsSection from '../../ComponentdetsSection'
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
            <ComponentdetsSection {...homeObjOne}/>
        </>
    )
}
export default Home
