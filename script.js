QUESTION 2:
1.Find the culprit
fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>
ans=>
<!DOCTYPE html>
<html>
<body>
 <script>
 alert("I'm JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

2.Find the culprit and invoke the alert
qs:
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
scripts.js

alert(“I’m invoked!”);
ans:
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
alert("I'm invoked!");

3.Fix the below to alert Guvi geek
que:
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"
ans:
Updated fix.html code:

<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
script.js code:

let fname = "Guvi";
let lname = "geek";
let admin = fname + " " + lname;
alert(admin); // "Guvi geek"

4.Fix the below to alert hello Guvi geek
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

ans:
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

let fname = "Guvi";
let lname = "geek";
let name = fname + " " + lname;
alert(`hello ${name}`);

5.Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

ans:
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b));

6.Fix the below to alert sum of two numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

ans:
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

let a = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));
alert(a + b);

7.If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

ans:
The code is blasted because the condition var a = "2" > "12"; is comparing two strings, "2" and "12", using a greater than operator. In string comparison, the comparison is made character by character from left to right. Since "2" is greater than "1" in the first character position, the condition evaluates to true and the "Code is Blasted" message is printed.

To diffuse the code and get "Diffused", you need to compare the numbers instead of strings. You can do this by converting the strings to numbers using the Number() function. Here's the corrected code:

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

var a = Number("2") > Number("12");
//Don't touch below this
if (a) {
console.log("Code is Blasted")
}
else
{
console.log("Diffused")
}

8.How to get the success in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
ans:
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a !== null && Number(a) !== 0 && !isNaN(a)) {
console.log('OMG it works for any number inc 0');
}
else {
console.log("Success");
}

9.How to get the correct score in console.
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

ans:
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js
let value = Number(prompt('How many runs you scored in this ball'));
if (value === 4) {
console.log("You hit a Four");
} else if (value === 6) {
console.log("You hit a Six");
} else {
console.log("I couldn't figure out");
}

10.Fix the code to welcome the Employee
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

ans:
fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'';
console.log(message);

11.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

ans:
fix.html
<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
script.js
// You can't change the value of the msg
let message;
if (null || 2 || undefined )
{
message = "welcome boss";
}
else
{
message = "Go away";
}
console.log(message);

12.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

ans:
fix.html

<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
script.js

let message;
let lock = 2;
// Don't change any code below this
if (lock === 2) {
message = "welcome boss";
} else {
message = "Go away";
}
console.log(message);

13.Fix the code to welcome the boss
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

ans:
fix.html
<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
script.js
let message;
let lock = 2;
// Don't change any code below this
if (lock === 2) {
message = "welcome boss";
} else {
message = "Go away";
}
console.log(message);

14.Change the code to print
3
2
1
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}

ans:
fix.html

<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>
script.js

// You can change only 2 characters
let i = 4;
while (--i) {
console.log(i);
}

15.Change the code to print 1 to 10 in 4 lines
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

ans:
let num = 1
console.log(num, num+1, num+2, num+3)
num += 4
console.log(num, num+1, num+2, num+3)
num += 4
console.log(num, num+1, num+2, num+3)
num += 2
console.log(num)

16.Change the code to print even numbers
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

ans:
script.js

for (let num = 2; num <= 20; num += 2) {
console.log(num)
}

17.Change the code to print all the gifts
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}

ans:
script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

18.Fix the code to disarm the bomb.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

ans:
fix.html
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
script.js
let code = "disarm"; // Set the code to disarm the bomb
let input = prompt("Enter the disarm code:");

if (input === code) {
console.log("Bomb disarmed");
} else {
console.log("Bomb triggered");
}

19.Whats the msg printed and why?
var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

ans:
The message printed will be "hi".
In the first if statement, lemein is a string with a value of "0". In JavaScript, a non-empty string is considered to be truthy, so the if statement evaluates to true and the string "hi" is added to the msg variable.
In the second if statement, lemeout is a number with a value of 0. In JavaScript, the number 0 is considered to be falsy, so the if statement evaluates to false and the string "Hello" is not added to the msg variable.
Therefore, after both if statements have been evaluated, msg contains the string "hi", which is what will be printed to the console.

20.Whats the msg printed and why? Guess you answer before running it.

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

ans:
The message printed will be "hi".

In the first if statement, lemein is a string with a value of "0". In JavaScript, a non-empty string is considered to be truthy, so the if statement evaluates to true and the string "hi" is added to the msg variable.
In the second if statement, lemeout is a number with a value of 0. In JavaScript, the number 0 is considered to be falsy, so the if statement evaluates to false and the string "Hello" is not added to the msg variable.
Therefore, after boh if statements have been evaluated, msg contains the string "hi", which is what will be printed to the console.


QUESTION 3
1.Write a code to print the numbers in the array
var arr=[1,2,3,4,5,6,7,8,9];
var num=""
for(let i=0; i<arr.length; i++)
{
 num=num+Number(arr[i]);
}
console.log(num);
o/p=>123456789

