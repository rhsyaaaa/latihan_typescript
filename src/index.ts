// no 1 

function minimal(a:number, b:number): number  {
    return a < b? a : b;
}

console.log(minimal(2,5)); //2
console.log(minimal(4,9)); //4

// no 2 

function power(a: number, b: number): number {
    return Math.pow(a, b);
}

console.log(power(6,4)); //1296
console.log(power(5,3)); //125
console.log(power(20,0.5)); //4.47213595499958

// no 3

function penjumlahanBilangan(a: number[], b: string): number | string {
    if (b !== "ganjil" && b !== "genap") {
        return "error";
    }

    const isGanjil = (num: number) => num % 2 !== 0;
    const isGenap = (num: number) => num % 2 === 0;

    const result = a.reduce((sum, num) => {
        if (b === "ganjil" && isGanjil(num)) {
            return sum + num;
        } else if (b === "genap" && isGenap(num)) {
            return sum + num;
        }
        return sum;
    }, 0);

    return result;
}

console.log(penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil")); //9
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap")); //12
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7, 8, 9], "ganjil")); //25 
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "ganj")); //error
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "positif")); //error

// no 4

class Animal {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

const lion = new Animal("Lion", 5, true);
console.log(lion); //Animal { name: 'Lion', age: 5, isMammal: true }

// no 5 

class Rabbit extends Animal {
    eat(): string {
        return `${this.name} yang berumur ${this.age} tahun sedang makan!`;
    }
}

const rabbit = new Rabbit("Rabbit", 2, true);
console.log(rabbit); //Rabbit { name: 'Rabbit', age: 2, isMammal: true }

// no 6

class Eagle extends Animal {
    speed: number;

    constructor(name: string, age: number) {
        super(name, age, false); 
        this.speed = 220;
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string {
        return `${this.name} berlari dengan kecepatan ${speed} km/jam`;
    }
}

// Contoh penggunaan:
const eagle = new Eagle("Eagle", 5);
console.log(eagle.fly()); //Eagle yang berumur 5 sedang terbang!
console.log(eagle); //Eagle { name: 'Eagle', age: 5, isMammal: false, speed: 220 }

// no 7

class EagleRun extends Eagle {
    constructor(name: string, age: number) {
        super(name, age);
    }

    runEagle(speed: number): string {
        return this.run(speed);
    }
}

// Contoh penggunaan:
const eagleRun = new EagleRun("Eagle", 5);
console.log(eagleRun.fly()); //Eagle yang berumur 5 sedang terbang!
console.log(eagleRun.runEagle(100)); //Eagle berlari dengan kecepatan 100 km/jam

// no 8

class MyRabbit extends Animal {
    constructor(name: string, age: number) {
        super(name, age, true);
    }

    eat(): string {
        return `${this.name} yang berumur ${this.age} tahun sedang makan!`;
    }
}

const myRabbit = new MyRabbit("Labi", 2);
console.log(myRabbit.eat()); //Labi yang berumur 2 sedang makan!

// no 9

class MyEagle extends Eagle {
    constructor(name: string, age: number) {
        super(name,age);
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }
}

const myEagle = new MyEagle("Elo",4);
console.log(myEagle.fly()); //Elo yang berumur 4 sedang terbang!
// console.log(myEagle.run()) //Error karena method run memiliki access modifier protected 

// no 10


class speedTes extends Eagle {
    constructor(name: string, age: number) {
        super(name, age);
    }

    runEagle(): string {
        return this.run(this.speed);
    }
}

// Membuat instance dari kelas EagleRun
const speedtes = new EagleRun("Kuku", 5); // age diisi dengan nilai default 5 untuk contoh ini
console.log ()