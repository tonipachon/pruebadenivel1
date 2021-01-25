/* ALGORITMIA */

/* da false */
function esPalindromo(string){
    x = string.length;
    
        if (x == 0) {
        return false;
        }
    
        for (i=0; i<x/2; i++) {
            if (string[i] != string[x-1-i]) {
                return false;
            }
        }
        
        return true;
    }
    esPalindromo("geeksforgeeks")

/* da true */

    function esPalindromo(string){
        x = string.length;
        
            if (x == 0) {
            return false;
            }
        
            for (i=0; i<x/2; i++) {
                if (string[i] != string[x-1-i]) {
                    return false;
                }
            }
            
            return true;
        }
        esPalindromo("dabalearrozalazorraelabad")


/* CSS */
La diferencia básica entre CSS Grid Layout y CSS Flexbox Layout es que Flexbox se creó para diseños de una dimensión, en una fila o una columna. 
En cambio CSS Grid Layout se pensó para el diseño bidimensional, en varias filas y columnas al mismo tiempo.




/* HTML */
1. crea un div
   div = document.createElement('div')
2. crea un svg
   document.createElementNS('http://www.w3.org/2000/svg','svg')
   document.createElementNS('http://www.w3.org/2000/svg','div')
3. agrega una clase al div creado en el punto 1
   div.classList.add('green')
4. agrega un estilo que cambie la propiedad color al punto 1
    div.style.setProperty('color','yellow')
5. agrega un atributo id al punto 1
    div.setAttribute('id','toni')
6. crea un pagina en blanco y agrega al body el div con "hello world"
   text = document.createTextNode('Hello World')
   div.appendChild(text)
   document.body.appendChild(div)
7. crea un nuevo div y agregalo como hijo al punto 1 antes de "hello world"
   child = document.createElement('div')
   div.insertBefore(child,text)
8. dime los nodos que tiene el primer div
   div.childNodes
9. dime los elementos que tiene el primer div
   div.children
10. busca todos los div de la página
    document.querySelectorAll('div')
11. busca los div que contienen la clase agregada al punto 3
    document.querySelectorAll('.green')
    document.getElementByClassName('green')
12. busca los div que tienen el id agregado en punto 5
    document.querySelectorAll('#toni')
    document.getElementById('toni')
13. deja el body sin elementos de tres formas diferentes
    div.parentNode.removeChild(div)
    div.remove()
    document.body.textContent = ''
