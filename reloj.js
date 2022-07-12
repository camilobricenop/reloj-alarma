const d = document;

export function digitalClock(clock, btnPlay, btnStop) { //se define la funcion con los 3 parametros del reloj 

    let clockTempo;

    d.addEventListener("click", e => {

    
    if(e.target.matches(btnPlay)){

       clockTempo = setInterval(() => {                     // se crea el intervalo de tiempo para que se repita
            let clockHour = new Date().toLocaleTimeString(); // se crea la variable que genera la hora
            d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>` ;  //se agrega la hora en la variable #clocl
        }, 1000);


        e.target.disabled = true; // este desactiva el boton de activar reloj 
    }
        
    if(e.target.matches(btnStop)){

        clearInterval(clockTempo);
        d.querySelector(clock).innerHTML = null;
        d.querySelector(btnPlay).disabled = false; //activa de nuevo el boton de iniciar reloj
    }

    });
};

export function alarm(play,stop){

    var holaAlarma = new Audio('./alarma.mp3');

    d.addEventListener("click", e =>{
        
        if(e.target.matches(play)) {
           
           holaAlarma.play();

           d.querySelector(play).disabled = true;
        }
    });

    d.addEventListener("click", e =>{

        if(e.target.matches(stop)){

            holaAlarma.pause();
            holaAlarma.currentTime = 0;

            d.querySelector(play).disabled = false;
        }

    })



}