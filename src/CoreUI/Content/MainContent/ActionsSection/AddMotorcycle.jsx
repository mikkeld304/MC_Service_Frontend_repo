import './AddMotorcycle.css';
import { useCallback, useState } from 'react';
import { addMotorcycleToDatabase } from '../../Functionality/ApiService.js';

export default function AddMotorcycle({ motorcycles, onAdd }) {
    const [isAddingMotorcycle, setIsAddingMotorcycle] = useState(false);
    const [formValues, setFormValues] = useState({
        make: '',
        model: '',
        type: '',
        ccm: '',
        color: '',
        year: ''
    })

    const handleToggleInputsDiv = useCallback(() => { // Brug useCallBack - caching af funktion.
        setIsAddingMotorcycle(prevState => !prevState);
    }, []);


    function handleChange(event){
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
            const addMcFetch = async () => {
                const result = await addMotorcycleToDatabase({...formValues});
                if(result.error) {
                    console.log(result.error);
                }
                else {
                    let newMotorcyclesArr = [...motorcycles];
                    newMotorcyclesArr.push(result);
                    onAdd(newMotorcyclesArr);
                }
                
            }
            addMcFetch();
    }

    let trItems = [];
    for (const [key, value] of Object.entries(formValues)) {
        trItems.push(
        <><label>{key}</label>
        <input type="text" name={key} value={value} onChange={handleChange} placeholder="Eks. Harley Davidson"></input></>);
    }

    return ( //Component eller programmatically(Object.entries).
        <div className="add-motorcycle-div">
            <button id="add-motorcycle-popup-btn" onClick={() => handleToggleInputsDiv()}>{isAddingMotorcycle ? "Annuller" : "Tilføj motorcykel"}</button>
            <form onSubmit={handleSubmit}>
            {isAddingMotorcycle && <div className="add-motorcycle-inputs">  
                 {trItems}
                 <button type="submit" id="add-motorcycle-btn">Tilføj motorcyckel</button>
            </div>}
            </form>
        </div>
    )
}