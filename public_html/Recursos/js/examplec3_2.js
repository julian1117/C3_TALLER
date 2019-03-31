/* global c3 */

//http://c3js.org/gettingstarted.html
//http://c3js.org/examples.html



/*Se define una variable chart, la cual contiene el id del div contenedor y los 
 * datos que tendra la grafica que se generara (datos + nombre columnas), el 
 * tipo es grafico de barras, se indica el grosor de la barra*/
var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Data A - original', 30, 200, 100, 400, 150, 250, 220],
            ['Data B - original', 130, 100, 140, 200, 150, 50, 70]
        ],
        selection: {
      grouped: true
    },
       /* onclick: function(i) {
            console.log(i);          
                console.log(chart.columns[1].);
                //usuarios.push([, datos[i].correo, datos[i].nacimiento]);            
        },*/
        //onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        //onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        type: 'bar'

    },
    bar: {
        width: {
            ratio: 0.5
        }
    }
});

var chart = c3.generate({
    bindto: '#chartB',
    data: {
        columns: [
            ['Data A - original', 30, 200, 100, 400, 150, 250, 220],
            ['Data B - original', 130, 100, 140, 200, 150, 50, 70]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5
        }
    }
});


//dATOS DE INCIO DEL pie
var chart = c3.generate({
    bindto: '#chartP',
    data: {
        columns: [
            ['Data A - original', 30, 200, 100, 400, 150, 250, 220],
            ['Data B - original', 130, 100, 140, 200, 150, 50, 70]
        ],
        type: 'pie'
    },
    bar: {
        width: {
            ratio: 0.5
        }
    }
});

/**************************************************************
 Autor: JULIAN CAMILO HENAO
 Fecha: 30/03/2019 22:08
 Descripción: FunciÓn que permite cambiar los datos de la grafica de barras 1 con id="chart"
 @returns Arreglo con lo nuevos datos
 
 MODIFICACIONES:
 FECHA               AUTOR                   DESCRIPCION
 *************************************************************/
function cargarDataset1() {
    //Bar
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['Datos A - boton 1', 30, 20, 10, 100, 15, 25, 22, 43, 80, 120],
                ['Datos B - boton 1', 13, 10, 14, 140, 15, 5, 7, 30, 22, 47]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.6
            }
        }
    });

    //Pie
    var chartP = c3.generate({
        bindto: '#chartP',
        data: {
            columns: [
                ['Datos A - boton 1', 30, 20, 10, 100, 15, 25, 22, 43, 80, 120],
                ['Datos B - boton 1', 13, 10, 14, 140, 15, 5, 7, 30, 22, 47]
            ],
            type: 'pie'
        },
        bar: {
            width: {
                ratio: 0.6
            }
        }
    });
}

/**************************************************************
 Autor: JULIAN CAMILO HENAO
 Fecha: 30/03/2019 22:08
 Descripción: FunciÓn que permite cambiar los datos de la grafica de barras 1 con id="chart"
 @returns Arreglo con lo nuevos datos
 
 MODIFICACIONES:
 FECHA               AUTOR                   DESCRIPCION
 *************************************************************/
function cargarDataset2() {
    //Bar
    var chart = c3.generate({
        bindto: '#chart',
        data: {
            columns: [
                ['Datos A - boton 2', 13, 19, 14, 140, 15, 5, 74, 30, 72, 47],
                ['Datos B - boton 2', 80, 20, 10, 120, 15, 25, 22, 43, 80, 40],
                ['Datos C - boton 2', 34, 63, 84, 170, 13, 65, 4, 80, 72, 27]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.6
            }
        }
    });

    //Pie
    var chartP = c3.generate({
        bindto: '#chartP',
        data: {
            columns: [
                ['Datos B - boton 2', 13, 19, 14, 140, 15, 5, 74, 30, 72, 47],
                ['Datos A - boton 2', 80, 20, 10, 120, 15, 25, 22, 43, 80, 40],
                ['Datos C - boton 2', 34, 63, 84, 170, 13, 65, 4, 80, 72, 27]
            ],
            type: 'pie'
        },
        bar: {
            width: {
                ratio: 0.6
            }
        }
    });
}

/*Se pueden agregar datos a la grafica de barras*/
function agregarDatos() {
    chart.load({
        columns: [
            ['data3', 130, -150, 200, 300, -200, 100]
        ]
    });
}






/*Se define una variable chart, la cual contiene el id del div contenedor y los 
 * datos que tendra la grafica que se generara (datos + nombre columnas)*/
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    }
});





/*Se define una variable chart, la cual contiene el id del div contenedor y los 
 * datos que tendra la grafica que se generara (datos + nombre columnas)*/
var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        /*Se indica para cada columna el tipo*/
        regions: {
            'data1': [{'start': 1, 'end': 2, 'style': 'dashed'}, {'start': 3}],
            'data2': [{'end': 3}]
        }
    }
});


