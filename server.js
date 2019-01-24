const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        name: String,
        age:Int
    }
`);

// Root resolver
var root = {
    name: () => 'yogesh',
    age: () => '25'
};


// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));