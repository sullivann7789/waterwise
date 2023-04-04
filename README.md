# Waterwise <!-- omit in toc -->

Have you ever found yourself at the store thirsty for some good water? but all the brands, all the choices, and it's all the same right? wrong! and we'll show you why! Hydrawise is a high level blog for water connoisseurs around the world. This unique app lets users leave detailed reviews on water and the brands that make them in unique threads called “watering holes”.

In these holes you will find comments, reviews, and user end stories on the water you may be looking to buy!

- [Installation✨](#installation✨)
- [Setup✨](#setup✨)
- [Usage✨](#usage✨)
- [Technologies✨](#technologies✨)
- [LIVE✨](#LIVE✨)
- [Contributing✨](#contributing✨)
- [Shouts-Out✨](#shouts-out✨)
- [License✨](#license✨)

## Installation✨

Visit github and clone the ssh or http [HERE](https://cmadrid48.github.io/openVVeatherVVidget/) to install, or contribute.

To install the application, follow these steps:

```bash
git clone https://github.com/sullivann7789/waterwise.git [destination]
Clone the repository to your local machine.
Navigate to the project directory in the terminal.
Run npm install to install the necessary dependencies.
```

## Setup✨

1. Run `npm i`.
2. You will need an existing MySQL database. **mysql -> source db/schema.sql**
3. Create `.env` file with MySQL credentials for local development and a SECRET. Refer to [.env.EXAMPLE](./.env.EXAMPLE)
4. Run `npm start` to start the app.

## Usage✨

Once server has been established you may visit the site. Upon enetering you will be prompted to `create an account` and or `login`.
Create your account and begin your journey into your favorite watring hole, or maybe take a dip in a new hole!

## Technologies✨

- Session

[express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) are used for session management. Configure cookies and sessions in [config/session.js](./config/session.js)

- Authentication

Passwords are hashed using [bcrypt](https://www.npmjs.com/package/bcrypt). Middleware for protected routes redirects to `/login`. This can be modified by updating [util/withAuth.js](./util/withAuth.js).

- HandleBars

[Handlebars.js](https://handlebarsjs.com/) and [express-handlebars](https://www.npmjs.com/package/express-handlebars) are used for rendering templates.

You can add your own custom helper functions by exporting them from [util/helpers.js](./util/helpers.js).

- Eslint
- Prettier

[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) are included for enforcing consistent code quality and format. The default configuration includes the ESLint recommended plugin, the Prettier plugin, plus a couple of additional rules. Modify [.eslintrc.js](./.eslintrc.json) to customize the rules.

## LIVE✨

[Live deployed Heroku server](https://)

## Contributing✨

If you would like to contribute to this project, please reach out to the squad!

- @MeyerTalon
- @sullivann7789
- @jacobgoreham
- @cmadrid48

...or please follow these guidelines:

- Fork this repository.
- Create a new branch with your changes: git checkout -b my-feature-branch
- Commit your changes: git commit -m "Add some feature"
- Push to the branch: git push origin my-feature-branch
- Submit a pull request.

## Shouts-Out✨

This application was built using Node.js and utilizes the following npm packages:
| Plugin | README |
| ------ | ------ |
bcrypt - https://www.npmjs.com/package/bcrypt
mysql2 - https://www.npmjs.com/package/mysql2
connect-session-sequelize - https://www.npmjs.com/package/connect-session-sequelize
dotenv - https://www.npmjs.com/package/dotenv
express - https://www.npmjs.com/package/express
express-handlebars - https://www.npmjs.com/package/express-handlebars
express-session -
sequelize - https://www.npmjs.com/package/express-session

```bash
devDependencies
```

eslint - https://www.npmjs.com/package/eslint
eslint-config - https://www.npmjs.com/package/eslint-config-prettier
prettier - https://www.npmjs.com/package/prettier
nodemon - https://www.npmjs.com/package/nodemon

## License✨

This project is licensed under the terms of the MIT license.
