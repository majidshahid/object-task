var itemsArray = [
    { name: 'juice', price: '50', quantity: '3' },
    { name: 'cookie', price: '30', quantity: '9' },
    { name: 'shirt', price: '880', quantity: '1' },
    { name: 'pen', price: '100', quantity: '2' }
];
var juice =+(itemsArray[0].price) ;
 var cookie = + (itemsArray[1].price);
 var shirt =+ (itemsArray [2].price);
 var pen = + (itemsArray[3].price);

document.write( "juice price :"  + juice  + "<br>");
document.write( "cookie price :"  + cookie + "<br>");
document.write( "shirt price :"  + shirt + "<br>");
document.write( "pen price :"  + pen + "<br>");
document.write("Total price :" + (juice+cookie+shirt+pen ));






var obj = {
    name : 'majid',
    email: 'majidshahid474@gmail.com',
    password:'12345678',
    age:'25',
    gender:'male',
    city:'karachi',
    country:'pakistan',
}

if(('age' in obj) == true && ('country' in obj) == true){
    alert("age and country is found")
}else if (('name' in obj) == true && ('email' in obj) == true){
 alert("name and email is found")
}







function Foo(name,email){
      this.name=name;
      this.email=email
   
}

var majid = new Foo('majid',"majidshahid474@gmail.com");
var umar =new Foo ('umar','umarzhaid2222@gmail.com');
console.log(majid.name);
console.log(umar.email)






// var names = prompt("enter your name ","hamza");
// var gender = prompt('gender');
// var address = prompt('address',"garden west");
// var education = prompt('education ',"matric")


// function Popu(name,gender,address,education){
// this.name=name;
// this.gender=gender;
// this.address=address;
// this.education=education;
// }
// var per = new Popu(names,gender,address,education);

// console.log(per.names)


function Foo1(name,gender,add,edu){
    this.name=name;
    this.email=gender;
    this.add=add;
    this.edu=edu;
 
}

var majid = new Foo1(prompt("enter your name"),prompt("enter your gender"),prompt('enter your address'),prompt('enter your education'));
document.write(majid.name + "<br>");
document.write(majid.email  + "<br>");
document.write(majid.add  + "<br>");
document.write(majid.edu  + "<br>");