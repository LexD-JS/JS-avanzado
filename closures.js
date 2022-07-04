/*--Los CLOSURES son funciones 'privadas' que se crean dentro de un ámbito léxico, pero
¿qué quiere decir esto?...
Esto se entiende como una funcion el cual su scope es la misma función donde esta almacenada.
Tomemos el ejemplo de la función 'printColor', esta función por si misma ya es una clausura (closure), ya que puede
hacer uso de las variables que se encuentren en el scope local de la función donde se encuentran declaradas--*/


/*---IIFE---*/
/*---Funcion de expresion de invocacion inmediata-*/

(function(){
    let color='black';

    function printColor(){
        console.log(color);
    }

    printColor();
})();

/*Funciones que regrean funciones*/


function makeColor(color){
    let colorMessage=`the color is ${color}`;

    return function(){
        console.log(colorMessage);
    }
}

let greenColor = makeColor('green');

console.log(greenColor());/*--Aquí debemos hacer el llamado a nuestra variable 'greenColor' como si ejecutaramos
la fjunción... esto por que ahora 'greenColor' se ha convertido en un closure; De otro modo nos regresará un objeto*/


/*--Variables Privadas--*/

function makeCounter(n) {
    let count = n;

    return{
        increase:function(){
            count+=1;
        },
        decrease:function(){
            count-=1;
        },
        getCount:function(){
            return count;
        },
    }
}

let counter = makeCounter(10);

console.log('the current value is: ', counter.getCount());
counter.increase()
counter.decrease()
counter.decrease()
console.log('the current value is: ', counter.getCount());