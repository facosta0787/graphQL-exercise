module.exports = `
  #Los Cursos de Platzi
  type Curso {
    id: ID!
    titulo: String!
    #Descripcion del Curso
    descripcion: String!
    profesor: Profesor
    rating: Float @deprecated(reason:"No creemos mas en los puntajes")
    comentarios: [Comentario]
  }

  #Los Comentarios del Curso
  type Comentario {
    id: ID!
    nombre: String!
    cuerpo: String!
  }
`
