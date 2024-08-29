const ROOT_URL = import.meta.env.VITE_REACT_APP_ROOT_URL;
const getMotorcyclesApiEndpoint = `${ROOT_URL}/getAllMotorcycles`;
const addMotorcycleApiEndpoint = `${ROOT_URL}/addMotorcycle`;

export async function getMotorcycles() {
    try {
    const response = await fetch(getMotorcyclesApiEndpoint);
    if(!response.ok) {
        throw new Error(`Failed to fetch motorcycles: ${response.status} ${response.statusText}`);
    }
    const motorcycles = await response.json();
    return motorcycles;
    }
    catch(err) {
        console.log("Error fetching motorcycles from server: ", err);
    }
}

export async function addMotorcycleToDatabase(data){
    try {
        const response = await fetch(addMotorcycleApiEndpoint, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }
    catch(err) {
        console.log("Error in addMotorcycleToDatabase function: " + err);
    }
}

