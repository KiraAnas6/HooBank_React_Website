import { stats } from "../constants";

const Stats = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-between text-[24px] w-full">
      {stats.map((stat) => {
        return (
          <div className="flex-1 flex sm:justify-normal justify-between w-full px-2 py-8 border-2 border-transparent sm:border-b-transparent border-b-white ">
            <span className="font-bold mr-5">{stat.value}</span>
            <span className="text-gradient">{stat.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
