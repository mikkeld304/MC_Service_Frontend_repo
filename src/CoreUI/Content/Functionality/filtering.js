export function filterOutMotorcycles(motorcycles, filterValue) {
  const filteredMotorcycles = motorcycles.filter((motorcycle) => {
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
  return filteredMotorcycles;
}
