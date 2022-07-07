import {
  personActions,
personGetters,
personState,
} from '@/store/person.js';


test('normalize person', async () => {
  const person = {
          ...personActions,
      ...personGetters,
    mover: new Map([
['firstName', 'John'],
['middleName', 'daniel'],
['lastName', 'Doe'],
['suffix', 'Jr.'],
  ])}
  await person.normalizePerson(this)
  expect(person.mover.get('firstName')).toBe(null)
  expect(person.mover.get('middleName')).toBe(null)
  expect(person.mover.get('lastName')).toBe(null)
  expect(person.mover.get('suffix')).toBe(null)
})