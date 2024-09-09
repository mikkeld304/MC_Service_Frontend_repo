import "./SectionTable.css";
import ListItem from "./ListItem";
import { filterOutMotorcycles } from "../../Functionality/filtering";

export default function SectionTable({ motorcycles, filterValue }) {
  let motorcyclesToShow;
  if (Object.keys(filterValue).length > 0) {
    const totalSetSize = Object.values(filterValue).reduce(
      (acc, currSet) => acc + currSet.size,
      0
    );
    motorcyclesToShow =
      totalSetSize === 0
        ? motorcycles
        : filterOutMotorcycles(motorcycles, filterValue);
  } else {
    motorcyclesToShow = motorcycles;
  }

  const trItems = motorcyclesToShow.map((motorcycle, i) => {
    return <ListItem key={i} {...motorcycle}></ListItem>;
  });

  return (
    <table className="section__table">
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Type</th>
          <th>Ccm</th>
          <th>Color</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{trItems}</tbody>
    </table>
  );
}
