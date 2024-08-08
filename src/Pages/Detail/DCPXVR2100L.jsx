import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Camera6 from '../../Componets/DCP CCTV/Camera6/Camera6'
import Cam6Spec from '../../Componets/DCP CCTV/Camera6/Came6Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPXVR2100L = () => {
  return (
    
      <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 /><Camera6 /><Cam6Spec/></>
    
  )
}

export default DCPXVR2100L
