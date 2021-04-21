<p align="center">
  <p align="center">
      <img src="/public/images/logo/logo.png" alt="" height="72">
    </a>
  </p>
  <p align="center">
    E-Commerce BookStore
  </p>
</p>

# Descripción

_Es un e-commerce de una librería o bookstore, para realizar compras online de productos para la educación._

## Comenzando 🚀

_Para ver la navegabilidad de este proyecto puedes ingresar al siguiente enlace <https://elegant-volhard-51d912.netlify.app>._

### Pre-requisitos 📋

_Se necesita un editor de código fuente como:_

```
VsCode o Sublime
```

### Instalación 🔧

_Clone or download este repositorio y abrelo en tu editor de código. En un terminal (mac/linux) o terminal de Windows, ejecute el siguiente comando en el directorio base de este proyecto._

```
npm install
```

_Ahora puedes correr el proyecto ejecutando este comando._

```
npm start
```

## Funcionamiento ⚙️

_Al ejecutar el app, el usuario recibe la página del home, el cual está formado por un navbar o menu, un carousel y una sección de categorias de productos._

_Desde el navbar el usuario tiene las opciones de ir al **home**(en el caso que no se ubique en ella) la **colección de productos** (cuadernos, folder, pegamentos o todos los productos), al **cart** (deshabilitado si el usuario no ha agregado ningún producto al cart), al **contacto** (ruta que no existe y por lo cual lo llevará a la **página Error-404**), un botón para **iniciar sesión** y otro para **registrarse**_

_El corousel tiene un único link que lleva al usuario a ver todos los productos_

_En la sección categorías, el usuario puede acceder a cada una de ellas similar a la opción de colección de productos del navbar_

_Una vez el usuario ingrese a una de las categorías, observará un lista de productos y cada producto dentro de un card. Este card muestra una imagen, una marca, un título o nombre, el precio y la cantidad en stock de cada producto, además de un contador para aumentar o disminuir la cantidad ha agregar al cart utilizando el botón Agregar_

_En la parte inferior de la lista de productos hay una paginación, el cual aparecerá siempre y cuando la cantidad de productos supere a 8 por página (valor pre-configurado)_

_El usuario puede ver más detalles de un producto presionando sobre su imagen o nombre_

_Si el usuario ingresara al detalle de un producto, desde aquí también puede agregar dicho producto al cart. Una vez agregada la cantidad requerida, aparecerán dos botones, uno para regresar y seguir su compra y otro para terminar su compra e ir al cart_

_Una vez el usuario agregue al menos un producto, este valor se verá reflejado en la opción cart del navbar, mostrandose la cantidad de artículos agregados y al mismo tiempo la opción para ingresar al cart se habilitará_

_Si el usuario decide ir al cart, aquí se le muestra una tabla con la lista de productos, cantidad por producto, precio unitario y subTotal de un producto, además de un cuadro de resumen donde se muestra el precio total, un botón para ir a pagar y otro para seguir comprando_

_El usuario en este punto puede modificar las cantidades, eliminar un producto o vaciar por completo el carrito. Si el carrito quedase vacío, se le mostrará un mensaje de que el cart está vació y nuevamente la opción de ingresar al cart en el navbar quedará deshabilitado_

_Si el usuario por algún motivo saliese de la app o cerrara la página, los productos que agregó no se borrarán, y podrá verlos en el cart la siguiente vez que ejecute la app_

_Una vez el usuario este conforme con su lista de compras entonces estará listo para presionar el botón ir a pagar. En caso el usuario no haya iniciado sesión, será redirigido al formulario de **inicio de sesión**._

_Para el inicio de sesión, el usuario cuenta con tres opciones **iniciar sesión con correo electrónico y password**, **iniciar sesión con facebook** o **iniciar sesión con google**._

_Si el usuario no contara con una cuenta, podrá crear una presionando el enlace **crea una cuenta** que le redirigirá al **registro**. Aquí se le solicitará al usuario un correo electrónico y un password. Una vez el usuario complete los datos solicitados, automáticamente se iniciará sesión y el usuario podrá continuar con su compra._

_Visualmente, en el navbar los botones de iniciar sesión y registrarse serán remplazados por un icono que representa la opción usuario, si el usuario accediese a esta opción podrá ver su nombre de usuario (correo electrónico en el caso haya iniciado con la opción correo electronico y password o su nombre en el caso haya iniciado sesión con google o facebook), sus compras (aún en desarrollo) y la opción de cerrar sesión(si el usuario cerrara sesión, los botones iniciar sesión y registrarse volverían a aparecer)._

_En este ultimo tramo, se le solicitará al usuario información adicional para validar su compra; **su nombre, su apellido, y su telefono o celular**. Aquí el usario podrá ver un resumen de su compra, si en caso hubiera un error, pueda regresar al cart y modificar su compra. Completado estos últimos tres datos, el usuario podrá generar su orden de compra presionando el botón **Pagar**._

_Por último, se le mostrará al usurio el código o id de su orden de compra y una tabla con los productos, precio unitario, cantidad, subtotal y precio total de su compra. Además de la opción de un botón **Imprimir** para guardar en su ordenador un pdf de su orden de compra. Asimismo, terminada la compra la opción al cart en el navbar quedará deshabilitada, puesto que ahora está vacio nuevamente._

## Construido con 🛠️

_En este proyecto se utilizó lo siguiente:_

* Librería: [React](https://es.reactjs.org/)
* Dependencias: 
    * [React-Router-Dom](https://react-hook-form.com/) - Para el manejo de rutas dinámicas.
    * [React-Hook-Form](https://react-hook-form.com/) - Para validación de formularios.
    * [SweetAlert2](https://sweetalert2.github.io/) - Para animaciones con popups.
* CDN:
    * [Bootstrap](https://getbootstrap.com/) - Para los estilos, animaciones y el responsive.
    * [Bootstrap-Icons](https://icons.getbootstrap.com/) - Iconos utilizados.
* Plataforma: [Firebase](https://firebase.google.com/) - Para la base de datos y la autenticación de usuarios.

## Autor ✒️

* **Carlos Castillo** - *Desarrollador del Proyecto* - [carloscastillo369](https://github.com/carloscastillo369)