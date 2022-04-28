import styles from './CardForm.module.scss'
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const CardForm = props => {
    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title}, props.columnId);
        setTitle('');
    }


return (
    <form onSubmit={handleSubmit} className={styles.cardForm}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)}></TextInput>
        <Button>Add card</Button>
    </form>
)

}
export default CardForm;

