// TODO: Buatlah data dari kedua user di sini
const favColorMonica = ["Yellow", "Pink", "White", "Purple"];
const favColorWendy = ["Blue", "Black", "Grey"];

const eduMonica1 = {
    name: "SD 01",
    city: "Jakarta",
    graduate:2016
}
const eduMonica2 = {
    name: "SMP 02",
    city: "Jakarta",
    graduate:2019
}
const eduMonica3 = {
    name: "SMA 03",
    city: "Tangerang",
}

// Wendy
const eduWendy1 = {
    name: "SD 02",
    city: "Jakarta",
    graduate:2010
}
const eduWendy2 = {
    name: "SMP 03",
    city: "Bogor",
    graduate:2013
}
const eduWendy3 = {
    name: "SMA 01",
    city: "Surabaya",
    graduate:2016
}
const eduWendy4 = {
    name: "Universitas Maju",
    city: "Tangerang"
}

const favRestaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
const favRestaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]


// Tentukan tipe data dan struktur data yang menurut kalian tepat

// education
const eduMonica = [eduMonica1,eduMonica2,eduMonica3]
const eduWendy = [eduWendy1,eduWendy2,eduWendy3,eduWendy4]

// favorite color
const favColMonica = [new Set(...favColorMonica)]
const favColWendy = [new Set(...favColorWendy)]

// favorite restaurant
const favRestMonica = [new Set(...favRestaurantMonica)]
const favRestWendy = [new Set(...favRestaurantWendy)]

// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : favColMonica,
    isHavePet : true,
    education : eduMonica,
    favoriteRestaurant : favRestMonica
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: favColWendy,
    isHavePet: false,
    education: eduWendy,
    favoriteRestaurant: favRestWendy
};


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