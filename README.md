# Waterwise <!-- omit in toc -->

Have you ever found yourself at the store thirsty for some good water? but all the brands, all the choices, and it's all the same right? wrong! and we'll show you why! Hydrawise is a high level blog for water connoisseurs around the world. This unique app lets users leave detailed reviews on water and the brands that make them in unique threads called “watering holes”.

In these holes you will find comments, reviews, and user end stories on the water you may be looking to buy!

- [Setup](#setup)
- [Development](#development)
- [Sessions](#sessions)
- [Authentication](#authentication)
- [Templates](#templates)
- [Code Style](#code-style)
- [Deploy to Heroku](#deploy-to-heroku)

## Setup

1. Run `npm i`.
2. You will need an existing MySQL database. **mysql -> source db/schema.sql**
3. Create `.env` file with MySQL credentials for local development and a SECRET. Refer to [.env.EXAMPLE](./.env.EXAMPLE)
4. Run `npm start` to start the app.

## Technologies

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
