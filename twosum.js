/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map1 = new Map()
      for (let i = 0 ; i<nums.length ; i++) {
      if(map1.has(target- nums[i])){
          return [map1.get(target-nums[i]), i ]
      }
        map1.set(nums[i], i)
    }
  };
  