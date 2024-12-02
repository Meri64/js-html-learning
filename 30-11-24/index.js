import{STR1,STR2} from './constStr.js';
let commonCount = 0; 
let checkedChars = '';
for (let i =0; i<STR1.length; i++){
    if(STR2.includes(STR1[i]) && !checkedChars.includes(STR1[i])){
        checkedChars += STR1[i];
        commonCount ++;
    }
}
console.log(commonCount);
console.log(`${checkedChars}`)
