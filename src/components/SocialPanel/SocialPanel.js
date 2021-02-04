import React from "react";
import styles from "./SocialPanel.module.css";

import { SocialIcon } from 'react-social-icons';

function HeaderPanel() {
  return (
      <section className={styles.parent}>
        <SocialIcon className={styles.icon} url="https://github.com/dan-wong/" />
        <SocialIcon className={styles.icon} url="https://www.linkedin.com/in/daniel-wong-580490107/" />
        <SocialIcon className={styles.icon} url="https://500px.com/p/danwong?view=photos" network="fivehundredpix" />
        <SocialIcon className={styles.icon} url="https://play.google.com/store/search?q=pub%3ADan%20Wong&c=apps" network="google_play" />
        <SocialIcon className={styles.icon} url="mailto:dan_wong@outlook.com?subject=Contact%20from%20danwong.nz" />
      </section>
  );
}

export default HeaderPanel;
