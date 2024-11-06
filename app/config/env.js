const env = {
  database: 'examen_umg_9r3i', // Nombre de la base de datos
  username: 'libros_examen', // Usuario de la base de datos
  password: 'Bo26ynlV1WBBlO8ki7qFeh5cQa3Ulenb', // Contraseña de la base de datos
  host: 'dpg-cskptgbv2p9s73a9li1g-a', // Host del servidor PostgreSQL
  dialect: 'postgres', // El dialecto de la base de datos (PostgreSQL)
  pool: {
    max: 5, // Número máximo de conexiones en el pool
    min: 0, // Número mínimo de conexiones en el pool
    acquire: 30000, // Tiempo máximo en ms para intentar una conexión antes de marcar error
    idle: 10000 // Tiempo máximo que una conexión puede estar inactiva antes de ser liberada
  }
};

module.exports = env;

