import { logo } from "../assets";
import { footerLinks , socialMedia} from "../constants";
import styles from "../style";

const Footer = () => {
  return (
    <footer className="bg-black-gradient p-12 ">
      <div
        className={`${styles.boxWidth} sm:p-0 ${styles.paddingX} border-2 
        border-transparent border-b-white mb-10 `}
      >
        <div
          className={`${styles.boxWidth} flex justify-between gap-16 sm:flex-row flex-col `}
        >
          <div className="flex-2">
            <img src={logo} className="mb-10" alt="logo" />
            <p className={`${styles.paragraph} `}>
              A new way to make the payments easy. reliable and secure
            </p>
          </div>
          {footerLinks.map((group) => {
            return (
              <div className="flex-1 mb-5">
                <h5 className="font-bold text-[20px] mb-5">{group.title}</h5>
                <ul className={`${styles.paragraph}`}>
                  {group.links.map((link) => (
                    <li className="mb-2 text-gradient" key={link.link}>
                      <a href={`${link.link}`}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`${styles.boxWidth} sm:p-0 ${styles.paddingX} flex justify-between py-8 flex-col sm:flex-row gap-2`}
      >
        <div>Copyright &copy; 2025 HooBank . All Right Reserver</div>
        <div className="flex sm:justify-normal justify-between items-center  gap-8">
            {socialMedia.map((media) => {
                return <a href={`${media.link}`}><img src={`${media.icon}`} alt={`${media.link}`} /></a>
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
