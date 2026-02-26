function groupByThree(nums) {
  const result = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const r = n % 3;

    if (!(r in result)) {
      result[r] = [];
    }

    result[r].push(n);
  }

  return result;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(groupByThree(data));
