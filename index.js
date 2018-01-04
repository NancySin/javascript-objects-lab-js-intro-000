var recipes = {
  oatmeal: "1cup",
  raisins: "1/2 cup"
  sugar: "1gram"
}



function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, Object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj= Object.assign({}, object)
  delete newObj =[key]
  return newObj]
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
