//en JS:
//falso es: false
//verdadero es: true

//uso de console.log()
//ejemplo:
console.log("Hola")
//escribe en la consola lo que esta dentro: Hola
//Resultado:
Hola
//mensaje de advertencia por consola
console.warn('Este es un mensaje en consola con el icono de advertencia');
//Resultado:
Este es un mensaje en consola con el icono de advertencia

//declaracion de variables:
//La palabra clave "const" se utiliza para declarar una variable 
//cuyo valor no puede ser reasignado después de su inicialización. 
//Una vez que una variable ha sido declarada con "const", su valor no puede ser cambiado posteriormente.
const nombreDeLaVariable

//la palabra clave "let" se utiliza para declarar una variable con un ámbito de bloque. 
//El uso de "let" es recomendable en situaciones en las que se necesita 
//una variable que solo esté disponible dentro de un bloque de código, como en un bucle 
//for o en una estructura condicional if. También puede ser útil para evitar la reutilización 
//accidental de una variable en diferentes partes del código.
let nombreDeLaVariable

//Las variables declaradas con "var" tienen un ámbito de función, lo que significa que solo 
//son accesibles dentro de la función en la que se declaran o en funciones anidadas
var nombreDeLaVariable



//condicionales en JS:
//ejemplo de condicional con varias condiciones

//if, se hace: if(condicion), else if es para si no cumple hacer otra
//else es para si no se cumplen las anterior hacer esta
let x = 5;
let resultado;

if (x > 3) {
  resultado = "x es mayor que 3";
} else if (x === 3) {
  resultado = "x es igual a 3";
} else {
  resultado = "x es menor que 3";
}

console.log(resultado); 

//Resultado:
x es mayor que 3


//ciclos
//ciclo for
//ejemplo: en este caso comienza con i=1, luego por el i++ va sumando
//entonces hace: i=1, i=2, i=3. Para hasta i=3 ya que 3<=3
for (let i = 1; i <= 3; i++) {
    console.log(i);
  } 
//Resultado:
1
2
3

//ciclo while
//ejemplo: sera lo mismo del anterior pero usando while
//while(condicion), hasta que se cumpla la condicion
//Llegara hasta i=3, ya que  3<=3
let i = 1;

while (i <= 3) {
  console.log(i);
  //va sumando i++ lo mismo de i=i+1
  i++;
}
//Resultado:
1
2
3

//array
//array es una lista de elementos
//ejemplo de una lista constante
const lista=[1,'yo','cesar',true]
//posicion en la lista: [0,1,2,3], en 0 esta 1, en 1 esta 'yo' y asi..
//tambien se puede escribir asi, cuando se asigna:
let lista=[]
lista=[1,'yo','cesar',true]
console.log[1]
//Resultado:
'yo'


//algunos metodos para arrays:

//agrega
[1, 2, 3].push(4)//[1, 2, 3, 4]

//elimina ultimo
[1, 2, 3].pop()//[1, 2]

//elimina el primero
[1, 2, 3].shift()//[2, 3]

//agrega un valor al inicio
[1, 2, 3].unshift(0)//[0, 1, 2, 3]

//agrega string a lo ultimo
['a','b'].concat('c')//['a','b','c']

//une los elementos dentro del array en uno solo con '-'
['a','b','c'].join('-')//a-b-c

//elimina una cierta cantidad de elementos desde el inicio
['a','b','c'].slice(1)//['b','c']

//busca en que posicion se encuentra un elemento
['a','b','c'].indexOf('b')//1

//revisa si en la lista hay un cierto elemento
['a','b','c'].includes()//true

//encontrar segun cierta condicion: n pasa a ser variable y hace lo siguiente: 
//(toma valor de cada elemento de la lista y calcula modulo de 2):
//0)  n=3,  3%2=1, 1!==0, por tanto no cumple n%2===0
//1)  n=5,  5%2=1, 1!==0, por tanto no cumple n%2===0
//2)  n=6,  6%2=0, 0===0, por tanto cumple n%2===0
//solo cumple en el paso 2) donde n=6 por lo que saldra ese valor
[3,5,6].find((n) => n%2===0)//6

//imprimer en que posicion se cumple la condicion n%2===0
[3,5,6].findIndex((n) => n%2===0)//2

//hace para cada elemento n*2 y crea otra lista con ese resultado
[3,4,8,6].map((n) => n*2)//[6,8,16,12]

//filtra que elemento cumple con la condicion n%2===0 y crea una lista
[1,4,7,8].filter((n)=>n%2===0)//[4,8]

