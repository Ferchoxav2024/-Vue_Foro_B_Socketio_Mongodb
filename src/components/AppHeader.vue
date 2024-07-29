<template>
  <div class="container-fluid p-0">
    <div class="header">
      <div class="container d-flex justify-content-between align-items-center py-3">
        <router-link class="navbar-brand" to="/">Mi Blog</router-link>
        <div class="nav-buttons">
          <router-link class="nav-link btn btn-login mr-3" to="/login" active-class="active">Iniciar sesión</router-link>
          <router-link class="nav-link btn btn-register" to="/register" active-class="active">Registrarse</router-link>
        </div>
      </div>
    </div>

    <section class="banner text-white text-center d-flex align-items-center justify-content-center">
      <div>
        <h1>Bienvenido a Mi Blog</h1>
        <p>Explora, aprende y comparte con nuestra comunidad.</p>
        <router-link class="btn btn-primary btn-lg mt-3" to="/register">Únete Ahora</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.header {
  background-color: #2C3E50; /* Color Principal */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.navbar-brand {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 20px; /* Ajusta este valor para mover el logo hacia la izquierda */
}

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

.banner > * {
  position: relative;
  z-index: 2; /* Coloca el contenido por encima del overlay */
}

.banner h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.banner p {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
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

</style>
