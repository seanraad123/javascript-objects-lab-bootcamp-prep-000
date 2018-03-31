function p(value){
  console.log(value);
}
 
var recipes = { EggSandwhich: "2 eggs"}

/*
function updateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
    return object
}
*/

function updateObjectWithKeyAndValue(object, key, value){
    Object.assign({}, object, { [key]: value })
    return object
}

p(updateObjectWithKeyAndValue(recipes, "Burrito", "1 Tortilla"))
