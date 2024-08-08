import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS6 from '../../Componets/DCP UPS/USP6/UPS6'
import UPS6Spec from '../../Componets/DCP UPS/USP6/UPS6Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPBATTERY = () => {
  return (
    <div>
      <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS6 />
        <UPS6Spec />
      </>
    </div>
  )
}

export default DCPBATTERY
