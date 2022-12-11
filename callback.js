const formatName = (name) => name.toUpperCase();

const getName = (name, callFormatName) => console.log(callFormatName(name));

getName("Haykal Saputra Joban", formatName);