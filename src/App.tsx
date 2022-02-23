import styles from "./style.module.scss";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  document.title = "Kwan Lok NG";
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Home />
      </div>
    </div>
  );
}

export default App;
