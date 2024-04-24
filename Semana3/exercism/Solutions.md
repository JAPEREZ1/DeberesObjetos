# Explicacion
Leap:

Para resolver este ejercicio comencé definiendo una función llamada `isLeap` que toma un parámetro `year` de tipo número, representando el año que queremos verificar si es bisiesto o no.

Dentro de la función, utilicé una expresión de retorno para determinar si el año es bisiesto. Esto se hace verificando dos condiciones: primero, si el año es divisible por 4 y no es divisible por 100, o si es divisible por 400. Si cualquiera de estas condiciones es verdadera, el año se considera bisiesto y la función devuelve `true`. De lo contrario, devuelve `false`.

RNA Transcription:


En este otro ejercicio empecé creando un objeto llamado `nuc_map`. Este objeto mapea cada nucleótido del ADN a su correspondiente en ARN. Por ejemplo, 'G' en ADN se convierte en 'C' en ARN.

Luego busque una funcion que me ayude en este caso y encontre una asi que definí la función `toRna` que toma una cadena de ADN como entrada. Dentro de esta función, utilicé el método `reduce` para iterar sobre cada letra de la cadena de ADN. Por cada letra, verifico si está presente en el objeto `nuc_map`. Si no lo está, lanzo un error indicando que la entrada de ADN es inválida.

