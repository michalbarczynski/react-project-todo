import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';


const ColumnForm = props => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({title: title, icon: icon});
        setTitle('');
        setIcon('');
    };

    return (
       <form onSubmit={handleSubmit} className={styles.columnForm}>
        <span>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <span>Icon:</span> <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
        </form>
    )
}

export default ColumnForm;

/*
Sam proces dodawania kolumny wygląda z kolei następująco. Użytkownik wpisuje coś do inputu. Wartość ta jest zapisywana do stanu value. Następnie użytkownik klika button. To powoduje wyemitowanie na formularzu eventu submit. Z racji, że na tym elemencie mamy nasłuchiwacz na taki event, to od razu zostaje uruchomiona funkcja callback – nasza funkcja handleSubmit. Blokuje ona domyślne zachowanie JS-a, zeruje input, ale też uruchamia funkcję otrzymaną pod parametrem action i gdy ją wywołuje, przekazuje jej od razu informacje o tym, co było w naszym inpucie. Z racji, że u nas parametr action to referencja do funkcji addColumn w <List>, to właśnie ta funkcja jest w takiej sytuacji uruchomiona. Odbiera ona jako argument obiekt z informacją o title i dodaje do columns nowy obiekt właśnie o takiej nazwie.
*/