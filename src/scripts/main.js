let JumpStopRecords = [];
let ChattenRecords = [];
let PolarRecords = [];


const createFunkArtist = (name, age) =>{
    return {
        name: name,
        genre: Funk,
        age: age
    };
}

const createRapArtist = (name, age)=>{
    return {
        name: name,
        genre: Rap,
        age: age
    };
}

const createCountryArtist = (name, age)=>{
    return {
        name: name,
        genre: Country,
        age: age
    };
}

const createBluegrassArtist = (name, age)=>{
    return {
        name: name,
        genre: Bluegrass,
        age: age
    };
}

const createPopArtist = (name, age)=>{
    return {
        name: name,
        genre: Pop,
        age: age
    };
}
ChattenRecords.push(createCountryArtist("Bruce Atikins", 23))
PolarRecords.push(createPopArtist("Jensen Brown", 20))
JumpStopRecords.push(createFunkArtist("Dre Funkz", 25))
JumpStopRecords.push(createRapArtist("Dusta Grimes", 21))

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old