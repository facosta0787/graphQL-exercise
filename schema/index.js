const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Profesor = require('./Profesor')
const Curso = require('./Curso')

const rootQuery = `
  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    comentarios: [Comentario]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
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
