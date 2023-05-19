/*
1. Code the first line of an if statement that tests whether one 
variable is unequal to another. (Use !)
2. Code the first line of an if statement that tests whether the 
value represented by a variable is greater than or equal to the 
value represented by another variable.
3. Code an if statement. Test whether a variable is unequal to a 
particular number. If so, assign a number to that variable.
4. Code an if statement that tests whether a number is unequal to 
a different number. If the condition is true (it will be), display a 
congratulations alert.
5. Code a prompt asking for your first name.
Code an if statement that tests whether the name you entered 
is unequal to another name.
If the condition is true (it will be), display an alert that says "No 
match"
*/


// var a=4;
// if(a!=5){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// var a=+prompt('Enter a number',10);
// var b=+prompt('Enter a Second Number',15);
// if(a>b){
//    console.log(' The Value of A is Greater')
// }else{
//     console.log(' The Value of B is Greater')
// }

// var a=5;
// if(a==5){
//     a=7;
// }else{
//     a=5;
// }
// console.log(a);

// var a=4;
// var b=5;
// if(a!=b){
//     console.log('Congradulations');
// }
// else{
//     console.log('Oops');
// }

// var firstName=prompt('Enter Your Name','Noman');
// if(firstName!=='Khan'){
//     console.log('Not Match');
// }
// else{
//     console.log('Match')
// }


/*

Chapter 12 (if…else and else if 
statements)
1. Code an if statement that tests whether the value represented by 
a variable is greater than or equal to the value represented by 
another variable. If so, display an alert. If not, display a different 
alert.
2. Write a program using if else and else if statement which take 
marks from user. And the program will calculate your percentage 
and give you grade A/C to Your percentage. (MARKSHEET)
3. This is the if statement that begins the code.
if (a === 10) {
 alert("a is 10");
}
If a isn't 10, display an alert that says The correct value of a is
____
Note: Try this by yourself
4. Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi.
If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore.
Otherwise, display a different alert.

*/


// var a=2;
// var b=3;
// if(a>=b){
//     console.log('Congradulations You Have Won The Game');
// }
// else{
//     console.log('Oops You Have Lost The Game');
// }

// var physics = +prompt('Enter Your Physics Marks', 72);
// var comp = +prompt('Enter Your Computer Marks', 76)
// var math = +prompt('Enter Your Math Marks',96);
// var total = physics + comp + math;
// var percentage = (total/300 ) * 100;
// console.log(percentage);
// if(percentage>=80 && percentage<=100){
//     alert('You Have A One Grade');
// }
// else 
// if(percentage>=70 && percentage<80){
//     alert('You Have A  Grade');
// }
// else 
// if(percentage>=60 && percentage<70){
//     alert('You Have B  Grade');
// }
// else 
// if(percentage>=50 && percentage<60){
//     alert('You Have C  Grade');
// }
// else 
// if(percentage<50 ){
//     alert('Fail');
// }
// else{
//     alert('Something Goes Went Wrong')
// }

// var a=prompt('Enter a Value',10);
// if(a==10){
//     console.log('A Is Equal to 10')
// }
// else{
//     console.log('The Value of a is ' + a);
// }

// var city=prompt('Enter City Your Name','Karachi');
// city=city.slice(0,1).toUpperCase()+ city.slice(1).toUpperCase();
// if(city=='Karachi'){
//     console.log('acknowledging it is Karachi'); 
// }
// else if(city=='Lahore'){
//     console.log('acknowledging it is Lahore');
// }
// else{
//     console.log('acknowledging it is ' + city);
// }


/*

Chapter 13 (Testing sets of 
    conditions)
    1. Code the first line of an if statement that tests whether both are 
    true: a has the same value as b and c has the same value as d.
    2. Code the first line of an if statement that tests whether either or 
    both are true: a has the same value as b or c doesn't have the 
    same value as d.
    3. Code the first line of an if statement that tests whether 
    I. name is either "Hamza" or "Arsalan".
    II. age is Less than 60.
    4. Declare two variables and assign them number values.
    If the first variable is less than the second variable or greater than 
    the second variable, display an alert.
    5. Declare 2 variables. Assign one of them your first name and the 
    other one your last name.
    Code 2 prompts, asking for your first and your last name.
    If your answers match the two variables, display an alert.

*/

// var a=5;
// var b=5;
// var c=10;
// var d=10;

// // if(a==b && c==d){
// //     console.log('True');
// // }
// // else{
// //     console.log('False');
// // }

