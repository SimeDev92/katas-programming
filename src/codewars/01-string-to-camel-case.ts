

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


export const toCamelCase = (phrase:string):string =>{

    let chars = phrase.split('');
    let output:string = '';
    let capitalizeNext:boolean = false;


    for( let i = 0; i< chars.length ; i++){

        const char = chars[i]
        
        if(char === '-' || char === '_' ){
            capitalizeNext = true;
            continue;         
            
        }

        if ( capitalizeNext ){
            output += char.toUpperCase();
            capitalizeNext = false; 
        } else {
            output += char; 
        }
    }

    console.log(output);

    return output;

}  

console.log(toCamelCase('the-stealth-warrior'));
