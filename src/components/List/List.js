import styles from './List.module.scss';
import SearchForm from '../SearchForm/SearchForm';
import ColumnForm from '../ColumnForm/ColumnForm';
import Column from '../Column/Column';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store'; 
import { useParams } from 'react-router'; 

const List = () => {

    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId))
    const columns = useSelector(state => getColumnsByList(state, listId));

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>

            <p className={styles.description}>{listData.description}</p>

            <SearchForm />

            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} />)}
            </section>

            <ColumnForm />
        </div>
    );
  };

  export default List;      
