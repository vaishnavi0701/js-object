var list=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
let u = [];
for (i of list) {
  for (j in i) {
      if (!u.includes(i[j])) { 
        u.push(i[j]);
      }
  }
}
console.log(u);
