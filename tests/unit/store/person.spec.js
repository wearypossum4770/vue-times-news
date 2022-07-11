import { personActions, personGetters, personState } from "@/store/person.js";

test("normalize person", async () => {
  const person = {
    ...personActions,
    ...personGetters,
    mover: new Map([
      ["firstName", "John"],
      ["middleName", "daniel"],
      ["lastName", "Doe"],
      ["suffix", "Jr."],
    ]),
  };
  await person.normalizePerson({moverType: 'BUSINESS'});
  expect(person.mover.get("firstName")).toBe(null);
  expect(person.mover.get("middleName")).toBe(null);
  expect(person.mover.get("lastName")).toBe(null);
  expect(person.mover.get("suffix")).toBe(null);
});
test.each([
  [
    [
      ["firstName", "John"],
      ["middleName", "Daniel"],
      ["lastName", "Doe"],
    ],
    "John, Daniel, Doe",
  ],
  [
    [
      ["firstName", "John"],
      ["middleName", ""],
      ["lastName", "Doe"],
    ],
    "John, Doe",
  ],
  [
    [
      ["firstName", "John"],
      ["middleName", null],
      ["lastName", "Doe"],
    ],
    "John, Doe",
  ]
])("given a mover %o moverName should be %s", async (state, output) => {
  const mover = new Map(state);
  const person = {
    ...personActions,
    ...personGetters,
    ...personState(),
  };
  const moverName = person.moverName.call(this, { mover });
  expect(moverName).toBe(output);
});
