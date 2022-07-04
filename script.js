let Spts=0, Rpts=0, Hpts=0, Gpts=0;

function SombreroSeleccionador (respuesta) {
    switch (respuesta) {
        case"S":
            Spts++;
        break
        case"R":
            Rpts++;
        break
        case"H":
            Hpts++;
        break
        case"G":
            Gpts++;
        break
    }
    return Spts, Rpts, Hpts, Gpts
}

function preguntas (opcion) {
    switch (opcion) {
        case"a":
            opcion="S";
        break
        case"b":
            opcion="R";
        break
        case"c":
            opcion="H";
        break
        case"d":
            opcion="G";
        break
        default:
            opcion="";
        break
    }
    return opcion
}

alert("¡Bienvenido! Este es el nuevo Sombrero Seleccionador pero ahora virtual y disponible para todo el mundo, mientras no seas un muggle claro Jajajaja")
alert("Para asignar tu casa en el prestigioso Hogwarts solo responde a mis preguntas con las letras A, B, C o D, ¡No te pases de listo y no rompas mis reglas!")

alert("¿Cuál de estas caracteristicas crees que te define mejor?")
do {
    r1=prompt("A)Ambición/ B)Inteligencia/ C)Lealtad/ D)Valentía").toLowerCase();
    R1=preguntas(r1)
}while(R1=="");
SombreroSeleccionador(R1);

alert("Si estudiases en Hogwarts... ¿Dónde preferirias que estuviese tu dormitorio?")
do {
    r2=prompt("A)En las mazmorras/ B)En una torre del castillo/ C)Cerca de la cocina/ D)En el centro del castillo").toLowerCase();
    R2=preguntas(r2);
}while(R2=="");
SombreroSeleccionador(R2);

alert("Escoge una mascota")
do {
    r3=prompt("A)Camaleón/ B)Gato/ C)Rana/ D)Búho").toLowerCase();
    R3=preguntas(r3);
}while(R3=="");
SombreroSeleccionador(R3);

alert("¿Cuál de estas asignaturas escogerias?")
do {
    r4=prompt("A)Transformaciones/ B)Astronomia/ C)Posiones/ D)Historia de la magia").toLowerCase();
    R4=preguntas(r4);
}while(R4=="");
SombreroSeleccionador(R4);

alert("¿Alguna vez has copiado o hecho trampa en un examen?")
do {
    r5=prompt("A)Si, tod@s lo hacen/ B)Solo cuando me vi obligado/ C)Si pero no me gusto/ D)Nunca").toLowerCase();
    R5=preguntas(r5);
}while(R5=="");
SombreroSeleccionador(R5);

alert("Escoge el color que mas te guste")
do {
    r6=prompt("A)Verde/ B)Azul/ C)Amarillo/ D)Rojo").toLowerCase();
    R6=preguntas(r6);
}while(R6=="");
SombreroSeleccionador(R6);

alert("Si jugases a Quidditch... ¿Cuál crees que seria tu rol en el equipo?")
do {
    r7=prompt("A)Goleador-a/ B)Buscador-a/ C)Cazador-a/ D)Guardian-a").toLowerCase();
    R7=preguntas(r7);
}while(R7=="");
SombreroSeleccionador(R7);

alert("Te miras en el espejo de Oesed y ves tu futuro ¿Cómo te ves?")
do {
    r8=prompt("A)Con mucho dinero/ B)Siendo alguien importante en Hogwarts/ C)Rodead@ de mis seres queridos/ D)Viviendo una increible aventura").toLowerCase();
    R8=preguntas(r8);
}while(R8=="");
SombreroSeleccionador(R8);

alert("Escoge un animal")
do {
    r9=prompt("A)Serpiente/ B)Águila/ C)Tejón/ D)León").toLowerCase();
    R9=preguntas(r9);
}while(R9=="");
SombreroSeleccionador(R9);

alert("¿Qué harias una vez terminaras tus estudios en Hogwarts?")
do {
    r10=prompt("A)Tendría una familia/ B)Buscaria como seguir estudiando/ C)Me uniria al Ministerio de Magia/ D)Me iría de viaje").toLowerCase();
    R10=preguntas(r10);
}while(R10=="");
SombreroSeleccionador(R10);

if(Spts>Hpts || Spts>Rpts || Spts>Gpts) {
    alert("¡SLYTHERIN!")
}else if(Rpts>Hpts || Rpts>Spts || Rpts>Gpts) {
    alert("¡RAVENCLAW!")
}else if(Hpts>Spts || Hpts>Rpts || Hpts>Gpts) {
    alert("¡HUFFLEPUFF!")
}else if(Gpts>Hpts || Gpts>Rpts || Gpts>Spts) {
    alert("¡GRYFFINDOR!")
}