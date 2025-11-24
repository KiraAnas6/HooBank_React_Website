import styles from "../style";
import { features } from "../constants";
import Button from "./Button";
const Business = () => {
  return (
    <section className="py-12 flex flex-col sm:flex-row gap-4 " id="features">
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
        <Button content="Get Started"/>
      </div>
      <div className="flex-1 flex flex-col ">
        {features.map((feat) => {
          return (
            <div className="flex items-center gap-8 p-4 rounded-xl cursor-pointer mb-3 feature-card">
              <img src={feat.icon} className="w-[32px]" alt="feature icon" />
              <div>
                <h3 className="font-bold text-lg">{feat.title}</h3>
                <span className={`${styles.paragraph} text-sm`}>{feat.content}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Business;
