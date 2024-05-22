# Explicacion

## Bob
Lo que hice aquí fue transformar la función `hey` para que tome un mensaje como entrada y devuelva una respuesta apropiada según el mensaje. Primero, definí un conjunto de respuestas en un array llamado `answers`. Cada respuesta corresponde a un tipo diferente de mensaje que podríamos recibir.

Luego, redefiní la función `hey` como una función de flecha (`arrow function`), que toma un parámetro `message` de tipo `string` y devuelve una respuesta también de tipo `string`. Dentro de la función, limpio el mensaje eliminando cualquier espacio en blanco innecesario alrededor con `trim()`.

Después, verifico si el mensaje es una pregunta o no. Lo hago comprobando si el mensaje termina con un signo de interrogación `?`. Si lo hace, asigno un valor de `1` a `isQuestion`, de lo contrario, `isQuestion` se mantiene como `0`.

Luego, compruebo si el mensaje está siendo gritado. Lo hago buscando si hay al menos una letra en mayúscula y si todo el mensaje está en mayúsculas. Si estas condiciones se cumplen, asigno un valor de `2` a `isYelling`, de lo contrario, `isYelling` permanece como `0`.

Finalmente, devuelvo una respuesta eligiendo la respuesta apropiada del array `answers` sumando los valores de `isQuestion` e `isYelling` para determinar el índice correcto en el array. Si el mensaje está vacío, devuelvo una respuesta especial "Fine. Be that way!".

Así que, básicamente, esta función `hey` ahora puede reconocer si un mensaje es una pregunta, si está siendo gritado o si está vacío, y proporcionar una respuesta adecuada en cada caso. 

## Matrix
Lo que hice en esta fue modificar la clase `Matrix` para que ahora pueda construirse con un texto que represente una matriz. Dentro del constructor, tomo este texto y lo divido en filas utilizando el salto de línea `\n`, luego divido cada fila en números individuales utilizando expresiones regulares para encontrar cualquier espacio en blanco `\s+`, y finalmente convierto esos números de cadena en números enteros utilizando la función `Number()`.

Luego, asigno estas filas a la propiedad `rows` de la matriz. Después, aprovechando las filas ya obtenidas, calculo las columnas intercambiando filas y columnas. Esto lo hago utilizando el método `map()` para recorrer las filas y crear nuevas columnas basadas en los elementos de cada fila en la misma posición.

De esta manera, cuando creas una instancia de la clase `Matrix` con un texto que representa una matriz, las propiedades `rows` y `columns` se llenan automáticamente con los datos de la matriz, lo que permite acceder a las filas y columnas de manera conveniente.

- Link:https://youtu.be/QWcmiY-xNQ8