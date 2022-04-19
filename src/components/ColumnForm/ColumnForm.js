import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
    const [value, setValue] = useState(''); 
    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit({title: value});
        setValue('');
    };

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
            <button>Add column</button>
        </form>
        
    )
}

export default ColumnForm;

/*
Zatem teraz przy wykryciu eventu submit nie włączamy od razu funkcji otrzymanej od komponentu rodzica (List). Zamiast tego uruchamiamy funkcję handleSubmit naszego komponentu ColumnForm. Ta blokuje zachowanie domyślne przeglądarki i dopiero potem uruchamia faktycznie funkcję otrzymaną w parametrze czy też zeruje nasz stan. Zauważ przy okazji, że wywołując funkcję props.handleSubmit, a więc funkcję z komponentu List przekazujemy jej wartość naszego value. Dzięki temu rozwiążemy problem, o którym wcześniej mówiliśmy. <List> nie ma bezpośredniego dostępu do stanu value z <ColumnForm>, więc przekazujemy tę informację w formie argumentu.

Sam proces dodawania kolumny wygląda z kolei następująco. Użytkownik wpisuje coś do inputu. Wartość ta jest zapisywana do stanu value. Następnie użytkownik klika button. To powoduje wyemitowanie na formularzu eventu submit. Z racji, że na tym elemencie mamy nasłuchiwacz na taki event, to od razu zostaje uruchomiona funkcja callback – nasza funkcja handleSubmit. Blokuje ona domyślne zachowanie JS-a, zeruje input, ale też uruchamia funkcję otrzymaną pod parametrem action i gdy ją wywołuje, przekazuje jej od razu informacje o tym, co było w naszym inpucie. Z racji, że u nas parametr action to referencja do funkcji addColumn w <List>, to właśnie ta funkcja jest w takiej sytuacji uruchomiona. Odbiera ona jako argument obiekt z informacją o title i dodaje do columns nowy obiekt właśnie o takiej nazwie.
*/