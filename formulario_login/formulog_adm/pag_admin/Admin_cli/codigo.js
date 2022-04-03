$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "tipo documento",
              key: "gender"
          }
          ,{
              text: "numero documento",
              key: "age"
          },{
              text: "Nombre",
              key: "name"
          },
          {
              text: "apellido",
              key: "apellido"
          },
          
          {
              text: "correo",
              key: "correo"
          },   
           {
              text: "contraseña",
              key: "contraseña"
          },        
        ],
 
        //carga de datos
        data: [{
              gender: 'T.I',
              age: 1023456781,
              name: 'juan',
              apellido: 'perez',
              correo:   'perez@cs.sa', 
              contraseña: 'perez123', 
          },
          
          {
              gender: 'C.C',
              age: 1038291076,
              name: 'ana',
              apellido: 'Ramos',
              correo:   'anaram20@gmail.com', 
              contraseña: 'anira2002', 
          },
          {
              gender: 'C.C',
              age: 1902109564,
              name: 'Sebastian',
              apellido: 'Gomez',
              correo:   'gomezseb2017@gmail.com', 
              contraseña: 'KaguUg102', 
          },
        {
              gender: 'C.C',
              age: 1320920195,
              name: 'Mariana',
              apellido: 'Ortiz',
              correo:   'mariorti159@hotmail.com', 
              contraseña: 'Mari21995', 
          },
        {
              gender: 'V',
              age: 1078257445,
              name: 'Catalina',
              apellido: 'Hernandez',
              correo:   'catica123@gmail.com', 
              contraseña: 'MajyGjsy13243', 
          },
        {
              gender: 'T.I',
              age: 10938264212,
              name: 'juan',
              apellido: 'Alvarado',
              correo:   'jualvado20@cs.sa', 
              contraseña: 'kUyu12', 
          },
          {
              gender: 'V',
              age: 1023456781,
              name: 'Luz marina',
              apellido: 'Torres',
              correo:   'Luzmatorres@gmail.com', 
              contraseña: 'cscds110831', 
          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Nuevo" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="V">Visa</option><option value="T.I">tarjeta identidad</option><option value="C.C">cedula ciudadania</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    