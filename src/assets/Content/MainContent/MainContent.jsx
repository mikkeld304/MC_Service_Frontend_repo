import './MainContent.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMotorcycles } from '../Functionality/ApiService.js';
import SectionTable from './SectionTable/SectionTable.jsx';
import AddMotorcycle from './ActionsSection/AddMotorcycle.jsx';
import  { extractFilterOptions } from '../Functionality/helperFunctions.js';
import StringAttributeFilter from './Filtering/StringAttributeFilter.jsx';

export default function MainContent() {

    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterOptions, setFilterOptions] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMotorcycles();
            if(result.error) {
                console.log(result.error);
            }
            else {
                setFilterOptions(extractFilterOptions(result));
                setMotorcycles(result);
                setIsLoading(false);
            } 
        }
        fetchData();    
    }, []);

    function handleSetMotorcycles(motorcyclesArr) {
        setMotorcycles(motorcyclesArr);
    }
console.log(motorcycles);
    
const trItems = Object.values(filterOptions).map(filterValue => {
    console.log(filterValue);
    /*
    return (
        <StringAttributeFilter filterType='Make' filterData={filterOptions}></StringAttributeFilter>
    );
*/
});

    
        
        
        


    return (
        <>
        { !isLoading ? (<section className="main__section">

            <section className='main__attributes-overview'>
    
                <StringAttributeFilter filterType='Make' filterData={filterOptions}></StringAttributeFilter>
    
            </section>
            <section className='main__table-overview'>
                <section className='actions-section'>
                    <AddMotorcycle motorcycles={motorcycles} onAdd={handleSetMotorcycles}></AddMotorcycle>
                </section>
                <section className='main__table-section' id="main-table-section">
                <SectionTable motorcycles={motorcycles}></SectionTable>
                </section>
            </section>
</section>) : (<div className="lds-dual-ring"></div>)
}
        </>
    );

}