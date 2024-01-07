// var Search = function(array, target) {

//     function leftMostIndex(array, target) {
//         let left = 0, right = array.length - 1;

//         while(left<=right) {

//             let mid = Math.floor((left+right)/2);

//             if(array[mid]== target && array[mid-1] != target) {
//                 return mid
//             } else if((array[mid]== target && array[mid-1] == target) || array[mid] > target) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//         return -1;
//     }

//     function rightMostIndex(array, target) {
//         let left = 0, right = array.length - 1;

//         while(left<=right) {

//             let mid = Math.floor((left+right)/2);

//             if(array[mid]== target && array[mid+1] != target) {
//                 return mid
//             } else if((array[mid]== target && array[mid+1] == target) || array[mid] < target) {
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }
//         return -1;
//     }

//     return [leftMostIndex(array, target),rightMostIndex(array, target)];

// }

// console.log(Search([5,7,7,8,8,10], 8));


// /************************************************************************/

var searchRotatedArray = function(array, target) {

} 


console.log(Search([7,8,9,1,2,3], 1));
