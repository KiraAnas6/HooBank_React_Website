import { arrowUp } from "../assets";
import styles from "../style";
const GetStarted = () => {
  return (
    <div
      className={`absolute top-0 right-0 sm:w-[140px] w-[120px] aspect-square bg-blue-gradient rounded-full border border-1 
        p-[2px]`}
    >
      <div
        className={` w-[100%] h-[100%] bg-primary rounded-full ${styles.flexCenter} flex-col`}
      >
        <div className={`${styles.flexStart} `}>
          <p className="flex">
            <span className="text-gradient">Get</span>
            <img src={arrowUp} alt="arrow" />
          </p>
        </div>
        <p className="flex">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
