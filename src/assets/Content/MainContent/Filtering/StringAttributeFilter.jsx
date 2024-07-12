import './StringAttributeFilter.css';
import FilterChoice from "./FilterChoice";
import { useState } from 'react';


export default function StringAttributeFilter({filterType, filterData}) {

    const [isDivOpen, setIsDivOpen] = useState(false);

    let filterColor = filterData.color;
    const trItems = filterColor.map(filterValue => {
        
        return (
            <FilterChoice filterValue={filterValue}></FilterChoice>
        );

    });

    return (
        <div className="string-filter-div">
            <button onClick={() => setIsDivOpen(prevState => !prevState)}>{filterType}</button>
            {isDivOpen && <div className='string-filter-div-list'>
                <ul>
                {trItems}
                </ul>
            </div>}
        </div>
    )

}

    
