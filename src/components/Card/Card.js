import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/store';

const Card = props => {

    const cardId = props.cardId

    const dispatch = useDispatch(); //ten hook jak działa potestować

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavourite(cardId));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <form onSubmit={handleSubmit}>
                <button>
                    <span className={clsx('fa fa-star-o', props.isFavourite && styles.isFavourite)}></span>
                </button> 
            </form>
        </li>
    );
};

export default Card

