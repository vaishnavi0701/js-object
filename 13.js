var a= {'a':50, 
        'b':58, 
        'c':56,
        'd':40, 
        'e':100, 
        'f':20 }
var b=[]
var c=[]
for (i in a){
    b.push(a[i])
    for (j of b){
        if (a[i]>j){
            c.push(a[i])
        }
        if (c.length===3){
            break
        }
    }
}
console.log(c)
// console.log(b)

