import styles from "../styles/Footer.module.css";
import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <>
      <div className={`${styles.sectionFooter}`}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContact}>
            <h4 className={styles.headingQuaternary}>
              <span>Contact me</span>
            </h4>
            <div className={styles.copyRight}>
              <p>Copyright © {currentYear} All Rights Reserved. </p>
            </div>
          </div>

          <div className={styles.footerBtnLinks}>
            <div className={styles.contactBtns}>
              <button className={styles.btnFooterLink}>
                <i
                  className={`fa-brands fa-square-upwork ${styles.navIcon}`}
                ></i>
                <a
                  href="https://www.upwork.com/freelancers/~01741f500be36f1cbe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Upwork
                </a>
              </button>
              <button
                className={styles.backToTopBtn}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <i className={`fa-solid fa-arrow-up ${styles.navIcon}`}></i>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
