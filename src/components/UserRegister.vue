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

    <main class="d-flex justify-content-center align-items-center min-vh-100 bg-cover">
      <div class="form-container">
        <h2 class="mb-2">Regístrate</h2>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="username">Nombre de usuario</label>
            <input type="text" id="username" v-model="username" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input type="email" id="email" v-model="email" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" v-model="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
      </div>
    </main>

    <footer class="footer text-white text-center py-3 mt-auto">
      <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:3000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Error registering user');
        }

        const data = await response.json();
        console.log(data);
        this.$router.push('/login');
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    }
  }
};
</script>


<style scoped>
/* Estilo General */
body {
  font-family: 'Roboto', sans-serif;
  background-color: #ECF0F1; /* Color Secundario */
  color: #2C3E50; /* Texto oscuro para contraste */
  margin: 0;
  padding: 0;
}

.container-fluid {
  padding: 0;
}

/* Contenedor del Header */
.header {
  background-color: #2C3E50; /* Color Principal */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.header .navbar-brand {
  font-size: 1.75rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 20px; /* Ajusta este valor para mover el logo hacia la izquierda */
}

.header .nav-buttons {
  display: flex;
  gap: 1rem;
  margin-left: auto; /* Para alinear los botones a la derecha */
}

.header .nav-link {
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: background-color 0.3s, color 0.3s;
}

.header .btn-login, .header .btn-register {
  background-color: #3498DB; /* Color de Acento Claro */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.header .btn-login:hover, .header .btn-register:hover {
  background-color: #2980b9; /* Color más oscuro en hover */
}

/* Contenedor para centrar el formulario */
main {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Cambia align-items a flex-start para que el contenedor comience desde arriba */
  min-height: 75vh; /* Altura mínima para centrar verticalmente */
  background-image: url('../assets/fondo_principal_sdasd_dasd.jpeg'); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  position: relative; /* Para la capa de opacidad */
  padding-top: 5vh; /* Espaciado superior */
  padding-bottom: 1.5vh; /* Espaciado inferior */
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Capa de opacidad */
  backdrop-filter: blur(10px); /* Desenfoque del fondo */
  z-index: 1;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco con transparencia */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px; /* Ajusta el ancho máximo del contenedor del formulario */
  position: relative; /* Para superponerse a la capa de opacidad */
  z-index: 2;
}

.form-group {
  margin-bottom: 1.5rem; /* Espaciado entre los grupos de formulario */
}

.form-group label {
  font-weight: bold;
  color: #2C3E50; /* Color del texto de las etiquetas */
  display: block; /* Hace que la etiqueta sea un bloque para que el campo de entrada esté debajo */
  margin-bottom: 0.5rem; /* Espaciado inferior de la etiqueta */
}

.form-control {
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 10px;
  font-size: 1rem;
  width: 100%; /* Asegura que el campo ocupe todo el ancho del contenedor */
  transition: border-color 0.3s ease; /* Transición para el cambio de color del borde */
}

.form-control:focus {
  border-color: #3498DB; /* Color del borde al enfocar */
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5); /* Sombra al enfocar */
  outline: none; /* Eliminar el borde de enfoque predeterminado */
}

.btn-primary {
  background-color: #E74C3C; /* Color de Acento */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  width: 100%;
  font-size: 1rem; /* Tamaño de fuente del botón */
}

.btn-primary:hover {
  background-color: #c0392b; /* Color más oscuro en hover */
}

/* Estilo del Footer */
.footer {
  background-color: #2C3E50; /* Color Principal */
  color: #ffffff; /* Texto blanco para contraste */
  padding: 1px 0;
  text-align: center; /* Centrar el texto */
}

.form-container h2 {
  text-align: center;
  font-size: 2rem; /* Ajusta el tamaño de la fuente según sea necesario */
  margin: 0.5rem 0; /* Ajusta los márgenes superior e inferior */
}
</style>
