import './FilterChoice.css';

export default function FilterChoice({filterValue}) {
    return (
        <li className="filterchoice-list-item" key={filterValue}>
            <input type="checkbox"></input>
            <label>{filterValue}</label>
        </li>
    )
}