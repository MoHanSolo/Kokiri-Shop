import styles from './Logo.module.scss';

export default function Logo() {
return (
  <div className={styles.Logo}>
    {/* <div>Kokiri</div>
    <div>Store</div> */}
    <img src="https://i.imgur.com/NW08U80.png" />
  </div>
);
}