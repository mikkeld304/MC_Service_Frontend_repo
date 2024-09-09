import { useState } from "react";
import "./ListItem.css";

export default function ListItem({
  make,
  model,
  type,
  ccm,
  color,
  year,
  price,
  _id,
}) {
  const [isClickedColorTd, setIsClickedColorTd] = useState(false);
  const [isClickedPriceTd, setIsClickedPriceTd] = useState(false);

  const handleClick = (event) => {
    console.log(isClickedColorTd);
    if (!isClickedColorTd && !isClickedPriceTd) {
      event.target.getAttribute("data-name") === "Color"
        ? setIsClickedColorTd((prevState) => !prevState)
        : setIsClickedPriceTd((prevState) => !prevState);
    }
  };

  return (
    <>
      <tr>
        <td>{make}</td>
        <td>{model}</td>
        <td>{type}</td>
        <td>{ccm}</td>
        <td
          data-name="Color"
          className="tdColor"
          onClick={(event) => handleClick(event)}
        >
          {!isClickedColorTd ? (
            <>{color}</>
          ) : (
            <>
              <input></input>
              <button></button>
            </>
          )}
        </td>
        <td>{year}</td>
        <td
          data-name="Price"
          className="tdPrice"
          onClick={(event) => handleClick(event)}
        >
          {!isClickedPriceTd ? (
            <>{price}</>
          ) : (
            <>
              <input></input>
              <button></button>
            </>
          )}
        </td>
      </tr>
    </>
  );
}
