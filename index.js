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


function updateObjectWithKeyAndValue(obj, key, value) {
 
  return Object.assign({}, obj, { [key]: value })
}
  // it's important that we merge everything into
  // a new object such as the empty {}. 
    // Otherwise, the object obj will be modified. 
    // Test what happens if this line was written as:
    // return Object.assign(obj, { [key]: value })
 
const recipe = { eggs: 3 }
 
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')