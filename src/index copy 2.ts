
// class SmartPhone {
//     color : string
//     brand : string
//     model : string
//     isTKDN : boolean

//     constructor(color:string, brand:string, model:string) {
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//         this.isTKDN = true
//     }

//     charging(): void {
//         console.log(`SmartPhone ${this.model} lagi di cas`)
//     }
// }

// const nokia = new SmartPhone ('merah','nokia','E63');
// console.log('nokia',nokia)

// sub class
// sub class akan menurunkan sifat dan perilaku dari class

// class Android extends SmartPhone {
    
//     splitScreen(){
//         console.log('split screen berhasil')
//     }
// }

// const xiaomi = new Android ('red','xiaomi','12')
// console.log('xiaomi',xiaomi)
// xiaomi.charging()
// xiaomi.splitScreen()

// class Ios extends SmartPhone {

//     airDrop(){
//         console.log('air drop berhasil')
//     }
// }

// polymorphism
// merupakan suatu keadaaan dimana sub class ingin mengubah sifat atau perilaku dari class

// class Android extends SmartPhone {
//     layar: number;
    

//     constructor(color:string, brand:string, model:string, layar:number){
//         super(color, brand, model);
//         this.layar = layar;
//     }

//     splitScreen(){
//         console.log('split screen berhasil')
//     }

//     showbrand(){
//         console.log(`brand handphone ini adalah ${this.brand} dan ukuran ${this.layar}`);
//     }

//     charging(): void {
//         super.charging();
//         console.log(`SmartPhone ${this.model} lagi di cas dengan fast charging`);
//     }

// }

// const xiaomi = new Android ("blue", "xiaomi", "12",6)
// console.log('xiaomi',xiaomi)
// xiaomi.charging()
// xiaomi.splitScreen()


