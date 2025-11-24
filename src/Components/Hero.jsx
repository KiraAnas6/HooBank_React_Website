import GetStarted from "./GetStarted";
import { discount, robot } from "../assets";
import styles from "../style";
const Hero = () => {
  return (
    <section className=" flex items-center sm:flex-row flex flex-col mb-10">
      <div className="flex-1 mb-10">
        <div className="bg-discount-gradient p-2 rounded-md uppercase w-fit flex items-center mb-10">
          <img src={discount} alt="discount" />
          <div className={`${styles.paragraph} sm:text-[13px] text-[10px]`}>
            <span className="text-white">20%</span> discount for{" "}
            <span className="text-white">1 month</span> account
          </div>
        </div>

        <div className="relative">
          <div>
            <h1 className="sm:text-[64px] text-[38px] font-bold sm:leading-[80px] leading-[62px]  mb-10">
              The Next <br />
              <span className="text-gradient">Generation</span> <br />
              Payment Method
            </h1>
            <p className={`${styles.paragraph} sm:text-[15px] text-[11px]`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <GetStarted />
        </div>
      </div>
      <div className={` flex-1 flex relative`}>
        <img className="flex-1 sm:w-[50%]" src={robot} alt="billing" />
        <div className="absolute z-[0] top-0 w-[40%] h-[35%]  pink__gradient"/>
        <div className="absolute z-[1] bottom-40 rounded-full w-[80%] aspect-square  white__gradient"/>
        <div className="absolute z-[0] right-20 bottom-20 rounded-full w-[50%] aspect-square  blue__gradient"/>
      </div>
    </section>
  );
};

export default Hero;
