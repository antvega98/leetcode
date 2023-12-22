// https://leetcode.com/problems/merge-sorted-array/submissions/1125668291/

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;

    let back = nums1.length - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[back] = nums1[i--];
        } else {
            nums1[back] = nums2[j--];
        }
        --back;
    }

    while(i >= 0){
        nums1[back] = nums1[i--];
        --back;
    }

    while(j >= 0){
        nums1[back] = nums2[j--];
        --back;
    }
};