2.Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
var arr=[1,2,3,4,5,6,7,8,9,10,11];
var num=""
for(let i=arr.length-1; i>0; i--)
{
 num+=Number(arr[i])+" "
}
console.log(num);
o/p=>11 10 9 8 7 6 5 4 3 2 1

3.Write a code to replace the array value — If the number is even, replace it with ‘even’.

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var a=[]
for (var i = 0; i <arr.length; i++) {
 if(arr[i] %2 == 0 )
 {
  a.push("even");
 }
 else
 {
    a.push(arr[i]);
 }
}
console.log(a);
o/p=>[1, 'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]

4.Write a code to replace the array value — If the index is even, replace it with ‘even’.

var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var a=[]
for (var i = 0; i <arr.length; i++) {
 if(i %2 == 0 )
 {
  a.push("even");
 }
 else
 {
    a.push(arr[i]);
 }
}
console.log(a);
o/p=>['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']

5.Write a code to add all the numbers in the array

var arr=[1,2,3,4,5,6,7,8,9,10,11];
var sum=0;
for(var i=0; i<arr.length; i++)
{
    sum=sum+arr[i];
}
console.log(sum);
o/p=>66

6.Write a code to add the even numbers only
var arr=[1,2,3,4,5,6,7,8,9,10,11];
var evensum=0;
for(var i=0; i<arr.length; i++)
{
    if(arr[i]%2==0)
    {
        evensum=evensum+arr[i];
    }
}
console.log(evensum);
o/p=>30

7.Write a code to add the even numbers and subract the odd numbers
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum=100;

for(var i=0; i<arr.length; i++)
{
    if(arr[i]%2==0)
    {
        sum=sum+arr[i];
    }
    else
    {
        sum=sum-arr[i];
    }
}
console.log(sum);
o/p=>94

8.Write a code to print inner arrays
var arr=[[1,2,3,4,5],[6,7,8,9,10,11]];
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
o/p=>[1,2,3,4,5]
     [6,7,8,9,10,11]

9.Write a code to print elements in the inner arrays
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);
1234567891011

10.Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);

11.Write a code to print elements in the inner arrays in reverse
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >0; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1 ; j >0;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);

12.Write a code to add elements in the inner arrays based on odd or even values
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);



QUESTION 4

1.Fix the code to get the largest of three.
aa = (f,s,t) => {
    //let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

2.Fix the code to Sum of the digits present in the number
var a=123
var v=String(a).split("")
var sum=0;
for(var i=0; i<v.length; i++)
    {
        sum=sum+Number(v[i])
    }
console.log(sum)

3.Fix the code to Sum of all numbers using IIFE function
var arr = [9,8,5,6,4,3,2,1];
(function a()
{
    var arr = [9,8,5,6,4,3,2,1];
    var sum=0;
    for(var i=0; i<arr.length; i++)
    {
        sum=sum+arr[i];
    }
    return sum
})
console.log(a())

4.Fix the code to gen Title caps.

function a() {
var str = [“guvi”, “geek”, “zen”, “fullstack”];
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(a());

5.Fix the code to return the Prime numbers
var arr=[1,3,2,5,10];
for(var i=2; i<arr.length; i++)
{
    var flag=0;
    for(var j=2; j<i; j++)
    {
        if(i%j==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
        console.log(i)
    }
}

6.Fix the code to sum the number in that array
var num = [10, 20, 30, 40,50,60,70,80,90,100] 
var sum=0;
for(var i=0; i<num.length; i++)
{
    sum=sum+num[i]
}
console.log(sum);

7.Fix the code to rotate an array by k times and return rotated array using IIFE function
IIFE :
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var N = Array.length;
var K = 3;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);

8.Fix the code to gen Title caps.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
function a() {
    var str = [“guvi”, “geek”, “zen”, “fullstack”];
       str = str.toLowerCase().split(' ');
       for (var i = 0; i < str.length; i++) {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
       } 
       return str.join(' ');
    }
    console.log(a());

9.print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function a()
{
    var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
    var odd=[];
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]%2!==0)
        {
            odd.push(arr[i])
        }
    } 
    return odd
})
console.log(a());

10.Fix the code to reverse.
var a="abcd".split("");
for(var i=a.length-1; i>=0; i--)
{
  console.log(a[i]);
}

11.Fix the code to remove duplicates.
var arr = [“guvi”,”geek”,”guvi”,”duplicate”,”geeK”]

    function removeDuplicates(arr) {
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      
    console.log(removeDuplicates(arr));

12.Fix the code to give the below output:
Expected Output:

[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

13.Fix the code to give the below output:Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1]
var sum=0;
for(var i=0; i<as.length; i++)
{
    if(as[i]%2!==0)
    {
        sum=sum+as[i];
    }
}
console.log(sum)

14.Swap the odd and even digits
aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l=’’;
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa(“1234”);