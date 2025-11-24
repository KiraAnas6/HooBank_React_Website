import styles from "../style";
import Button from "./Button";
import { card } from "../assets";

const Analysis = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-12 justify-between w-full" id="product">
      <div className="">
        <h2 className="text-[32px] font-bold mb-10 leading-[60px]">
          Find a better card deal <br />
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} sm:text-[15px] text-[10px] mb-10`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button content="Get Started" />
      </div>
      <img src={card} alt="card" className="sm:w-[48%] w-full mr-[-30px] sm:mr-0"/>
    </div>
  )
};

export default Analysis;
