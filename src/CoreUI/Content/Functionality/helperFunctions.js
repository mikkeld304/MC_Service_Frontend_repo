export const extractFilterOptionSets = (motorcycles) =>
  motorcycles.reduce(
    ({ make, model, type, color }, mc) => ({
      make: make.add(mc.make),
      model: model.add(mc.model),
      type: type.add(mc.type),
      color: color.add(mc.color),
    }),
    { make: new Set(), model: new Set(), type: new Set(), color: new Set() }
  );

export function firstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createFilterValueObj(filterOptions) {
  let filterOptionsArr;
  try {
    filterOptionsArr = Object.keys(filterOptions);
    const emptyObject = {};
    return filterOptionsArr.reduce(
      (accumulator, value) => ({ ...accumulator, [value]: new Set("") }),
      emptyObject
    );
  } catch (error) {
    console.log("Error in createFilterValueObj: " + error);
  }
  return filterOptionsArr;
}

export function copyObjectWithSets(obj) {
  let copy;
  try {
    copy = {};
    for (const [key, value] of Object.entries(obj)) {
      copy[key] = new Set(value);
    }
  } catch (error) {
    console.log(error);
  }
  return copy;
}
