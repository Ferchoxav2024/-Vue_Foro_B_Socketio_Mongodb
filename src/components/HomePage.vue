<template>
  <div>
    <AppHeader />
    <main class="container my-5 forum-container">
      <h2 class="text-center mb-5">Artículos Recientes</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card card-horizontal">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Artículo 1">
            <div class="card-body">
              <h5 class="card-title">Título del Artículo 1</h5>
              <p class="card-text">Breve descripción del artículo 1. Conoce más sobre este tema interesante.</p>
              <a href="#" class="btn btn-read-more">Leer más</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card card-horizontal">
            <img src="https://via.placeholder.com/150" class="card-img-top" alt="Artículo 3">
            <div class="card-body">
              <h5 class="card-title">Título del Artículo 3</h5>
              <p class="card-text">Breve descripción del artículo 3. Encuentra consejos y guías prácticas.</p>
              <a href="#" class="btn btn-read-more">Leer más</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer text-white text-center py-3 mt-auto">
      <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';

export default {
  name: 'HomePage',
  components: {
    AppHeader
  }
};
</script>

<style>

/* Contenedor de los botones de navegación */
.header .nav-buttons {
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Para alinear los botones a la derecha */
  margin-right: 20px; /* Ajusta este valor según sea necesario */
}


/* Estilo de los enlaces de navegación */
.header .nav-link {
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: background-color 0.3s, color 0.3s;
}

/* Estilo del botón de inicio de sesión */


.header .btn-login {
  background-color: #3498DB; /* Color de Acento Claro */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.header .btn-login:hover {
  background-color: #2980b9; /* Color más oscuro en hover */

}

/* Estilo del botón de registro */
.header .btn-register {
  background-color: #3498DB; /* Color de Acento Claro */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.header .btn-register:hover {
  background-color: #2980b9; /* Color más oscuro en hover */
}
.banner {
  position: relative;
  background-image: url('../assets/fondo_principal_sdasd_dasd.jpeg');
  background-size: cover;
  background-position: center;
  height: 545px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* Para asegurar que el contenido no se desborde */
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Ajusta el valor para cambiar la opacidad */
  z-index: 1; /* Coloca el overlay detrás del contenido */
}


.banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Estilo de las Tarjetas */
.card {
  transition: transform 0.3s, box-shadow 0.3s;
  border: none;
  border-radius: 25px;
  overflow: hidden;
  background-color: #ffffff; /* Color de fondo de la tarjeta */
  color: #2C3E50; /* Color del texto de la tarjeta */
  margin-bottom: 20px; /* Añade margen inferior para separar las tarjetas verticalmente */
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Contenedor de la tarjeta en disposición horizontal */
.card-horizontal {
  display: flex;
  flex-direction: row; /* Alinea los hijos en fila */
  align-items: center; /* Alinea verticalmente los elementos en el centro */
  
}

.card-img-top {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 250px; /* Ajusta este valor según sea necesario */
  height: 100%; /* Permite que la imagen se ajuste a su contenedor */
  object-fit: cover; /* Asegura que la imagen cubra el área sin distorsionarse */
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #2C3E50; /* Color del texto del título */
}

.card-text {
  font-size: 1rem;
  color: #6c757d; /* Color del texto del cuerpo de la tarjeta */
}

.card-body {
  padding: 20px; /* Aumenta el padding para mejor presentación */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn-primary {
  background-color: #E74C3C; /* Color de Acento */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #c0392b; /* Color más oscuro en hover */
}


/* Estilo del Footer */
/* Estilo del Footer */
.footer {
  background-color: #2C3E50; /* Color Principal */
  color: #ffffff; /* Texto blanco para contraste */
  padding: 1px 0;
  text-align: center; /* Centrar el texto */
}


/* Estilo del contenedor del foro */
.forum-container {
  max-width: 80%;
  margin: auto;
}
.header .container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Para permitir el posicionamiento del logo */
}

.header .navbar-brand {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  position: absolute;
  left: 0; /* Alinear el logo a la izquierda */
}

.header .nav-buttons {
  display: flex;
  gap: 1rem;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #ECF0F1; /* Color Secundario */
  color: #2C3E50; /* Texto oscuro para contraste */
  margin: 0;
  padding: 0;
}
/* Estilo del botón "Leer más" */
/* Estilo del botón "Leer más" */
.btn-read-more {
  padding: 10px 10px; /* Reduce el padding para hacer el botón más pequeño */
  font-size: 1rem; /* Ajusta el tamaño de la fuente */
  border-radius: 5px; /* Mantén el borde redondeado */
  background-color: #E74C3C; /* Color de fondo del botón */
  color: #ffffff; /* Color del texto */
  border: none; /* Sin borde */
  transition: background-color 0.3s ease;
  display: inline-block; /* Asegura que el botón se ajuste a su contenido */
  width: 80px; /* Asegura que el botón no tenga un ancho fijo */
}

.btn-read-more:hover {
  background-color: #c0392b; /* Color de fondo del botón en hover */
}
</style>