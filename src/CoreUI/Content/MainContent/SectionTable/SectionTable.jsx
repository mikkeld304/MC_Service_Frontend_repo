import './SectionTable.css';
import ListItem from './ListItem';

export default function SectionTable({motorcycles}) {
    
    
    
    const trItems = motorcycles.map((motorcycle, i) => {
        return (
            <ListItem key={i} {...motorcycle}></ListItem>
        );
    })

    return (
    <table className='section__table'>
        <thead>
            <tr key="0">
                <th>Make</th>
                <th>Model</th>
                <th>Type</th>
                <th>Ccm</th>
                <th>Color</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            {trItems}
        </tbody>
    </table>
    )
}