function p(value){
  console.log(value);
}
 
var recipes = { EggSandwhich: "2 eggs"}
 
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return recipes
}


p(updateObjectWithKeyAndValue(recipes, "Burrito", "1 tortilla"))