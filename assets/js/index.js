
/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use 
the typeof operator to check different data types. */


let firstname="Surbhi"
let Lastname='sahu'
let country= 'India'
let city ='indore'
let age = 20 
let married= false
let year= 2000

console.log(typeof firstname)
console.log(typeof Lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof married)
console.log(typeof year)

typeof firstname
'string'
typeof Lastname
'string'
typeof country
'string'
typeof city
'string'
typeof age
Number
typeof married
false
typeof year
Number
//

//Check if type of '10' is equal to 10 

let str='typeof 10'
let num= 10
console.log(str==num) // false

//Check if parseInt('9.8') is equal to 10

 console.log(parseInt('9.8')==10)//false
 console.log(parseInt('9.8') === parseInt('10'))//false
 console.log(parseInt('9.8')+0.2 === parseInt('10'))//false

 //Write three JavaScript statements which provide truthy value. 

let a = 3;
let b = 5;
console.log( a<b )
console.log( a<=b)
console.log( !a==!b)


    
//Write three JavaScript statements which provide truthy value. 

let x=10;
let y=20;
console.log( x>y )
console.log(x>=y )
console.log( x==y )

/* 4>3
   4>=3
   4<3
   4<=3
   4==4
   4!=4
   4!==4
   4!='4'
   4=='4'
   4==='4'
*/

 
console.log( 4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4==4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')

// Find the length of python and jargon and make a falsy comparison statement

let py='python'
console.log(py.length)

let jar='jargon'
console.log(jar.length)

console.log(py.length==jar.length)

/*o 4 > 3 && 10 < 12 
o 4 > 3 && 10 > 12 
o 4 > 3 || 10 < 12 
o 4 > 3 || 10 > 12 
o !(4 > 3) 
o !(4 < 3) 
o !(false) 
o !(4 > 3 && 10 < 12) 
o !(4 > 3 && 10 > 12) 
o !(4 === '4') 
o There is no 'on' in both dragon and pythono 4 > 3 && 10 < 12 // false
*/
console.log(4 > 3 && 10 < 12 )
console.log(4 > 3 && 10 > 12 )
console.log(4 > 3 || 10 < 12 )
console.log(4 > 3 || 10 > 12 )
console.log( !(4 > 3))
console.log(!(4 < 3) )
console.log(!(false) )
console.log(!(4 > 3 && 10 < 12) )
console.log(!(4 > 3 && 10 > 12) )
console.log(!(4 === '4'))





