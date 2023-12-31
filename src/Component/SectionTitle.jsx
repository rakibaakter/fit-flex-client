import logoIcon from "../assets/logo.png";

const SectionTitle = ({ value }) => {
  return (
    <div className="text-center md:pt-8 pb-8 md:pb-16">
      <div className="flex justify-center items-center">
        <img src={logoIcon} alt="" />
        <div>
          <h3 className="text-xl md:text-3xl font-medium">[Fit Flex]</h3>
          <h2 className="uppercase  text-red-300 font-bold ml-2 text-2xl md:text-4xl ">
            {value}
          </h2>
        </div>
        <img src={logoIcon} alt="" />
      </div>
    </div>
  );
};

export default SectionTitle;
