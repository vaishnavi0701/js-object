var r = require('readline-sync');
var n =r.question('Enter the property name:');
var a={"name":"Raju", "marks":56}
var i=0
key=Object.keys(a);
// console.log(key)
while(i<key.length){
    if(key[i]==n){
        console.log("exists")
        break
    }
    else{
        console.log("not exists")
        break
    }
}
i=i+1



// var readline = require('readline-sync');
// let n =readline.question('Enter the property name:');
// let dict={"name":"Raju", "marks":56}
// for (i in dict){
// if (i==n){
//   console.log("exists");
//   break
// }else{
//   console.log("not exist");
//   break
// }
// }