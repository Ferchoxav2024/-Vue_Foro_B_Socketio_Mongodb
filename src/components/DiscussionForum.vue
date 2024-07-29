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

    <main>
      <div class="forum-container">
        <h2 class="mt-5">FOROS</h2>

        <!-- Sección de la Noticia -->
        <div v-if="news" class="news-section mt-4">
          <h3 class="news-title">{{ news.title }}</h3>
          <p class="news-author">Por: {{ news.author }}</p>
          <img :src="news.urlToImage" :alt="news.title" class="news-image">
          <p class="news-description">{{ news.description }}</p>
          <a :href="news.url" target="_blank" class="news-link">Leer más</a>
        </div>

        <hr class="mt-5">

        <!-- Sección para Crear un Post -->
        <form @submit.prevent="onCreatePost" class="form mt-4">
          <div class="form-group">
            <label for="title">Título</label>
            <input type="text" id="title" v-model="title" name="title" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="body">Mensaje</label>
            <textarea id="body" v-model="body" name="body" class="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Publicar</button>
        </form>

        <hr class="mt-5">

        <!-- Sección de Posts -->
        <ul class="list-group mt-4">
          <li v-for="post in posts" :key="post._id" class="list-group-item">
            <h5>{{ post.title }}</h5>
            <p>{{ post.text }}</p>
            <button @click="onDeletePost(post._id)" class="btn btn-danger">Eliminar</button>
          </li>
        </ul>
      </div>
    </main>

    <footer class="footer text-white text-center py-3 mt-auto">
      <p>&copy; 2024 Mi Blog. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DiscussionForum',
  data() {
    return {
      news: {
        title: '¿Qué es la Usabilidad Web?',
        author: 'John Doe',
        urlToImage: 'https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg',
        description: 'La usabilidad se refiere a la medida en que un producto puede ser usado por usuarios específicos para lograr objetivos definidos con efectividad, eficiencia y satisfacción en un contexto de uso particular. Es un concepto clave en el diseño de interfaces de usuario, ya que una buena usabilidad facilita que los usuarios completen sus tareas de manera intuitiva y sin esfuerzo innecesario. Aspectos importantes de la usabilidad incluyen la facilidad de aprendizaje, la eficiencia de uso, la memorización, la prevención de errores y la satisfacción del usuario.',
        url: 'https://www.nachomadrid.com/2020/03/definicion-de-usabilidad/'
      },
      title: '',
      body: '',
      posts: []
    };
  },
  mounted() {
    this.$socket.emit('get-comments');
    this.$socket.on('all-comments', (comments) => {
      this.posts = comments;
    });
    this.$socket.on('new-comment', (comment) => {
      this.posts.push(comment);
    });
    this.$socket.on('comment-deleted', (commentId) => {
      this.posts = this.posts.filter(post => post._id !== commentId);
    });
  },
  methods: {
    onCreatePost() {
      if (this.title && this.body) {
        const newPost = {
          title: this.title,
          text: this.body // Asegúrate de usar "text" en lugar de "body"
        };
        this.$socket.emit('create-comment', newPost);
        this.title = '';
        this.body = '';
      }
    },
    onDeletePost(postId) {
      this.$socket.emit('delete-comment', postId);
    }
  }
};
</script>

<style scoped>
.container_boddy {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
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
  align-items: flex-start;
  min-height: 60vh;
  background-color: #ECF0F1;
  color: #2C3E50;
  margin: 0;
  position: relative; /* Para la capa de opacidad */
  padding-top: 2vh; /* Espaciado superior */
  padding-bottom: 10vh; /* Espaciado inferior */
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
.forum-container {
  margin-top: 3rem; /* Ajusta el margen superior según sea necesario */
  padding: 2rem;
  background-color: #ffffff; /* Color de fondo para el contenedor de los foros */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.forum-container h2 {
  text-align: center; /* Centrar horizontalmente */
  margin-top: 0rem; /* Margen superior */
  margin-bottom: 1rem; /* Margen inferior */
  border-bottom: 3px solid #ccc; /* Línea inferior */
  padding: 10px 0; /* Espaciado interno */
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
  padding: 10px 0;
  text-align: center; /* Centrar el texto */
}
.footer p {
  margin: 0;
}
.news-section {
  margin-top: 2rem;
}
.news-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2C3E50;
}
.news-author {
  color: #6C7A89;
}
.news-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 1rem;
}
.news-description {
  margin-top: 1rem;
  color: #6C7A89;
}
.news-link {
  display: block;
  margin-top: 1rem;
  color: #E74C3C;
  font-weight: bold;
}
.news-link:hover {
  text-decoration: underline;
}
.forum-container {
  width: 80%;
  max-width: 800px;
  margin-top: 3rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-group {
  text-align: left; /* Alineación izquierda para etiquetas y campos */
}
.list-group-item {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f0f0f0; /* Color de fondo para los posts */
  border-radius: 8px;
}
/* Estilo del botón de eliminar */
.list-group-item button.btn-danger {
  background-color: #E74C3C; /* Color de fondo */
  border: none;
  color: #ffffff; /* Texto blanco para contraste */
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.list-group-item button.btn-danger:hover {
  background-color: #c0392b; /* Color más oscuro en hover */
}
.list-group-item h5 {
  color: #2C3E50;
  margin-bottom: 0.5rem;
}
.list-group-item p {
  color: #6C7A89;
}
.list-group-item button {
  margin-top: 0.5rem;
}
.news-description {
  text-align: justify;
  margin-top: 1rem;
  color: #6C7A89;
}

</style>
