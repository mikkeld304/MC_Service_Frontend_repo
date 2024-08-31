import "./FilterChoice.css";
import { copyObjectWithSets } from "../../Functionality/helperFunctions.js";

export default function FilterChoice({
  filterValue,
  filterType,
  setFilterValue,
}) {
  async function handleCheckboxClick(event, filterVal, type) {
    await setFilterValue((prevObj) => {
      try {
        const checkBox = event.target;
        if (checkBox) {
          const newPrevObj = copyObjectWithSets(prevObj);
          const typeSet = newPrevObj[type.toLowerCase()];
          checkBox.checked ? typeSet.add(filterVal) : typeSet.delete(filterVal);
          const updatedSet = new Set([...typeSet]);
          newPrevObj[type.toLowerCase()] = updatedSet;
          return newPrevObj;
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <li className="filterchoice-list-item">
      <input
        type="checkbox"
        name={filterType}
        data-name={filterValue}
        onChange={(event) =>
          handleCheckboxClick(event, filterValue, filterType)
        }
      ></input>
      <label>{filterValue}</label>
    </li>
  );
}
