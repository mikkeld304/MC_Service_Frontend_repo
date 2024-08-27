import './ListItem.css';

export default function ListItem({make, model, type, ccm, color, year, _id}) {

    return (
        <>
        <tr key={_id.timestamp}>
            <td>{make}</td>
            <td>{model}</td>
            <td>{type}</td>
            <td>{ccm}</td>
            <td>{color}</td>
            <td>{year}</td>
        </tr>
        </>
    )
}