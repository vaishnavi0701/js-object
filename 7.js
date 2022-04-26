var dict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
    }
var i=0
while(i<dict.length){
    if((typeof dict[i])==="object"){
        delete dict[i]['A']
        // i=i+1
        // console.log(dict)
    }
    i=i+1
}
console.log(dict)


// var myDict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{  
//          'A' : 'WELCOME',
//          'B' : 'To',
//          'C' : 'DHARAMSALA'
//         }
//     }
//  for (i in myDict){
//     if ((typeof myDict[i]) === "object"){
//         delete myDict[i]['A']
//     }
//  }
//  console.log(myDict);