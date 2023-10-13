// map method 
// 1.covert celsius into fahrenheit
var cel=[35,67,40,35];
var far=cel.map(function(value){
	var far=(value*9/5) +32;
	return (far);
})
console.log(far);

// 2.capitalize the first letter of each word in an array of strings
var small=["giraffee","lion","tiger"];
var cap=small.map(function(item){
	return item[0].toUpperCase()+item.slice(1);
})
console.log(cap);

//3.Given an array of strings, create a new array that contains the lengths of each string.

var str=["siva","vijay","syed"];

var len=str.map(function(item){
	return(item.length);
})
console.log(len);

// filter method
// 1.filter an array of Numbers to find prime number

let arr=[1,3,5,7,8]
let pr=arr.filter(function(item){
	if(item<=1){
		return false;
	}
	for(let i=2;i<item;i++){
		if(item%i==0){
			return false;
		}
	}
	return true;
})
console.log(pr);
// 2.Given an array of objects representing books, filter the books published after the year 2000.


let obj=[
	{
		name:"book-1",
		author:"author-1",
		year:"1998",
	},
	{
		name:"book-2",
		author:"author-2",
		year:"2001",
	},
	{
		name:"book-3",
		author:"author-3",
		year:"2002",
	},
	{
		name:"book-3",
		author:"author-3",
		year:"2002",
	},
]

let fil=obj.filter(function(item){
	if(item.year>2000){
		return true;
	}
})
console.log(fil);


// 3.Filter an array of strings to find palindromes.

function palindrome(item){
	var pal=item.split("").reverse().join("")
	if(item==pal){
		return true;
	}	
}
let pln=["mom","dad","madam","siva"];
console.log(pln.filter(palindrome));

// Reduce Method
// 1.Given an array of words, find the longest word.



// 2.Calculate the average of a list of test scores.

var num=[1,2,3,4,5];
var sum=num.reduce(function(accumulator,currentvalue)
	{
		return accumulator+currentvalue;
	});
	var avg=sum/num.length;
	console.log("Average:"+avg);
	
	
// 3.Find the maximum value in an array of numbers.
 
	
	
	
	
	
// find method
// 1.Given an array of objects representing books, find the book with the highest rating.
	var book=[
		{
			name:"book-1",
			author:"author-1",
			year:"1998",
			rating:"3.6",
		},
		{
			name:"book-2",
			author:"author-2",
			year:"2001",
			rating:"3.9",
		},
		{
			name:"book-3",
			author:"author-3",
			year:"2002",
			rating:"4.0",
		},
		{
			name:"book-3",
			author:"author-3",
			year:"2002",
			rating:"4.2",
		},
	]
	let rate=book.find((element)=> element.rating > "4.0");
	console.log(rate);
	
// 2.Find the first occurrence of a word containing 'apple' in an array of strings.
	
	var frtname=["mango","apple","banana","apple eat"];
	function app(item){
		return item.includes("apple"); 
	}
	console.log(frtname.find(app));
	
	
	
// 3.Find the first student with a GPA above 3.5 in an array of student objects.
	var student=[
		{
			name:"student-1",
			GPA:"3.2",
		},
		{
			name:"student-2",
			GPA:"3.5",
		},
		{
			name:"student-3",
			GPA:"3.7",
		},
		{
			name:"student-4",
			GPA:"4.0",
		},
	]
	let cgpa=student.find((element)=> element.GPA > "3.5");
	console.log(cgpa);
	
	
// Includes,some&every method
// 1.Check if all users in an array are adults (age 18 or older) using every().
	
	const ages = [15,18,20,22];
	
	function checkAge(age) {
		return age > 18;
	}
	console.log(ages.every(checkAge));
	
// 2.Determine if any strings in an array contain more than 10 characters using some().
	
	var strs=["siva","sivakumar","syedzakirhussain"];
	
	function checkarray(strs){
		return ((element)=>element > 10);
	}
	console.log(strs.some(checkarray));
	
// 3.Determine if an array of books includes a book with the title "Harry Potter" using the includes().
	
	var booktitle=["Harry Potter","viram","master"];
	console.log(booktitle.includes("Harry Potter"));	