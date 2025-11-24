import Button from "./Button";
import styles from "../style";
const Card = () => {
  return (
    <div className="bg-black-gradient p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between mb-10">
      <div>
        <h2 className="text-[32px] font-bold leading-[60px]">
          Let's try our service now!
        </h2>
        <p className={`${styles.paragraph} text-[15px] mb-10`}>
          Everything you need to accept card payements <br />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <Button content="Get Started" />
    </div>
  );
};

export default Card;
