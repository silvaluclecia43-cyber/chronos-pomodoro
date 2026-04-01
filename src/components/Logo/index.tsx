import styles from './style.module.css'
import { TimerIcon } from "lucide-react";

export function Logo() {

    return (
        <>
           <div className={styles.logo}>
              <a className={styles.logolink} href='qualquer'>
                  <TimerIcon />
                  <span>Chronos</span>
              </a>
           </div>
        </>


    )

}
  

