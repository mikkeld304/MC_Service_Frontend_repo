import './AddMotorcycle.css';
import { useState } from 'react';
import { addMotorcycleToDatabase } from '../../Functionality/ApiService.js';

export default function AddMotorcycle({ motorcycles, onAdd }) {
    const addMcUrl = "https://localhost:7157/addMotorcycle";
    const [isAddingMotorcycle, setIsAddingMotorcycle] = useState(false);
    const [formValues, setFormValues] = useState({
        make: '',
        model: '',
        type: '',
        ccm: '',
        color: '',
        year: ''
    })

    function handleToggleInputsDiv() {
        setIsAddingMotorcycle(prevState => !prevState);
    }

    function handleChange(event){
        const { name, value } = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        console.log("Gets in");
        event.preventDefault();
            const addMcFetch = async () => {
                console.log(formValues);
                const result = await addMotorcycleToDatabase(addMcUrl, {...formValues});
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

    return (
        <div className="add-motorcycle-div">
            <button id="add-motorcycle-popup-btn" onClick={() => handleToggleInputsDiv()}>{isAddingMotorcycle ? "Annuller" : "Tilføj motorcykel"}</button>
            <form onSubmit={handleSubmit}>
            {isAddingMotorcycle && <div className="add-motorcycle-inputs">
                <label>Mærke</label>
                <input type="text" name="make" value={formValues.make} onChange={handleChange} placeholder="Eks. Harley Davidson"></input>
                <label>Model</label>
                <input type="text" name="model" value={formValues.model} onChange={handleChange} placeholder="Eks. Sportster"></input>
                <label>Type</label>
                <input type="text" name="type" value={formValues.type} onChange={handleChange} placeholder="Eks. Cruiser"></input>
                <label>Ccm</label>
                <input type="text" name="ccm" value={formValues.ccm} onChange={handleChange} placeholder="Eks. 900"></input>
                <label>Farve</label>
                <input type="text" name="color" value={formValues.color} onChange={handleChange} placeholder="Eks. gul"></input>
                <label>Årgang</label>
                <input type="text" name="year" value={formValues.year} onChange={handleChange} placeholder="Eks. 2011"></input>
                <button type="submit" id="add-motorcycle-btn">Tilføj motorcyckel</button>                
            </div>}
            </form>
        </div>
    )
}