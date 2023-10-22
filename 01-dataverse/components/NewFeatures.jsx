const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col justify-center  w-full relative">
    <div className="sm:w-[70px] w-[50px] sm:h-[70px] h-[50px]  sm:p-4 p-2.5 flex items-center justify-center bg-[#323f5d] rounded-[24px]">
      <img
        src={imgUrl}
        alt={title}
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <h2 className="font-bold text-white md:text-[26px] text-[18px] mt-[20px] mb-[10px] uppercase">{title}</h2>
    <p className="text-secondary-white font-normal mb-[35px]">{subtitle}</p>
  </div>
);

export default NewFeatures;
