export function filterOutMotorcycles(motorcycles, filterValue) {
  let filteredMotorcycles;
  try {
    filteredMotorcycles = motorcycles.filter((motorcycle) => {
      for (let key in filterValue) {
        if (
          filterValue[key] instanceof Set &&
          filterValue[key].size > 0 &&
          !filterValue[key].has(motorcycle[key])
        ) {
          return false;
        }
      }
      return true;
    });
  } catch (error) {
    console.log("Error in filterOutMotorcycles: " + error);
  }
  return filteredMotorcycles;
}
