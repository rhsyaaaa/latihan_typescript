// let siswa : {
//     nama : string;
//     umur : number;
//     isPelajar : boolean;
//     alamat? : string
// }

// siswa = {
//     nama : "Rahsya Aditiya",
//     umur : 16,
//     isPelajar : false,
//     alamat : "indonesia"
// };

// siswa = {
//     nama : "Ridho",
//     umur : 20,
//     isPelajar : true
// }

// // interface untuk mendefinisikan type data object

// interface produk {
//     id : number
//     name : string
//     price : number
//     note? : string
//     isPremium : boolean
// }

// const produk1 : produk = {
//     id : 1,
//     name : "baju",
//     price : 10000,
//     isPremium : false
// }

// const produk2 : produk = {
//     id : 1,
//     name : "celana",
//     price : 20000,
//     isPremium : false,
//     note : "bagus"
// }

// // nested object 

// interface ProdukDetail {
//     manufacture : string,
//     year : number
// }

// interface ProdukItem{
//     id : number
//     produkName : string
//     price : number
//     detail : ProdukDetail
// }

// const produk3 : ProdukItem = {
//     id : 1,
//     produkName : "baju",
//     price : 10000,
//     detail : {
//         manufacture : "katun",
//         year : 2020
//     }
// }

// console.log('bahan', produk3.detail.manufacture )

// // array
// const a = [1,2,3,4,5]

// // square brecket

// let b : number[]
// b = [1,2,3,4,5]

// let c : string[]
// c = ["akbar","banyu","dani"]

// let d : (string | number | boolean)[]
// d = ["akbar",1,true]

// let e: {nama: string; umur: number}[] = [
    
// ];

// let dataDiri = [{
//     nama : "fulan",
//     alamat :"jonggol",
//     umur : 27,

//     status : [{
//         isSekolah:false
//     }],
// }]

// interface status {
//     isSekolah: boolean
// }[];

// interface dataDiri {
//     nama : string,
//     alamat : string,
//     number : number,
//     status : status;
// }[];

// function penjumlahan (a:number, b:number, c = 0  ) {
//     const hasil = a + b + c;
//     return hasil;
// }

// const hasil1 = penjumlahan(12,6,4);
// const hasil2 = penjumlahan(12,6);

// console.log(hasil1, hasil2)


// function pembagian({a, b, c =1}: {a:number; b:number; c?:number}) {
//     const kali = a / b * c;
//     return kali;
// }

// const kali1 = pembagian({a:12, b:6, c:4});

// const kali2 = pembagian({a:12, b:6});

// console.log("kali1", kali1);
// console.log("kali2", kali2);


// //function tidak memiliki return 

// function satu({a, b }: SatuInterface): void {
//     console.log(a, b);    
// }

// function dua({a, b }: SatuInterface): number {
//     return 100;
// }    

// function tiga({a, b }: SatuInterface): boolean {
//     return false;  
// }

// interface SatuInterface {
//     a : number,
//     b : string
// }

// interface responseAPI {
//     status : string,
//     message : string
// }


// function empat({a , b}:SatuInterface):responseAPI {
//     return{
//         status : "success",
//         message : "ok"
//     };
// }

// function lima():responseAPI {
//     return{
//         status : "success",
//         message : "ok"
//     }
// }

// empat ({a:1, b:"2"});

// // latihan

// function cekBilanganDalamArray(array: number[], bilangan: number): boolean {
//     return array.includes(bilangan);
// }

// const angkaArray: number[] = [1, 2, 3, 4, 5];
// const bilangan: number = 3;

// const hasil: boolean = cekBilanganDalamArray(angkaArray, bilangan);
// console.log(hasil); //true

// const bilanganLain: number = 6;
// const hasilLain: boolean = cekBilanganDalamArray(angkaArray, bilanganLain);
// console.log(hasilLain); //false


//class pada typescript

// class user {
//     id : number
//     firstName : string
//     lastName : string
//     constructor(id: number, firstName: string, lastName: string) {
//         this.id = id,
//         this.firstName = firstName,
//         this.lastName = lastName
//     }

//     login() : boolean{
//         if (this.id === 1) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     relogin() : boolean {
//         return this.login()
//     }
// }

// const ihsan = new user (2, "ihsan", "san");
// const hardi = new user (1,"hardi", "di");

// console.log(hardi.login())
// console.log(ihsan.login())

// console.log("ihsan",ihsan);
// console.log("hardi",hardi);


// class Profil {
//     user: {
//         username: string;
//         password: string;
//     }[];

//     constructor() {
//         this.user = [
//             {
//                 username: "ihsan",
//                 password: "12345678"
//             },
//             {
//                 username: "rizki",
//                 password: "1234567890"
//             },
//             {
//                 username: "abqory",
//                 password: "87654321"
//             },
//             {
//                 username: "nayaka",
//                 password: "0987654321"
//             }
//         ];
//     }

//     login(username: string, password: string): { status: string, message: string } {
//         const LoginUser = this.user.find(user => user.username === username && user.password === password);
//         if (LoginUser) {
//             return {
//                 status: "berhasil",
//                 message: "Berhasil login"
//             };
//         } else {
//             return {
//                 status: "gagal",
//                 message: "Password atau username berbeda"
//             };
//         }
//     }
// }

// const profil = new Profil();

// console.log(profil.login("ihsan", "12345678")); 
// console.log(profil.login("rizki","salah pw"));
// console.log(profil.login("nayaka", "0987654321"));
// console.log(profil.login("abqory", "salah pw"));

// sub class

//sub class merupakan turunan dari class baik dari property atau metode







