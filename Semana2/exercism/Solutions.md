# Explicacion

Resistor-Color-duo:

Para abordar este problema, creé un enum llamado `ResistorValues`. Este enum asigna valores numéricos a cada color de la resistencia, de manera que cada color está asociado con su valor numérico correspondiente, coincidiendo con la posición en la resistencia codificada.

Luego, definí un tipo llamado `Color` que es una unión de las claves del enum `ResistorValues`. Esto garantiza que solo se puedan pasar valores válidos de color como argumentos a la función `decodedValue`.

En la función `decodedValue`, la cual escribí, tomo un array de dos colores que representan las dos bandas de la resistencia. Utilizando el enum `ResistorValues`, obtengo los valores numéricos asociados a esos colores y los concateno para formar el valor de la resistencia.

El retorno de la función `decodedValue` es el valor numérico de la resistencia como un número entero, después de concatenar los valores numéricos de las dos bandas.

Esta solución utiliza un enum para asignar valores numéricos a los colores de la resistencia, lo que hace que el código sea más legible y mantenible. Además, garantiza que solo se pasen valores válidos de color a la función `decodedValue`. 

Resistor-Color-trio:

Para resolver este problema, comencé creando un objeto llamado `values` donde mapeé los colores de las bandas de la resistencia a sus valores numéricos correspondientes. Usé `as const` para asegurarme de que los valores sean tratados como literales. Luego definí un tipo `Color` que es una unión de las claves de este objeto, para asegurarme de que solo se pasen colores válidos.

Después, establecí un array llamado `multipliers` que contiene los múltiplos de resistencia, como kilo, mega y giga, para poder mostrar el valor en la unidad de medida adecuada según su magnitud.

Luego, en la función `decodedResistorValue`, tomé un array de tres colores correspondientes a las tres bandas de la resistencia. Calculé el valor de la resistencia multiplicando los valores numéricos de las dos primeras bandas y dividiendo por 10. Para el exponente, sumé 1 al valor numérico de la tercera banda.

Finalmente, devolví una cadena formateada con el valor multiplicado por 10 elevado a la potencia del exponente, junto con el sufijo correspondiente según el valor del exponente.