// var a=5;
// var b=5;
// var c=10;
// var d=3;

// if(a==b && c!=d){
//     console.log('True');
// }
// else{
//     console.log('False');
// }

// var name_=prompt('Enter Your Name','Arsalan');
// var age=+prompt('Enter Your Age',20);
// if((name_=='Arsalan' ||name_=='Hamza' ) && age<60){
// console.log('Allowed')
// }
// else{
//     console.log('Dont Allowed');
// }


// var a=+prompt('Enter Value Of a',50);
// var b=+prompt('Enter Value of b',40);
// if(a>b){
//     console.log('A is Greater Than B');

// }
// else if(a==b){
//     console.log('A is Equal to B');
// }
// else{
//     console.log('B is Greater Than A');
// }

// var firstName='Noman ';
// var lastName='Khan';
// var enterName=prompt('Enter Your Name','Noman Khan')
// if(enterName == firstName + lastName){
//     alert('Match')
// }
// else{
//     console.log('Not Match');
// }


/*

Chapter 14 (If statements nested)
1. Code an if statement enclosing a nested if. If password is not 
empty, then check if password is not greater than 5 , then display 
an alert that says "Password must be greater than 5" if greater 
than 5 then Alert "OK".
2. Try this statement by yourself
if (a === 1) {
if (c === "Max") {
 alert("OK");
 }
}
3. Code the first line of an if statement that avoids the nesting above 
by testing for multiple conditions.
if (a === 1) {
 if (c === "Max") {
alert("OK");
 }
}
4. Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the 
first variable equals the second variable and also whether it is less 
than or equal to the second variable. If the test passes and it 
will display an alert message.
*/

// var pass='abc12345';
// if(pass==''){
//     alert('Password is not Empty')
//     if(pass.length<=5){
//         alert('Password Must Be Greater than 5 Characters')
//     }
// }
// else{
//     alert('Ok')
// }


// var a=1;
// var c='Max';
// if(a==1){
//     if(c=='Max'){
//         alert('ok');
//     }
//     else{
//         console.log('Something Went Wrong')
//     }
// }
// else{
//     console.log('Something Went Wrong')
// }


// var a=1;
// var c='Max';
// if(a==1 && c=="Max"){
//     alert('Ok');

// }
// else{
//     console.log('Something Went Wrong') 
// }


// var a=10;
// var b=10;

// if(a==b){
//     if(b<20){
//         alert('Ok')
//     }
//     else{
//         console.log('Something went Wrong')
//     }
// }
// else{
//     console.log('Something went Wrong')
// }

/*
Chapter 15 (Array I)
1. Declare an empty array.
2. Code an array with 1 string element
3. var alphabet = ["h","i","j","k"]. Now print the letter j in alert 
using array index
4. var alphabet=["h","i","j","k", 'l','m', 'n', 'o']. Find the total 
length of array.
5. Declare an array with one element and Add a second element
with index in array. Create an alert whose message is the new 
element.

*/

// var arr=[];

// var arr=['Noman'];

// var alphabet = ["h","i","j","k"]
// console.log(alphabet[2])

// var alphabet=["h","i","j","k", 'l','m', 'n', 'o'];
// console.log(alphabet.length);

// var arr=['Noman'];
// arr[1]='Faizan';
// alert(arr[1]);


/*
Chapter 16 (Array II)
1. Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.
2. var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.
3. var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array

*/

// var arr=['King'];
// arr.push('Abid')
// console.log(arr)


// var Alphabet=["h","i","j","k"];
// Alphabet.pop();
// // console.log(Alphabet);

// var Alphabet=["h","i","j","k"];
// Alphabet.push('l','m');
// console.log(Alphabet);

/*
Chapter 16 (Array III)
1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Remove the first element of an array.
2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array.
3. Declare an array with one element.
Add a second element to the beginning of the array.
Create an alert whose message is the new first element.
4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Insert "L" into the array between "M" and "XL".
5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array, 
regSizes.
6. var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".
7. var pets = ["dog", "cat", "ox", "duck", "frog"]
Remove "cat" and "ox".
8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice.
*/

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// console.log(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift('XXS','XXS','XS');
// console.log(sizes);

// var arr=['Dog'];
// arr.unshift('Cat');
// console.log(arr);


// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0,'L');
// console.log(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var newSizes=sizes.slice(0,3);
// console.log(newSizes)

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2,'Billi','Chuha');
// console.log(pets)

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);
// console.log(pets);

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// pets=pets.slice(3,5);
// console.log(pets)