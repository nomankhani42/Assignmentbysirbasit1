/*
1. Write a statement in which loop is to run 10 times.
*/

// for (var i = 0; i <= 10; i++) {
//     console.log('Hello World ' + i)
// }

/*

. Code the first line of a for loop with the usual counter name, usual 
starting value, and usual increment. Run it 12 times using <= to 
specify how many loops.
*/

// for(var i=1;i<=12;i++){
//    console.log('Hello World ' + i);
// }

/*

3. What are the 5 characters missing from this code, excluding any 
spaces that are missing? Type them in order, with no spaces or 
commas between them


for var i = 0 i <= 4 i++
Note: Complete this statement by yourself
*/
// for(var i=0;i<=4;i++){
//     console.log(i);
// }

/*

4. Code the first line of a for loop with a counter name that's not i. 
Code the usual starting value and usual increment. Run it 100 
times using < to specify how many loops.
*/

// for(var j=0;j<=100;j++){
//     console.log(j);
// }


/*

5. Code the first line of a for loop with the usual counter and the 
usual starting value. Run it 3 times using > to specify how many 
loops. Decrement it with each iteration.
*/

// for(var k=3;k>=0;k--){
//     console.log(k);
// }


/*
6. The statement assigns the number of elements in the array to the 
variable.
*/

// var arr=['Dogs','Birds','Lions','Elephants','Amphibia'];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

/*
7. Set a variable named “flag” with an initial Boolean value of your 
choice.
*/

// var arr=['Dogs','Birds','Lions','Elephants','Amphibia'];
// var bool=false;
// var inputAnimal=prompt('Enter An Animal To Check it is in the List Or not','Dogs');
// inputAnimal=inputAnimal.slice(0,1).toUpperCase() + inputAnimal.slice(1).toLowerCase();
// for(var i=0;i<arr.length;i++){
// if(arr[i]==inputAnimal){
//     console.log('Found');
//     bool=true;
// }
// }
// if(bool==false){
//     console.log('Not Found')
// }


/*
8. Code the first line of a for loop with the usual counter, the usual 
starting value, and the usual incrementing. Limit the number of 
loops by the number of elements in the array pets.
*/

// var pets=['Birds','Cats','lions','kings','Elephants'];
// for(var i=0;i<pets.length;i++){
//     console.log(pets[i]);

// }


/*

9. Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should 
be 1.)
Break out of the loop.
*/

// for(var i=1;i<=10;i++){
//     if(i==2){
//         console.log('It Should be 1');
//     }
// }

/*
10. Create an array which contains user names
Code a prompt with the message "Enter first name". The user's 
response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual 
starting value, and the usual incrementing. Limit the number of 
loops by the number of elements in the array user names.
Code an if statement that tests the presense of (user name) in an 
array.
If user name match Alert that "Enter". if not then alert ("Please 
write correct user name").
*/

// var userNames=['UserName1','UserName2','UserName3','UserName4','UserName5','UserName6'];
// var inputUser=prompt('Enter a User Name','UserName1');

// for(var i=0;i<userNames.length;i++){
//     if(userNames[i]==inputUser){
//         console.log('found');
//     }
// }


/*

11. Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
 if (userInput === list[i]) {
 alert("Match found");
 matchFound = true;
 break;
 }
};
*/

// var Names=['Noman','Ali','Huzaifa','Wahab','Bilal','Shahid'];
// var inputName=prompt('Enter Your name to Check its Found in The list Or not','Shahid');
// var bool=false;

// for(var i=0;i<Names.length;i++){
//     if(Names[i]==inputName){
//         alert('Found');
//         bool=true;
//     }
// }
// if(bool==false){
//     alert('Not Found');
// }



/*
12. var firstArr = [''a'', 'b', 'c', 'd', 'e', 'f'];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual 
starting value, and the usual incrementing. Limit the number of 
loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number 
of nested loops by the number of elements in the array 
secondArr.
After that concatenate the both loops.
Expected Output:
a1
a2
a3
a4
f6
================= THE END =================
*/
// var firstArr = ['a', 'b', 'c', 'd', 'e', 'f'];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for(var i=0;i<firstArr.length;i++){
//     for(var j=0;j<secondArr.length;j++){
//         console.log(`${firstArr[i]}  ${secondArr[j]}`)
    // }
// }