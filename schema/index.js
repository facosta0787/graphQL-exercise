const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    comentarios: [Comentario]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable ): Profesor
    profesorDelete(profesorId: Int!) : Profesor
  }
`
const schema = makeExecutableSchema({
  typeDefs: [rootQuery, Profesor, Curso],
  resolvers
 })

module.exports = schema

 // addMockFunctionsToSchema({
 //   schema,
 //   mocks:{
 //     Curso: () => {
 //       return {
 //         id: faker.random.uuid(),
 //         titulo: faker.lorem.sentence(),
 //         descripcion: faker.lorem.sentences()
 //       }
 //     },
 //     Profesor: () => {
 //       return {
 //         nombre: faker.fake(`{{name.firstName}} {{name.lastName}}`),
 //         nacionalidad: faker.address.country()
 //       }
 //     }
 //   },
 //   preserveResolvers: true
 // })
