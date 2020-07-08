class Player{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(this.name + " " + this.energy);
        //display the energy on the info division
        document.getElementById(this.id).innerHTML=`
        <p> Energy: ${this.energy} <p>
        `;
    }

    attack=function(opponent) {
        document.getElementById("console").innerHTML=`
        <p> ${this.name} is attacking <p>
        `;

        let newEnergy=opponent.energy-20;
        opponent.energy=newEnergy;
        opponent.display();

        //if condition displays Game Over on the our console
        if (opponent.energy<=0) {
            document.getElementById("console").innerHTML=`
            <p> G A M E     O V E R <p>
            `;
        document.getElementById(opponent.id).style.display="none";        }
    }
}

const plant = new Player("Player1","Plant",100);
const zombie = new Player("Player2","Zombie",120);

plant.display();
zombie.display();