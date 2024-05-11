# Explicacion
SPACE_AGE

Entonces, para calcular la edad en diferentes planetas, primero definí un conjunto de ratios que representan cuánto tiempo dura un año en cada planeta comparado con la Tierra. Después, hice una función llamada `age` que toma dos argumentos: el nombre del planeta y la cantidad de segundos. Esta función divide los segundos por la cantidad de segundos en un año en la Tierra para obtener los años en la Tierra, y luego divide eso por el ratio del planeta elegido para obtener la edad en ese planeta. También aseguré que el planeta ingresado sea válido para evitar errores. 

DND_CHARECTER
Modifiqué la clase `DnDCharacter` para que ahora al instanciarla, automáticamente se generen valores para sus habilidades y puntos de salud. 

Lo hice agregando un constructor a la clase. Dentro del constructor, inicialicé las habilidades (`strength`, `dexterity`, etc.) llamando a la función `generateAbilityScore()` para cada una. Esta función genera un puntaje de habilidad basado en la suma de los tres mejores resultados de tirar un dado de seis caras cuatro veces. 

También, calculé los puntos de salud (`hitpoints`) basados en la constitución (`constitution`) usando `getModifierFor()`. Esta función calcula el modificador de habilidad, que es el resultado de restar 10 del puntaje de habilidad y luego dividir por 2.

Finalmente, agregué una función privada `generateRandomDiceRollScore()` que genera un número aleatorio entre 1 y 6, simulando el lanzamiento de un dado de seis caras. Con estas modificaciones, la clase ahora funciona correctamente y genera personajes con habilidades y puntos de salud aleatorios al instanciarse.