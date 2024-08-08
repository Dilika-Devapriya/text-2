import React from 'react'
import Banner4 from '../../Componets/DCP CCTV/Banner4'
import Camera5 from '../../Componets/DCP CCTV/Camera5/Camera5'
import Cam5Spec from '../../Componets/DCP CCTV/Camera5/Came5Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPXVR216S = () => {
  return (
    <>
    <Helmet>
      <link rel="icon" href={Facicon} />
    </Helmet>
    <Banner4 /><Camera5 /><Cam5Spec/></>
  )
}

export default DCPXVR216S
