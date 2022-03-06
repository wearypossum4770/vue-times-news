/**
 * @copyright https://leetcode.com/problems/two-sum/submissions/ 
 * @reference https://leetcode.com/submissions/detail/459691640/ 
 */
import twoSum from '../twoSum';

const data = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
]

test.each(data)('Function should return a value', (nums, target, ) => {  
  const func = twoSum(nums, target);
  expect(func).toBeDefined()
});
// test.each(data)('A map object should be returned', (nums, target,  ) => {  
//   const func = twoSum(nums, target);
//   const given = func.constructor.name
//   expect(typeof func).toEqual('object')
//   expect(given).toEqual('Map')
// });

// test.each(data)('An array object should be returned', (nums, target, ) => {  
//   const func = twoSum(nums, target);
//   const given = func.constructor.name
//   expect(typeof func).toEqual('object')
//   expect(given).toEqual('Array')
// });

// test.each(data)('the correct value should be returned', (nums, target, output) => {  
//   const func = twoSum(nums, target);
//   expect(twoSum(nums, target)).toStrictEqual(output)
// });
