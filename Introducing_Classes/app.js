class Laptop {
    constructor(brand, processor, ram, storage) {
        this.brand = brand;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
    }

    laptopStats() {
        return `This ${this.brand} laptop has a ${this.processor} processor, ${this.ram}GB of RAM, and ${this.storage}GB of storage.`;
    }

    static totalRam(lap1, lap2) {
        return lap1.ram + lap2.ram;
    }
}

// Create instances of the Laptop class
const dell = new Laptop("Dell", "Intel i7", 16, 512);
const macbook = new Laptop("Apple MacBook Pro", "M2", 32, 1024);
const hp = new Laptop("HP Pavilion", "Ryzen 5", 8, 256);
const lenovo = new Laptop("Lenovo ThinkPad", "Intel i5", 16, 512);

// Display results on the page
document.getElementById("lap1").innerHTML = dell.laptopStats();
document.getElementById("lap2").innerHTML = macbook.laptopStats();
document.getElementById("lap3").innerHTML = hp.laptopStats();
document.getElementById("lap4").innerHTML = lenovo.laptopStats();

// Example of static method
console.log("Total RAM of Dell and MacBook:", Laptop.totalRam(dell, macbook), "GB");
