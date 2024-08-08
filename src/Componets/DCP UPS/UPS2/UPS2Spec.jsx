import React from "react";

const UPS2Spec = () => {
  return (
    <div>
      <div className="container py-16 ">
        <h1 className="text-6xl font-bold text-center py-6 uppercase">
          Specification
        </h1>
        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Rated Capacity
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
          <p className="text-black m-0  py-6 px-5 text-[20px] ">
              10KVA to 100KVA , 120KVA , 160KVA , 200KVA
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Input Voltage (V)
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]">304Vac-478Vac (line voltage) full load; 304Vac~228Vac (line voltage) load derated linearly from 100% to 80% 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Input Frequency ( Hz)
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]"> 40Hz ~ 70 Hz</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Output Voltage (V)
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]">
            380/400/4152VAC(3Phace+N)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Output Frequency (Hz)
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]">+2Hz (settable); ±0.5Hz, ±1Hz. ±3Hz (settable)</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Battery Type
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]">
            Lead acid or lithuim
            </p>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Dimension ( L X W X H) mm
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
          <p className=" text-black m-0  pt-6 px-5 text-[20px]">
              <span className="font-semibold">10 KVA to 30 KVA :</span> 280 x 685 x 725
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">40 KVA to 80 KVA :</span>425 x 780 x 1200
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">100 KVA to 120 KVA :</span>600 x 800 x 1600
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">160 KVA :</span>600 x 960 x 1000
            </p>
            <p className=" text-black m-0  pb-6 px-5 text-[20px]">
              <span className="font-semibold">200 KVA:</span>600 x 1010 x 2000
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UPS2Spec;
