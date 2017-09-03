# Two Sum

## 题目大意
    1.给一个nums数组，找到两个数的和为target，返回这两个数的下标
    2.假定所有的nums都只有一个解，且不能用到一个数两次

## 思路

* 直接两个for循环，但这样有点暴力了，而且时间复杂度也很高为O(n<sup>2</sup>)

* 因为第二个条件限制，只会有一个解
    - 那这样就很简单了，循环一次
    - 每次循环查找```m[target - nums[i]] ```
        + 如果找到了直接返回
        + 没找到则将 该项和target的差 和 该项下标存入对象