import {
  extractFilterOptionSets,
  extractFilterOptions,
} from "./helperFunctions";

test("extractFilterOptions", () => {
  expect(extractFilterOptions([])).toEqual({
    color: [],
    make: [],
    model: [],
    type: [],
  });

  expect(
    extractFilterOptions([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
    ]),
  ).toEqual({
    color: ["black"],
    make: ["harley"],
    model: ["7f"],
    type: ["cruiser"],
  });

  expect(
    extractFilterOptions([
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
    ]),
  ).toEqual({
    color: ["red"],
    make: ["suzuki"],
    model: ["hayabusa"],
    type: ["sport"],
  });

  expect(
    extractFilterOptions([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
    ]),
  ).toEqual({
    color: ["black", "blue"],
    make: ["harley"],
    model: ["7f"],
    type: ["cruiser"],
  });

  expect(
    extractFilterOptions([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
    ]),
  ).toEqual({
    color: ["black", "blue", "red"],
    make: ["harley", "suzuki"],
    model: ["7f", "hayabusa"],
    type: ["cruiser", "sport"],
  });

  expect(
    extractFilterOptions([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 04",
        type: "scooter",
      },
    ]),
  ).toEqual({
    color: ["black", "blue", "red", "orange"],
    make: ["harley", "suzuki", "bmw"],
    model: ["7f", "hayabusa", "ce 04"],
    type: ["cruiser", "sport", "scooter"],
  });

  expect(
    extractFilterOptions([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 04",
        type: "scooter",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 02",
        type: "scooter",
      },
    ]),
  ).toEqual({
    color: ["black", "blue", "red", "orange"],
    make: ["harley", "suzuki", "bmw"],
    model: ["7f", "hayabusa", "ce 04", "ce 02"],
    type: ["cruiser", "sport", "scooter"],
  });
});

test("extractFilterOptionSets", () => {
  expect(extractFilterOptionSets([])).toEqual({
    color: new Set(),
    make: new Set(),
    model: new Set(),
    type: new Set(),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
    ]),
  ).toEqual({
    color: new Set(["black"]),
    make: new Set(["harley"]),
    model: new Set(["7f"]),
    type: new Set(["cruiser"]),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
    ]),
  ).toEqual({
    color: new Set(["red"]),
    make: new Set(["suzuki"]),
    model: new Set(["hayabusa"]),
    type: new Set(["sport"]),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
    ]),
  ).toEqual({
    color: new Set(["black", "blue"]),
    make: new Set(["harley"]),
    model: new Set(["7f"]),
    type: new Set(["cruiser"]),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
    ]),
  ).toEqual({
    color: new Set(["black", "blue", "red"]),
    make: new Set(["harley", "suzuki"]),
    model: new Set(["7f", "hayabusa"]),
    type: new Set(["cruiser", "sport"]),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 04",
        type: "scooter",
      },
    ]),
  ).toEqual({
    color: new Set(["black", "blue", "red", "orange"]),
    make: new Set(["harley", "suzuki", "bmw"]),
    model: new Set(["7f", "hayabusa", "ce 04"]),
    type: new Set(["cruiser", "sport", "scooter"]),
  });

  expect(
    extractFilterOptionSets([
      {
        color: "black",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "blue",
        make: "harley",
        model: "7f",
        type: "cruiser",
      },
      {
        color: "red",
        make: "suzuki",
        model: "hayabusa",
        type: "sport",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 04",
        type: "scooter",
      },
      {
        color: "orange",
        make: "bmw",
        model: "ce 02",
        type: "scooter",
      },
    ]),
  ).toEqual({
    color: new Set(["black", "blue", "red", "orange"]),
    make: new Set(["harley", "suzuki", "bmw"]),
    model: new Set(["7f", "hayabusa", "ce 04", "ce 02"]),
    type: new Set(["cruiser", "sport", "scooter"]),
  });
});
