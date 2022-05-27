// TODO: Buatlah data dari kedua user di sini

// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    isHavePet : true
};

firstUser.favoriteColor = new Set(["Yellow", "Pink", "White", "Purple"]);

firstUser.education = new Object();
firstUser.education.SD = new Map();
firstUser.education.SD.set("name", "SD 01");
firstUser.education.SD.set("city", "Jakarta");
firstUser.education.SD.set("graduate", 2016);

firstUser.education.SMP = new Map();
firstUser.education.SMP.set("name", "SMP 02");
firstUser.education.SMP.set("city", "Jakarta");
firstUser.education.SMP.set("graduate", 2019);

firstUser.education.SMA = new Map();
firstUser.education.SMA.set("name", "SMA 03");
firstUser.education.SMA.set("city", "Tangerang");
firstUser.education.SMA.set("graduate", "not yet");

firstUser.favoriteRestaurant = new Set();
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tempura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Sushi");


const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    isHavePet: false
};

secondUser.favoriteColor = new Set(["Blue", "Black", "Grey"]);

secondUser.education = new Object();
secondUser.education.SD = new Map();
secondUser.education.SD.set("name", "SD 02");
secondUser.education.SD.set("city", "Jakarta");
secondUser.education.SD.set("graduate", 2010);

secondUser.education.SMP = new Map();
secondUser.education.SMP.set("name", "SMP 03");
secondUser.education.SMP.set("city", "Bogor");
secondUser.education.SMP.set("graduate", 2013);

secondUser.education.SMA = new Map();
secondUser.education.SMA.set("name", "SMA 01");
secondUser.education.SMA.set("city", "Surabaya");
secondUser.education.SMA.set("graduate", 2016);

secondUser.education.Universitas = new Map()
secondUser.education.Universitas.set("name", "Universitas Maju")
secondUser.education.Universitas.set("city", "Tangerang")
secondUser.education.Universitas.set("graduate","not yet")


secondUser.favoriteRestaurant = new Set()
secondUser.favoriteRestaurant.add("Tempura")
secondUser.favoriteRestaurant.add("Bento")
secondUser.favoriteRestaurant.add("Sushi")
secondUser.favoriteRestaurant.add("Pancake")
secondUser.favoriteRestaurant.add("Padang")
secondUser.favoriteRestaurant.add("Katsu")
secondUser.favoriteRestaurant.add("Geprek")
secondUser.favoriteRestaurant.add("Pancake")
secondUser.favoriteRestaurant.add("Eggy")



// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};