// TODO: Buatlah data dari kedua user di sini
const favColorMonica = ["Yellow", "Pink", "White", "Purple"];
const favColorWendy = ["Blue", "Black", "Grey"];

const eduMonica = [
    {
        name: "SD 01",
        city: "Jakarta",
        graduate:2016
    },
    {
        name: "SMP 02",
        city: "Jakarta",
        graduate:2019
    },
    {
        name: "SMA 03",
    city: "Tangerang",
    }
]

// Wendy
const eduWendy = [
    {
        name: "SD 02",
        city: "Jakarta",
        graduate:2010
    },
    {
        name: "SMP 03",
        city: "Bogor",
        graduate:2013
    },
    {
        name: "SMA 01",
        city: "Surabaya",
        graduate:2016
    },
    {
        name: "Universitas Maju",
        city: "Tangerang"
    }
] 

const favRestaurantMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"]
const favRestaurantWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Eggy"]


// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : favColorMonica,
    isHavePet : true,
    education : eduMonica,
    favoriteRestaurant : favRestaurantMonica
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: favColorWendy,
    isHavePet: false,
    education: eduWendy,
    favoriteRestaurant: favRestaurantWendy
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