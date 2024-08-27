
export const extractFilterOptionSets = (motorcycles) =>
    motorcycles.reduce(
      ({ make, model, type, color }, mc) => ({
        make: make.add(mc.make),
        model: model.add(mc.model),
        type: type.add(mc.type),
        color: color.add(mc.color),
      }),
      { make: new Set(), model: new Set(), type: new Set(), color: new Set() },
    );

export function firstLetterToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}