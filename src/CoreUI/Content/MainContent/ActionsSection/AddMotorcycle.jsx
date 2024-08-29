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
        year: '',
    })

    const handleToggleInputsDiv = useCallback(() => {
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
    const ranIndex = Math.floor(Math.random() * motorcycles.length);
    for (const [key, value] of Object.entries(formValues)) {
        const randomMc = motorcycles[ranIndex];
        const newPlaceholder = randomMc ? `Eks. ${randomMc[key]}`:"Default placeholder"; 
        trItems.push(
        <section key={key}>
        <label>{key}</label>
        <input type="text" name={key} value={value} onChange={handleChange} placeholder={newPlaceholder}></input>;  {/* Fix: Form validation & input clearance on submit*/}
        </section>)
    }

    return (
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