import styles from './PageTitle.module.scss'

const PageTitle = props => {
    return (
        <div>
            <h2 className={styles.pageTitle}>{props.children}</h2>
        </div>
    );
};

export default PageTitle