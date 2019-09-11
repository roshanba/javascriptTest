class Character{
    constructor(name,weapon){
        this.name=name;
        this.weapon=weapon;
    }

    attack(){
        return 'attack with'+ this.weapon;
    }
}


const roshan=new Character('Roshan','Guns');
console.log(roshan.attack());

