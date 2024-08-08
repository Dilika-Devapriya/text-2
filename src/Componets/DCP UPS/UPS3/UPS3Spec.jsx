import React from "react";

const UPS3Spec = () => {
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
            <p className=" text-black m-0  pt-6 px-5 text-[20px]">
              <span className="font-semibold">DCP-1K-RT / DCP-1KL-RT :</span> 1KVA / 900W
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">DCP-2K-RT / DCP-KL-RT :</span>2KVA / 1800W
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">DCP-3K-RT / DCP-3KL-RT :</span>3KVA / 2700W
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">DCP-6K-RT / DCP-6KL-RT :</span>6KVA / 5400W
            </p>
            <p className=" text-black m-0  pb-6 px-5 text-[20px]">
              <span className="font-semibold">DCP-10K-RT / DCP-10KL-RT:</span> 10KVA / 9000W
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
            <p className=" text-black m-0  py-6 px-5 text-[20px]">208/220/230/240VAC</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Input Frequency ( Hz)
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]"> 50/60Hz ±6Hz,± 10Hz (setable)</p>
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
            208/220/230/240VAC
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
            <p className=" text-black m-0  py-6 px-5 text-[20px]">AC mode: same as AC,Battery mode:50/60Hz±1%</p>
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
              Sealed Lead Acid maintenance Free
            </p>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-2 border-t-4 border-slate-300">
          <div className=" m-0 py-5 px-5">
            <p className="font-bold text-black m-0  py-5 px-5 text-3xl ">
              Backup
            </p>
          </div>
          <div className=" m-0 py-5 px-5">
            <p className=" text-black m-0  py-6 px-5 text-[20px]">Depend on user' requirement and configuration</p>
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
              <span className="font-semibold">1 KVA :</span> 440 x 80 x 420
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">2 KVA :</span>440 x 80 x 600
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">3 KVA :</span>440 x 80 x 600
            </p>
            <p className=" text-black m-0   px-5 text-[20px]">
              <span className="font-semibold">6 KVA :</span>438 x 80 x 470
            </p>
            <p className=" text-black m-0  pb-6 px-5 text-[20px]">
              <span className="font-semibold">10 KVA:</span>438 x 80 x 690
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UPS3Spec;
