// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//a不是数组类型，b是数组类型


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for(let i=0;i<a.length;i++){
    a[i]=a[i]*2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//case 1 output: 'Red Green White Black'
var str1="";
for(let i=0;i<colors.length;i++){
    str1+=colors[i];
    if(i!=colors.length-1)
        str1+=" "
}
console.log(str1);
// case 2 output: 'Red+Green+White+Black'
var str2="";
for(let i=0;i<colors.length;i++){
    str2+=colors[i];
    if(i!=colors.length-1)
        str2+="+"
}
console.log(str2);
// case 3 output: 'Red,Green,White,Black'
var str3="";
for(let i=0;i<colors.length;i++){
    str3+=colors[i];
    if(i!=colors.length-1)
        str3+=","
}
console.log(str3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
let temp=0;
for(let i=0;i<colors.length;i++)
    for(let j=0;j<colors.length-i;j++)
        if(a[j+1]>a[j]){
            temp=a[j+1];
            a[j+1]=a[j];
            a[j]=temp;
        }
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let array=new Map();
let tem=0;
let result=0;
for(let i=0;i<a.length;i++){
    if(array.get(a[i])!=undefined||array.get(a[i])!=null){
        array.set(a[i],array.get(a[i])+1);
    }
    else{
        array.set(a[i],1);
    }
}
array.forEach(function(value, key, map){
    if(value>tem){
        tem=value;
        result=key;
    }
})
console.log(result);