const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')
const chalk = require('chalk')
require('./db/setup')

const app = express()
const PORT = 5678

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    formatError: (error) => {
      return {
        code: 'A43',
        name: error.name,
        message: error.message
      }
    }
  })
  )

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: 'graphql' })
  )


app.listen(PORT, () => console.log('Server is runing'))
