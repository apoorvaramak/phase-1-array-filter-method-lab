// Code your solution here
function findMatching(arr, name){
    return arr.filter(function(str){ return(str.toUpperCase() === name.toUpperCase()); } ); 
}
function fuzzyMatch(arr, name){
    return arr.filter(function(str){
        return (str.slice(0, name.length) === name);
    });
}

function matchName(arr, string){
    return arr.filter(function(array){
        return (array.name === string); 
    })
}