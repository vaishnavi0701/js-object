var a=["one","two","three","four","five"]

var b=[1,2,3,4,5,]
var i=0
var c={}
while(i<b.length){
    c[a[i]]=b[i]
    i=i+1
}
console.log(c)



let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
var n={}
for (i in list2){
   n[list1[i]]=list2[i]
}
console.log(n);