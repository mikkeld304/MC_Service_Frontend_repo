import './FilterChoice.css';

export default function FilterChoice({filterValue, type}) {
    return (
        <li className="filterchoice-list-item">
            <input type="checkbox" name={type} data-name={filterValue}></input>
            <label>{filterValue}</label>
        </li>
    )
}