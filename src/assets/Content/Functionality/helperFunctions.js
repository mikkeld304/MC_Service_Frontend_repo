
export function extractFilterOptions(motorcycles) {
    let filterOptions = {
        make: [],
        model: [],
        type: [],
        color: []
    }
    for (let i = 0; i < motorcycles.length; i++) {
        const motorcycle = motorcycles[i];
        if(!filterOptions.make.includes(motorcycle.make))filterOptions.make.push(motorcycle.make);
        if(!filterOptions.model.includes(motorcycle.model))filterOptions.model.push(motorcycle.model);
        if(!filterOptions.type.includes(motorcycle.type))filterOptions.type.push(motorcycle.type);
        if(!filterOptions.color.includes(motorcycle.color))filterOptions.color.push(motorcycle.color);
    }
    return filterOptions;
}

export default { extractFilterOptions };