export class ElectronicProduct {

    constructor(brand, price){
        this.brand = brand 
        this.price = price
    }

}

export class CellPhone extends ElectronicProduct {

    constructor(brand, price, model, batteryLife){

        super(brand, price)
        this.model = model
        this.batteryLife = batteryLife
        this.callCounter= 0

    }

    makeCall(){
        this.callCounter = this.callCounter +1
    }


}


export class VideoGameConsole extends ElectronicProduct {

    constructor(brand, price, generation){

        super(brand, price)
        this.generation = generation 
        this.controllersConected = 0 
        this.gamesPlayed = 0

    }

    connectControll(){
        this.controllersConected = this.controllersConected+ 1
    }

    playGame(){
        this.gamesPlayed = this.gamesPlayed +1
    }

}

export class TV extends ElectronicProduct{

    constructor(brand, price, screenSize, resolution){

        super(brand, price)
        this.screenSize = screenSize
        this.resolution = resolution 
        this.channelWatched = 0
    }

    watchChannel(){
        this.channelWatched = this.channelWatched+1
    }
}