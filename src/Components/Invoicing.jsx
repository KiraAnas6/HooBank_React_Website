import styles from "../style";
import { bill, apple, google } from "../assets";

const Invoicing = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center gap-12 justify-between w-full">
      <img src={bill} alt="bill" className="sm:w-[48%] w-full mr-[-30px] sm:mr-0" />
      <section className="py-12 ">
        <div className="flex-1">
          <h2 className="text-[32px] font-bold mb-10 leading-[60px]">
            You do the business, <br />
            we'll handle the money
          </h2>
          <p className={`${styles.paragraph} sm:text-[15px] text-[10px] mb-10`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div className="flex items-center gap-4">
            <a href="#">
              <img src={apple} alt="Apple Store" />
            </a>
            <a href="#">
              <img src={google} alt="Play Store" />
            </a>
          </div>
        </div>
        <div className="flex-1  "></div>
      </section>
    </div>
  );
};

export default Invoicing;
