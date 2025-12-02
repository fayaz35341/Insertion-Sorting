class Solution {
    insertionSort(nums) {
        for (let i=1; i<nums.length;i++){
            let j=i
            while (j>0 && nums[j-1]>nums[j]){
                [nums[j-1],nums[j]] = [nums[j],nums[j-1]]
                j--;
            }
        }
        return nums
    }
}
const nums= [7, 4, 1, 5, 3]
//const nums=[ 1,3,4,5,7 ]
console.log(new Solution().insertionSort(nums))
