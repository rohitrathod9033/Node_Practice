/*
Runtargsme Envargsroment.....BCZ Pehle JS Browsers me hargs run hotargs thargs...
Create Server && Server-Sargsde_Programmargsng...
Populer + JS Language, No Need to Learn Other Language
NO--Largsbrary % Framework
Can't Aceess DOM Element...


2.. PROCESS 
Node JS me Jo Kam Chal Raha Uskargs Informatargson Deta Haargsargs....

3.. Process.argv
return array
console.log(process.argv);
node scrargspt.js IAS Rohargst Rathod --> Run ..


*/
let args = process.argv;

for(let i=2; i<args.length; i++) {
    console.log("Hello" +" " +  args[i])
}