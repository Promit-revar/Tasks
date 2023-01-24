const data=[
    {"Fname":"Promit","Lname":"Revar"},
    {"Fname":"Siddharth","Lname":"Sharma"},
    {"Fname":"Nikhar","Lname":"Gangwar"},
    {"Fname":"Yash","Lname":"Sharma"},
    {"Fname":"Kartik","Lname":"Goel"},
    {"Fname":"Rohit","Lname":"Yadav"}
    ]
const sharmas=data.filter(item=> item.Lname==="Sharma");
const notSharmas=data.filter(item=> item.Lname!=="Sharma");
const colletiveString=data.reduce((str,item)=>str+item.Fname,"");
console.log(colletiveString);
console.log(sharmas,notSharmas);