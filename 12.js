var a = {'Alex': ['subj1', 'subj2', 'subj3'],
    
        'David': ['subj1', 'subj2']}
var i=0
var count=0
var b=0
while(i<a.length){
    if (a[i].includes (b)){
        count=count+1
    }
    i=i+1
}
console.log(count)





var dict =  {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
 }
 var count = 0
 for(i in dict){
    for (a in dict[i]){
        count ++
    }
 }
  
 console.log(count);