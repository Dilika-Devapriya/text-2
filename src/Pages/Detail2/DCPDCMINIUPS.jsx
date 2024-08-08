import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS5 from '../../Componets/DCP UPS/USP5/UPS5'
import UPS5Spec from '../../Componets/DCP UPS/USP5/UPS5Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPDCMINIUPS = () => {
  return (
    <div>
      <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS5 />
        <UPS5Spec />
      </>
    </div>
  )
}

export default DCPDCMINIUPS
