const StartSteps = ({ feature, number }) => (
  <div className="flex gap-[15px] justify-center items-center relative">
    <div className="w-[70px] h-[70px] flex items-center justify-center rounded-[24px] bg-[#323f5d]">
      <h3 className="text-white font-semibold">0{number}</h3>
    </div>
    <p className="text-white flex-1 leading-[30px] ">{feature}</p>
  </div>
);

export default StartSteps;
