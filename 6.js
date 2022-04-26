var dict = {'data1':100,'data2': -54,'data3': 247}
var i=0
var sum=0
value=Object.values(dict)
while(i<value.length){
    sum=sum+value[i]
    i=i+1
}
console.log(sum,":","sum")




var my_dict = {
    'data1':100,
    'data2': -54,
    'data3': 247
   }
var sum=0

for(i in my_dict){
    sum+=my_dict[i]
}
console.log("sum:",sum)