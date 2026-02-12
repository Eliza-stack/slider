import Platform from './components/platform/Platform';
import styles from './page.module.css';
import Slider from '@/app/components/slider/Slider';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Slider</h1>
        <Slider />
        <Platform/>
      </main>
    </div>
  );
}
