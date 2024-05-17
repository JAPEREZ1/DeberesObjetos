# Explicacion
## DARTS
### 1. Tipos específicos:
   - Cambié los tipos de los parámetros `x` y `y` de `unknown` a `number`. Esto es importante porque `x` y `y` deben ser números para realizar operaciones matemáticas como la raíz cuadrada y la multiplicación.
   - También cambié el tipo de retorno de `unknown` a `number`, porque la función debe devolver un número que representa la puntuación.

### 2. Cálculo de la distancia:
   - Utilizo `const distance = Math.sqrt(x * x + y * y);` para calcular la distancia desde el punto (x, y) al origen (0, 0) utilizando el teorema de Pitágoras. Esta es la forma correcta de calcular la distancia euclidiana en un plano cartesiano.

### 3. Condiciones para determinar la puntuación:
   - Uso una serie de `if-else` para determinar la puntuación basada en la distancia calculada.
   - Si la distancia es mayor que 10, la puntuación es 0.
   - Si la distancia es mayor que 5 pero menor o igual a 10, la puntuación es 1.
   - Si la distancia es mayor que 1 pero menor o igual a 5, la puntuación es 5.
   - Si la distancia es 1 o menor, la puntuación es 10.

## CORRECIONES
### 1. Tipos correctos:
   - Usar `number` en lugar de `unknown` asegura que las operaciones matemáticas sean válidas y previene errores en tiempo de ejecución.

### 2. Cálculo correcto de la distancia:
   - La fórmula que utilizo para calcular la distancia es correcta y es la manera estándar de calcular la distancia en un plano cartesiano.

### 3. Condiciones lógicas:
   - Las condiciones `if-else` están ordenadas de manera lógica para evaluar correctamente la distancia y asignar la puntuación adecuada.
   - El rango de distancias está cubierto de manera exhaustiva, asegurando que cualquier valor de distancia recibirá una puntuación adecuada.


## Pangram

### Explicación del cambio:

### 1. Parámetro específico:
   - Cambié la función para que tome un parámetro llamado `paragraph` de tipo `string`. Esto permite pasar un texto que se verificará para determinar si es un pangrama.

### 2. Normalización del texto:
   - Utilizo `paragraph.toLowerCase()` para convertir todo el texto a minúsculas. Esto es importante porque los pangramas no distinguen entre mayúsculas y minúsculas.

### 3. Eliminación de caracteres no alfabéticos:
   - Uso `.replace(/[^a-z]/g, '')` para eliminar todos los caracteres que no sean letras. Esto garantiza que solo trabajemos con las letras del alfabeto inglés.

### 4. Uso de `Set` para obtener caracteres únicos:
   - Creo un `Set` con las letras del texto normalizado y filtrado. Un `Set` es una estructura de datos que solo almacena valores únicos.
   - Comparo el tamaño del `Set` resultante con 26. Si el tamaño es 26, significa que el texto contiene todas las letras del alfabeto al menos una vez, por lo que es un pangrama.



### 1. Acepta entrada adecuada:
   - Ahora la función toma una cadena de texto como entrada, lo cual es necesario para verificar si el texto es un pangrama.

### 2. Proceso correcto de normalización y filtrado:
   - Convertir el texto a minúsculas y eliminar caracteres no alfabéticos asegura que estamos verificando correctamente la presencia de todas las letras del alfabeto.

### 3. Uso eficiente de `Set`:
   - Utilizar un `Set` para obtener caracteres únicos es una manera eficiente de contar cuántas letras diferentes hay en el texto.
   - La comparación con 26 es precisa porque el alfabeto inglés tiene 26 letras.

- link: https://youtu.be/vS9JMFRooqU