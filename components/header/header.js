import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";

function header() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      {" "}
      <div className={styles.maincontainer}>
        <div className={styles.submaincontainer}>
          <header className={styles.header}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      {/* <div className={styles.row}>
            <div className={styles.column}> */}
                      {`E-Summit '23 for`}
                      <br />
                      {/* <span> digital &nbsp; </span> */}
                      {/* <br/> */}
                      <span>
                        <b className={styles.diffText}>inspiration</b>
                        <b className={styles.diffText}>unique</b>
                        <b className={styles.diffText}>market</b>
                        <b className={styles.diffText}>identity</b>
                      </span>

                      <main>
                        <p className={styles.para}>
                          {/* <hr/> */}
                          E-Summit`23 will present rays of hope so dazzling that
                          they penetrate even the darkness that veils our eyes.
                        </p>

                        <button className={styles.button1}>
                          <a> Explore Features </a>
                        </button>
                        {/* </div> */}
                      </main>

                      <div className={styles.footer}>
                        Join Our Work Team Now
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  {/* <div className={styles.image}></div> */}

                  <Image
                    className={styles.image}
                    src={
                      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/portrait-woman.jpg"
                    }
                    width="700"
                    height="700"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default header;
