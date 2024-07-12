import './SectionTable.css';
import ListItem from './ListItem';

export default function SectionTable({motorcycles}) {
    
    
    
    const trItems = motorcycles.map(motorcycle => {
        return (
            <ListItem key={motorcycle._id.timestamp} {...motorcycle}></ListItem>
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