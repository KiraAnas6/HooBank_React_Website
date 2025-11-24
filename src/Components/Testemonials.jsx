import styles from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";
const Testemonials = () => {
  return (
    <div className="py-8" id="clients">
      <div className="flex flex-col sm:flex-row items-center justify-between py-12">
        <h2 className="text-[32px] font-bold mb-10 leading-[60px]">
          What peaple are <br /> saying about us
        </h2>
        <p className={`${styles.paragraph} capitalize`}>
          everything you need to accept card payements <br />
          and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-12">
        {feedback.map((feed) => {
          return (
            <div className="flex-1 min-h-[350px] flex flex-col
             justify-between p-8 rounded-lg bg-black-gradient">
              <div>
                <img src={quotes} alt="quotes" className="mb-8 w-[32px]" />
                <p className="leading-[40px]">{feed.content}</p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={feed.img}
                  alt="feed image"
                  className="w-[60px] aspect-square rounded-full"
                />
                <div>
                  <h4>{feed.name}</h4>
                  <span className={`${styles.paragraph}`}>{feed.title}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testemonials;
