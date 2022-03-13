import styles from './List.module.scss';

const List = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>Things to do <span className={styles.span}>soon</span></h2>
                <p className={styles.description}>Interesting things I want to check out</p>
                <section className={styles.columns}>
                <article><h3>Books</h3></article>
                <article><h3>Movies</h3></article>
                <article><h3>Games</h3></article>
                </section>
        </header>      
    );
  };

  export default List;      