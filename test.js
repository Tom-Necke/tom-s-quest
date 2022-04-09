class Game {
    constructor(name, level) {
        this.name = name
        this.level = level
    }
}

var character1 = new Game("Koji", 11);
let character2 = new Game("Riki", 23);



console.log(character1);
console.log(character2);





class Assets {
    constructor(style, tree) {
        this.style = style;
        this.tree = tree;
    }
}

let assets1 = new Assets("right", "tree1");
let assets2 = new Assets("example", 40);

console.log(assets1);
console.log(assets2);