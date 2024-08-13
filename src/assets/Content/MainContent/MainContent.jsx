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


let filterNames = ["Make", "Model", "Type", "Color"];
let trItems = [];
const filterOptionsArr = Object.values(filterOptions);
for (let i = 0; i < filterNames.length; i++) {
    trItems.push(<StringAttributeFilter filterType={filterNames[i]} filterData={filterOptionsArr[i]}></StringAttributeFilter>);
}

    return (
        <>
        { !isLoading ? (<section className="main__section">

            <section className='main__attributes-overview'>
                <div className='attributes-overview_div'>
                    <form>
                        {trItems}
                        <button type="submit"></button>
                    </form>
                </div>
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