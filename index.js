function p(value){
  console.log(value);
}
 
var recipes = { EggSandwhich: "2 eggs"}


function updateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
    return object
}


function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, { [key]: value })
    
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key){
  delete object.key
  return object
  
}

function deleteFromObjectByKey(object, key){
  Object.assign(object, { [key]: value })
  delete object.key
  p(object)
  p(recipes)
}

deleteFromObjectByKey(recipes, "EggSandwhich")

