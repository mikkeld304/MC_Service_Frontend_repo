import './MainContent.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMotorcycles } from '../Functionality/ApiService.js';
import SectionTable from './SectionTable/SectionTable.jsx';
import AddMotorcycle from './ActionsSection/AddMotorcycle.jsx';
import { extractFilterOptionSets, firstLetterToUpperCase } from '../Functionality/helperFunctions.js';
import StringAttributeFilter from './Filtering/StringAttributeFilter.jsx';


export default function MainContent() {

    const [motorcycles, setMotorcycles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getMotorcycles();
            if(result.error) {
                console.log(result.error);
            }
            else {
                setFilterOptions(extractFilterOptionSets(result));
                setMotorcycles(result);
                setIsLoading(false);
            } 
        }
        fetchData();    
    }, []);

    function handleSetMotorcycles(motorcyclesArr) {
        setMotorcycles(motorcyclesArr);
    }
    
const trItems = [];
for (const [key, value] of Object.entries(filterOptions)) {
    const capitalizedKey = firstLetterToUpperCase(key);
    trItems.push(<StringAttributeFilter key={key} filterType={capitalizedKey} filterData={value}></StringAttributeFilter>)
}

    return (
        <>
        { !isLoading ? (<section className="main__section">

            <section className='main__attributes-overview'>
                {trItems}
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