//En este caso hay que tener en cuenta lo siguiente:
//acc: es el acumulador, que almacena el valor total de la suma de los 
//elementos en la matriz hasta el momento actual. 
//cur: es el valor actual en la iteración actual del bucle.
//HACE: 0) cur=2. acc=2, 1) cur=4. acc=2+4=6, 2) cur=3, acc=6+3=9
//EN SI LO QUE HACE ES SUMAR TODO LOS ELEMENTOS DE UN ARRAY
//2+4+3=9
[2,4,3].reduce((acc,cur)=>acc+cur)//9

//revisa si todo los elementos cumple x<6, deben cumplir todos
//para que muestre true si uno no cumple muestra false
[2,3,4,5].every((x)=>x<6)//true

//revisa todos los elementos y si alguno cumple con n>6 entonces
//muetsra true
[3,5,6,8].some((n)=>n>6)//true

//muestra todos los elementos al reves en la lista
//es decir invierte la lista primero pasa a ultimo y asi..
[1,2,3,4].reverse()//[4,3,2,1]

//devuelve el valor del elemento que se encuentra en cierta posicion
[3,5,7,8].at(0)//3
[3,5,7,8].at(1)//5
[3,5,7,8].at(-1)//8
[3,5,7,8].at(-2)//7

//devuelve la longitud del array
[3,5,7,8].length//4


//objeto en JS:
//es una lista de elementos PERO cada elemento tiene un nombre clave.
//key:valor
//ejemplo:
const obj={
    nombre: 'fulano',
    edad: 3,
};
//para acceder a valor: obj['key']
console.log(obj['edad'])
//Resultado:
3
//para acceder a valor: obj.key
console.log(obj.edad)
//Resultado:
3
//para crear array a partir de los valores de un objeto:
Object.values(obj)// ['fulano', 3]
//forma para hacer una reduccion de condicionales:
//Quiero buscar si existe tal llave en un objeto
const objeto={
    nombre: 'fulano',
    edad: 3,
};
x='edad'
function buscar(y){
    var y
    //en el if pregunta si objeto[y] existe, en caso afirmativo entra
    if(objeto[y]){
        console.log('Si se encuentra, su valor es: '+objeto[y])
    }
}
buscar(x)

//funcion en JS:
//las funciones pueden retornarn o no un valor
//tambien pueden o no tener una variable de entrada: variableFuncion
//pueden entrar varias variables: function nombreFuncion(x1,x2,x3)
function nombreFuncion(variableFuncion){
    //declara la variable x
    let x
    x=variableFuncion+1
    //retorna el valor de x por consola
    return console.log(x)
}
//se llama la funcion
nombreFuncion(2)
//Resultado:
3

//muestra lo que se toma del DOM en la consola:
const h1=document.querySelector('h1')
console.log({h1})
//de esa forma se puede observar varias propiedades para poder
//a futuro corregir algunos errores de forma mas facil

//AGREGUE DEL OTRO DOCUMENTO
Uso de LocalStorage
Agregar: localStorage.setItem("key",valor)
Tomar información: localStorage.getItem("key")
Eliminar elmentos: localStorage.removeItem("key")
Limpiar (elimina todo lo guardado): localStorage.clear()

Llama a funcion eliminar en js: onclick="eliminar()"

Pasar lo que hay en una etiqueta con id a js:
var elemento=document.getElementById("texto")

Cambiar estilo css con id:
elemento.style.color="black"

Modificar texto del HTML:
elemento.innerHTML="texto"


En caso de haber mas de una etiqueta con la misma clase se forma una lista
Pasar lo que hay en una etiqueta con class a js:
var animal=document.getElementsByClassName("animal")

Uso de querySelector (toma el primero que encuentre en HTML):
const etiqueta=document.querySelector('p')
const clase=document.querySelector('.clase')
const id=document.querySelector('#id')

//Entrega contenido dentro de la etiqueta usando querySelector :
etiqueta.textContent
clase.textContent
id.textContent

//Uso de querySelectorAll (los toma todos y crea una lista):
const etiqueta=document.querySelectorAll('p')
const clase=document.querySelectorAll('.clase')
// No sirve: const id=document.querySelectorAll('#id')

//Entrega contenido dentro de la etiqueta usando querySelectorAll:
etiqueta[i].textContent
clase[i].textContent
// No sirve: id[i].textContent

//Creacion de elementos HTML desde Javascript:
//se ponde en id=contenedor
const contenedor=document.querySelector("#contenedor")
//se crea elemento con etiqueta p
const parrafo=document.createElement('p')
//se agrega contenido en el elemento
parrafo.textContent="Ejemplo de creación de elementos en JavaScript"
//se agrega el elemento en html
contenedor.appendChild(parrafo)

.appendChild(): se utiliza para agregar un nuevo nodo como un hijo al final de un elemento específico en el DOM 


//html
<h1>Cambiame</h1>
//javascript
const h1=document.querySelector('h1')
h1
