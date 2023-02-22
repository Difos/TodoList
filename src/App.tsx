import { Header } from "./components/Header";

import styles from "./components/App.module.css";
import "./global.css";
import { AddTask } from "./components/AddTask";


export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <AddTask  />
        
        </main>
      </div>
    </div>
  );
}
