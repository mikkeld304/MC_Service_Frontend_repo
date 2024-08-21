

export async function getMotorcycles() {
    try {
    const response = await fetch("http://localhost:5272/getAllMotorcycles");
    if(!response.ok) {
        throw new Error(`Failed to fetch motorcycles: ${response.status} ${response.statusText}`);
    }
    const motorcycles = await response.json();
    return motorcycles;
    }
    catch(err) {
        console.log("Error fetching motorcycles from server: ", err);
        throw err;
    }
}

export async function addMotorcycleToDatabase(url, data){
    try {
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return response.json();
    }
    catch(err) {
        console.log("Error in addMotorcycleToDatabase function: ", err);
        throw err;
    }
}

export default { getMotorcycles, addMotorcycleToDatabase };