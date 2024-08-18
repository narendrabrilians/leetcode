function twoSum(nums: number[], target: number): number[] {
  const numbers = {};
  let diff: number;
  let i: number;
  for (i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (numbers[diff] !== undefined) {
      return [numbers[diff], i];
    } else {
      numbers[nums[i]] = i;
    }
  }
  return [];
}
