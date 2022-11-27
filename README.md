# Roomcoders Coding challenge

Hi, thanks for applying for the Backend node.js developer position at Roomcoders.
This coding challenge is aiming to evaluate a candidate's problem-solving skills in real-world experiences.


## Submitting Your Work
1. Create a new repository on GitHub and add the original files
2. Add `ijazulrehman` as repository collaborators 
3. Create followig issues in repo and submit and merge a PR as you might work with the GitHub issue tracker. The tasks include a bug fix and feature request.

### Issue # 1
- When we run test scripts with `yarn test`. It shows an error message as below.
- Please investigate why does it happen and fix it.
```console
➜  yarn test
yarn run v1.22.17
$ NODE_ENV=test yarn initDB && jest
$ yarn ts-node __test__/setups/initDB
$ ts-node -r tsconfig-paths/register --files __test__/setups/initDB
Error: connect ECONNREFUSED 127.0.0.1:5440
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1161:16)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
``` 

### Issue # 2
- Implement new endpoint `/api/sign-up` and `/api/sign-in`

  1. POST `/api/sign-up`
      - This will create a new `User` in the database and update `password` as passed.
      - It will return jwt which was already implemented in `src/entities/User.ts`

  2. POST `/api/sign-in`
      - This will query `User` with the `email` and compare the password
      - If the user is not found then return 404 not found

- The following table describes IN/OUT parameters of the endpoints

| IN/OUT | Field    | Type   | Description      |
| ------ | -------- | ------ | ---------------- |
| IN     | email    | string | email address    |
| IN     | password | string | user's password  |
| OUT    | message  | string | response message |
| OUT    | token    | string | JWT token        |


- Write unit test in `__test__/routes`

### Issue # 3
- Implement `withAuthenticate` [middleware](https://expressjs.com/en/guide/using-middleware.html)
- The middleware acquire JWT from `Authentication` field in the HTTP header
- Find `User` with the `user.findByToken` function and if the user is not found, we will return `403 not authorized`.
- Pass the user entity in [req.locals](https://expressjs.com/en/5x/api.html#res.locals)
- Write unit test for the middleware

### Issue # 4
- Implement new endpoint GET `/api/products`
    - This will return products information in JSON array.

- The following table describes IN/OUT parameters of the endpoints

| IN/OUT | Field    | Type   | Description      |
| ------ | -------- | ------ | ---------------- |
| OUT    | id  | string(uuid) | product's id |
| OUT    | name  | string | product's name |
| OUT    | price  | number | product's price |
| OUT    | inventory  | number | product's inventory |

- Write unit test in `__test__/routes`

### Issue # 5
- Implement new endpoint POST `/api/orders`
    - This will create a new `Order` in the database.
    - The order will be attached to `User` and `Product`
    - `User.deposit` should be deducted as `order.amount`
    - `Product.inventory` should be deducted as `order.count`
    - **Use DB transaction or lock to make sure to work with concurrent API requests**

- The following table describes IN/OUT parameters of the endpoints

| IN/OUT | Field    | Type   | Description      |
| ------ | -------- | ------ | ---------------- |
| IN     | product_id    | string(uuid) | product's id    |
| IN     | count | number | order quantity  |
| OUT    | message  | string | response message |
| OUT    | order_d    | string(uuid) | newly created order's id        |

- Write unit test in `__test__/routes`

4. 

#### Before you start

- This `README` file has a basic description of the project. Please read it carefully.
- Look through the tasks and give a quick time estimation for completing the challenge.
- Submit the PR and merge by yourself for each task. Make sure to specify how much time you spent on the task.
- use `yarn` over `npm`

## Installation

1. Make sure you have [**node**](https://nodejs.org/), [**yarn**](https://yarnpkg.com/), [**docker**](https://www.docker.com/products/docker-desktop) installed.
2. install dependencies

```
$ yarn install
```

3. running docker container

```
$ docker-compose up -d
```

4. running DB migration to check database is available

```
$ yarn typeorm migration:run #local
```

5. running test to check everything is fine

```
$ yarn test
```

## Running test

```
$ yarn test
```

or

```
$ yarn test __test__/entities # run single directory
```

## Running locally

```
$ yarn start
```

## DB Migration

1. create new migration

```
yarn typeorm migration:create -n YourMigrationName
```

or you can just modify [entity](https://github.com/crispyan-dev/crispyan-backend/tree/master/src/entities) and generate migration from the modification

```
yarn typeorm migration:generate -n YourMigrationName
```

2. run migration

```
yarn typeorm migration:run
```

3. rollback migration

```
yarn typeorm migration:revert
```

for more information on `typeorm` cli command.

just run

```
yarn typeorm
```

## Project Structure

- `dist/`: wepback bundle file
- `docker/`: docker related file. Currently, it has db init script.
- `src/`: source codes
  - `src/entities`: Entity definations
  - `src/lib`: Shared library files
  - `src/migrations`: DB migration files
  - `src/routes`: [express](https://www.expressjs.com/) routes
  - `src/Api.ts`: API server entry point
- `__test__/`: test scripts
- `READ.md`: this file
- `docker-compose.yml`: docker config for development and test database
- `ormconfig.js`: database connection config
- `package.json`: node dependencies and command scripts
- `tsconfig.json`: typescript compile options
- `eslint.json`: [eslint](https://eslint.org/) config
- `webpack.config.js`: webpack config
- `.env.local`: environment variables to load for `local` NODE_ENV
- `.env.test`: environment variables to load for `test` NODE_ENV
- `babel.config.js`: load babel presets for code transpilation
- `jest.config.js`: test configuration (paths of files to test)
- `nodemon.json`: nodemon setting(run nodemon using ts-node and watch the changes)
