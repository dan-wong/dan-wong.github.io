import React from "react";
import styles from "./HeaderPanel.module.css";

import SocialPanel from '../SocialPanel/SocialPanel';

function HeaderPanel() {
  return (
    <header className={styles.parent}>
      <h1 className={styles.title}>Daniel Wong</h1>
      <p className={styles.subtitle}>A collection of my favourite photos</p>
      <SocialPanel />
    </header>
  );
}

export default HeaderPanel;
