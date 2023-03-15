### Aplicación Lista de tareas || To Do App

-La aplicación crea una lista de tareas, utiliza el contexto TodoContext para obtener la información necesaria, como la lista de tareas, el estado de carga y los errores.

-La interfaz de usuario consta de un contador de tareas, un campo de búsqueda, una lista de tareas y un botón para agregar nuevas tareas. También hay un componente Modal que se muestra cuando se hace clic en el botón para agregar tareas.

-Dentro de la lista de tareas, se manejan tres casos: cuando hay un error al obtener la lista, cuando la lista está cargando y cuando la lista está vacía. En cada uno de estos casos, se muestra un componente diferente: TodosError, TodosLoading o EmptyTodos, respectivamente.

-Para cada tarea en la lista, se muestra un componente TodoItem que muestra el texto de la tarea, el estado de completado y botones para marcar la tarea como completada o eliminarla.

-La información se guarda en LocalStorage del navegador. 

-Para el alerta se usa la librería Sweetalert2.
