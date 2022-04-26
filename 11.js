const list1=[]
const word="MISSISSIPPI"
let output={}
for (var i of word) {
      if(list1.includes(i)){
       output[i]=output[i]+1
    
  }else{
       list1.push(i);
       output[i]=1;
  }
}
console.log(output);

// var list=[]
// var a="MISSISSIPPI"
// var b={}
// var i=0
// while(i<a){
//     if(list.includes (a[i])){
//         b[a[i]]=b[a[i]]+1
//     }
//     else{
//         list.push(a[i])
//         b[a[i]]=1
//     }
//     i=i+1
// }
// console.log(b)
