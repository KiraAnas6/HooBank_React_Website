import styles from "./style";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Business from "./Components/Business";
import Invoicing from "./Components/Invoicing";
import Analysis from "./Components/Analysis";
import Testemonials from "./Components/Testemonials";
import Companies from "./Components/Companies";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className={`bg-primary text-white w-full overflow-hidden font-poppins ${styles.boxWidth}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`${styles.flexStart} `}>
        <div className={`${styles.boxWidth} sm:p-0 ${styles.paddingX} `}>
          <Hero />
          <Stats />
          <Business />
          <Invoicing />
          <Analysis />
          <Testemonials />
          <Companies />
          <Card />

        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
