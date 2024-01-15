const removeDuplicates = (nums) => {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          nums[k] = nums[i];
          k++;
      }
  }

  return k;
};

//OR
const removeDuplicates2 = (nums) => {
  let k = 0;
  for (let i = 1 ; i < nums.length; i++ ) {
      if(nums[k] !== (nums[i])){
        nums[++k] = nums[i]
      }
  }
  return k + 1;

};