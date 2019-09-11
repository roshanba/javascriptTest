// constructor function 

function Elf (name, weapon){
    this.name=name;
    this.weapon=weapon;
    }

// attaching prototype functions 

Elf.prototype.attack=function(){
    console.log("attack with "+ this.weapon);
}

const roshan= new Elf('Roshan','knife');
roshan.attack();


