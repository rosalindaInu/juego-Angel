class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3"); 
        this.input = createInput(); 
        this.button = createButton("Jugar");
        this.bienvenida = createElement("h1");
        this.reset = createButton('Reset');

    }
    hide(){
        this.nombre.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
    display(){
        this.title.html("Austronautas VS Aliens")
        this.title.position(800,100)
        this.nombre.html("Ingresa tu Nombre")
        this.nombre.position(800,150)
        this.input.position(800,200)
        this.button.position(800,250)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.nombre.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.bienvenida.html("Bienvenido al Juego "+ player.name)
            this.bienvenida.position(800,100)
        });
    }

    
}