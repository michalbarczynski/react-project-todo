import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const cardId = props.cardId

    const dispatch = useDispatch();

    const handleFavourite = e => {
        e.preventDefault();
        dispatch(toggleCardFavourite(cardId));
    }

    const handleRemove = e => {
        e.preventDefault();
        dispatch(removeCard(cardId));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <form>
                <button onClick={handleFavourite}>
                    <span className={clsx('fa fa-star-o', props.isFavourite && styles.isFavourite)}/>
                </button> 
                <button onClick={handleRemove}>
                    <span className={clsx('fa fa-trash')}/>
                </button>
            </form>
        </li>
    );
};

export default Card

