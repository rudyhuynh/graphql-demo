# GraphQL - Relay Example

# `xserver-graphql`
A sample of GraphQL server. 
Your machine must install and run MongoDB. 
Re-check the connection string in `xserver-graphql/src/db/dbUtils`, then run:
```
cd xserver-graphql
yarn install
yarn updateSchema
yarn start
```

# `yclient-relayjs`
A sample of a React App that using Relay to connect with GraphQL server in `xserver-graphql`
```
cd yclient-relayjs
yarn install
yarn relay
yarn start
```