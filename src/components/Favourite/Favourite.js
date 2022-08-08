import 'font-awesome/css/font-awesome.min.css';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favourite.module.scss';
import { getFavouriteCards } from '../../redux/store';
import { useSelector } from 'react-redux';

const Favourite = () => {

    const favouriteCards = useSelector(state => getFavouriteCards(state));
    console.log(favouriteCards);

    if(favouriteCards.length === 0) {
        return <PageTitle>No favourite cards</PageTitle>
    } else {
        return (
            <div>
                <Container>
                    <PageTitle>Favourite</PageTitle>
                        <div className={styles.favourite_columns}>
                            <article className={styles.favourite_column}>
                                <ul className={styles.favourite_cards}>
                                    {favouriteCards.map(card => <Card key={card.id} title={card.title} cardId={card.id}/>)}
                                </ul>
                            </article>
                        </div>
                </Container>
            </div>
    
        );
    }
};

export default Favourite;