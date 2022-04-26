var main="My name is kumar, and my friend’s name is Dhamu"
var sub ="is"
var i=0
var count=0
var b=main.split(" ")
console.log(b)
while(i<b.length){
    if( b[i].includes(sub)  ){
        count=count+1
    }
    i=i+1
}
console.log(count)






