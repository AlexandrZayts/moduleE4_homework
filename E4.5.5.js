class Аppliances{
    constructor(name, price) {
        this.socket = '220v',
        this.name = name,
        this.price = price
    }
}

Аppliances.prototype.getPower = function (voltage, current){
    let power = voltage * current
    console.log(`Power is ${power} W`)
  }

class KitchenАppliances extends Аppliances {
    constructor(place, nameGadget, price){
        super(price);
        this.place = "kitchen";
        this.name = place ? nameGadget : name;
    }	
}

class RoomАppliances extends Аppliances {
    constructor(place, nameGadget, price){
        super(price);
        this.place = "room";
        this.name = place ? nameGadget : name;
    }	
}

let kettle = new KitchenАppliances ('kettle', 3500 )

let computer = new RoomАppliances ('computer', 79999 )

kettle.getPower(300, 7)
computer.getPower(20, 6.75)