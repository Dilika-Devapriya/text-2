import React from 'react'
import Banner3 from '../../Componets/DCP UPS/Banner3'
import UPS2 from '../../Componets/DCP UPS/UPS2/UPS2'
import UPS2Spec from '../../Componets/DCP UPS/UPS2/UPS2Spec'
import Facicon from '../../Assests/DCP.png'
import { Helmet } from 'react-helmet'


const DCPPOWERTOWER = () => {
  return (
    <div>
      <>
        <Helmet>
          <link rel="icon" href={Facicon} />
        </Helmet>
        <Banner3 />
        <UPS2 />
        <UPS2Spec />
      </>
    </div>
  );
};

export default DCPPOWERTOWER;
