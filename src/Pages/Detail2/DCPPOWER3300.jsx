import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS7 from '../../Componets/DCP UPS/USP7/UPS7'
import UPS7Spec from '../../Componets/DCP UPS/USP7/UPS7Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'

const DCPPOWER3300 = () => {
  return (
    <div>
      <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS7 />
        <UPS7Spec />
      </>
    </div>
  )
}

export default DCPPOWER3300

