import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
    typeDefs:'',
    resolvers:'',
});


const app = express();

app.use(express.json());