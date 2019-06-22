# Create Graphql App

Boilerplate for quick scaffolding of a [Typescript][] [GraphQL][] [Apollo][] server in a monorepo, with automatic typescript type generation via the [Graphql code generator][] and code formatting via [prettier][].

That GraphQL schema is stitched together from multiple microservices in a gateway using [Apollo Federation][]. These microservices are bootstrapped using [Lerna][]

[typescript]: https://www.typescriptlang.org/ 'So hot right now'
[graphql]: https://graphql.org/ 'A query language for your API'
[graphql code generator]: https://graphql-code-generator.com 'Works better than the apollo codegen!'
[apollo]: https://www.apollographql.com/ 'Do GraphQL right!'
[prettier]: https://prettier.io/ 'I wish every language had a prettier'
[apollo federation]: https://blog.apollographql.com/apollo-federation-f260cf525d21 'Because nobody likes a schema file that is thousands of lines long'
[lerna]: https://github.com/lerna/lerna 'A tool for managing JavaScript projects with multiple packages.'

## Usage

Fork/clone the repo and cd into the root folder:

```sh
nvm use
yarn

cd graphql
yarn
yarn dev-all-services
```

This should start all the graphql microservices. Then, in another terminal:

```sh
cp .env.test .env
```

This creates the `.env` file you need for the GraphQL gateway to know where each microservice lives. Finally, run:

```sh
yarn dev
```

This should get the gateway running, and you will be able to see the playground on http://localhost:3010 🚀

The project will auto recompile and reload on every code change in any microservice or the gateway itself. Give it a whirl!

This is where the `web` project connects, using Apollo Client. You may start that one by going into its directory and running `yarn dev`, then hitting http://localhost:3011 to see some sample UI.

## Testing

There is a sample test for the sample resolver using [Jest] to get you going; substitute your own and run tests with:

```sh
yarn test # single run all the tests

yarn test --watch # auto-reloading run of relevant tests
```

[jest]: https://jestjs.io/ 'A delightful JavaScript Testing Framework with a focus on simplicity.'

## Deployment

Since my projects nowadays are so commonly deployed to [Google App Engine], there's some minimal configuration to deploy the graphql server as the default service of an App Engine project. Substitute your own and it should "just work". Well, if you have deployed something to google app engine before, or have setup [Google Cloud Build].

[google app engine]: https://cloud.google.com/appengine/ 'Google Cloud Services: like AWS but better!'
[google cloud build]: https://cloud.google.com/cloud-build/ 'Like TravisCI, but worse!'

## Contributing

This is by no means **the** way to get a project like this started. It's not the perfect way to write your schemas, nor the perfect way to write your resolvers, nor the perfect way to generate your types. It is the best way _I_ know how to do it, and would heartily welcome any help and input to make it even better!
