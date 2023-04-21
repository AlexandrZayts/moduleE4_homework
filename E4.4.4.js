function Аppliances(name, price){
    this.socket = '220v',
    this.name = name,
    this.price = price
  }

  Аppliances.prototype.getPower = function (voltage, current){
    let power = voltage * current
    console.log(`Power is ${power} W`)
  }

function KitchenАppliances (name){
    this.name = name,
    this.place = "kitchen"
}

KitchenАppliances.prototype = new Аppliances()

function RoomАppliances (name){
    this.name = name,
    this.place = "Room"
}

RoomАppliances.prototype = new Аppliances()


const kettle = new KitchenАppliances ('kettle', 3500 )

const computer = new RoomАppliances ('computer', 79999 )

kettle.getPower(300, 7)
computer.getPower(20, 6.75)