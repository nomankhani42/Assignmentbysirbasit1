/*
1. Code a short form of x = x + 1; Use either of the two legal 
expressions.
2. If x has a value of 100, what is the fastest way to reduce it to 99 
with a math expression?
3. var x = 50;
var y = x++;
What is the value of y?
4. var y = 50;
var z = --y;
What is the value of z?
5. In a single statement, decrement num and assign its original value 
to newNum.
6. In a single statement add 1 to a variable and assign its original 
value to another variable.
7. Assign a number value to a variable.
Increment the variable.
Display the new value in an alert 
*/


// var x=1;
// x++;
// alert(x);

// var x=100;
// --x;
// alert(x);

// var x=50;
// var y=x++; // value of y is still 50 because it is post increament first values store and then increamented by 1



// var y=50;
// var z=--y; // value of z is 49 because of pre-increament first value is increamented and then store in z


// var newNum=50;
// alert(--newNum);

// var i=1;
// var j=i++;


// var a=1;
// a++;
// alert(a);


/*

Chapter 7 (Math Expression III)
1. var calculatedNum = 2 + (2 * 6);
What is the value of calculatedNum?
2. var calculatedNum = (2 + 2) * 6;
What is the value of calculatedNum?
3. var calculatedNum = (2 + 2) * (4 + 2);
What is the value of calculatedNum?
4. var calculatedNum = ((2 + 2) * 4) + 2;
What is the value of calculatedNum?
Note: Try all the above equations yourself.
5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, 
clarified with parentheses, producing 56.
6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, 
clarified with parentheses, producing 20.
7. Write a statement that assigns to pressure the result of 4 / 2 * 4, 
clarified with parentheses, producing 5.

*/
// var calculatedNum=2+(2*6);  // 14
// alert(calculatedNum);

// var calculatedNum = (2+2) * 6; // 24
// alert(calculatedNum);

// var calculatedNum = ( 2+ 2) * (4+2);//24
// alert(calculatedNum);

// var calculatedNum=((2+2)*4) + 2; // 18
// alert(calculatedNum);

// var costOfResult= (2+2) * (4 + 10); // 56
// alert(costOfResult);

// var cost = 2 + (2 * 4) + 10; // 20
// alert(cost);

// var cost=(4/2)*4; //i Think in any way 5 wouldn't be produced
// alert(cost) 


/*
Chapter 8 (Concatenating Text 
Strings)
1. var num = "2" + "2";
What is the value of num? Include quotation marks.
2. message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
Alert the statement
3. alert("33" + 3);
What message displays in the alert box?
4. Write an alert that displays the concatenation of the two parts of 
"Pakistan Zindabad".
5. Write a statement that assigns to a variable the concatenation of 
a string with a number
6. Assign strings to two variables. Then concatenate them and assign 
the result to a third variable.
*/

// var num = '2' + '2';// 22
// alert(num)

// var message=('Hello '+ 'Dolly'); // Hello Dolly
// alert(message);

// alert('33' + 3) //333

// alert('Pakistan ' + 'Zindabad');

// var value='abc' + 5;//abc5
// alert(value)

// var firstName='Noman';
// var lastName='Khan';
// var fullName= firstName + ' ' + lastName ;
// alert(fullName);



/*

Chapter 9 (Prompts)
1. Code a prompt with the message "Enter first name". The user's 
response is assigned to firstName.
2. Code a prompt with the message "Country?" and the default 
answer "China". The user's response is assigned to country.
3. Correct this statement
var yourName = prompt(Enter Your Name");
4. Code a prompt that specifies a string as the message Include a 
default input.
5. Assign strings to two variables. Code a prompt specifying the first 
variable as the message and the second variable as the default 
response. Assign the user's response to a third variable.
6. Display a prompt, including both a message and a default 
response.
Display the user's response in an alert.
*/

// var firstName=prompt('Enter Your First Name');

// var country=prompt('Enter Your Country Name','China');


// var yourName=prompt('Enter Your Name');

// var message=prompt('Enter Your Message','Hello EveryOne')


// var EnterNum='Enter Your Number';
// var defaultNum='034111111111';
// var phone=prompt(EnterNum,defaultNum);

// var display=prompt('Enter Your Message','Hello Pakistan');
// alert(display);



/*

Chapter 10 (if statments)
1. var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement:
Also try this statement by yourself
2. This is the first line of an if statement:
if (x === y) {
Complete the statement. If the condition is true, display a box 
that asks the user value of z? and assign it to another variable.
3. Code an if statement that tests if ZipCode is "10010" so, Alert 
that "Karachi". if not then alert ("Please write correct city")
4. Code an if statement. Test whether a variable has a particular 
numerical value. If so, assign a new value to that variable, as in 
x = 1;
*/



// var city='Karachi';
// if(city=='Karachi'){
//     console.log(`${city} is the city of light`);
// }

// var x=3;
// var y=3;
// if(x===y){
//     var z=prompt('Enter Value of z',5);
// }
// alert(z);


// var zipCode=+prompt('Enter Zip Code ',10010);
// if(zipCode=='10010'){
//     console.log(`Karachi`);
// }
// else{
//     ('Enter Correct City Zip Code');
// }


// var a=3;
// if(a==3){
//     a=5;
// }
// else{
//     a=3;
// }
// alert(a);

