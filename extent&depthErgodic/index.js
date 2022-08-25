let data = {
  value:1,
  children:[
    {
      value:2,
      children:[{value:3},{value:4}]
    },{
      value:5,children:[{value:6},{value:7}]
    }
  ]
}
//深度遍历 就是一头扎进去
// function extent(obj){
//   console.log(obj.value)
//   if (obj.children && obj.children.length > 0){
//     obj.children.forEach(element => {
//       extent(element)
//     });
//   }
// }
// console.log(extent(data))

function depth(arr){
  let tempParams = []
  arr.forEach(ele => {
    console.log(ele.value)
    tempParams = tempParams.concat(ele.children || [])
  });
  if (tempParams.length > 0){
    depth(tempParams)
  }
}
depth([data])

