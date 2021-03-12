import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// 函數調用 -> 壓入函數棧(保存函數調用過程中所有變量)
// 函數調用結束 -> 彈出函數棧(釋放函數所有的變量)
// function test() {
// const names = ['why', 'aaa']
// }
//
// test()
//
// test()

let totalNums = []

const nums1 = [20, 11, 222]
const nums2 = [111, 22, 333]

// for (let n of nums1) {
// totalNums.push(n)
// }

totalNums.push(...nums1)