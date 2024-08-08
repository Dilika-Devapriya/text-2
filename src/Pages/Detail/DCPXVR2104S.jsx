import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Camera3 from '../../Componets/DCP CCTV/Camera3/Camera3'
import Cam3Spec from '../../Componets/DCP CCTV/Camera3/Came3Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'


const DCPXVR2104S = () => {
  return (
    <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 /><Camera3 /><Cam3Spec/></>
  )
}

export default DCPXVR2104S