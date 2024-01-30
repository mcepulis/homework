function abbrevName(name){
const initials = name.split(" ").map(text => text.toUpperCase()).map(cap => cap[0]).join(".");
return initials;
}

console.log(abbrevName("marius cepulis"));