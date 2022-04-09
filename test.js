class VirtualPet {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }
    eat() {
       console.log("nom nom");
    }
}
let pet = new VirtualPet("Koji", "all");
console.log(pet);