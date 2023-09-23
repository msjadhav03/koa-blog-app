# Blog Application - Server Side Application

# Koa

Koa is a minimalistic and modern web framework for Node.js, designed to provide a more expressive and streamlined way to build web applications and APIs. It was developed by the same team behind Express.js, but with a focus on more fine-grained control over the middleware stack and a more modular approach.

# Installing Node.js

```sh
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```

```sh
NODE_MAJOR=18
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

```sh
sudo apt-get update
sudo apt-get install nodejs -y
```

# Installing MongoDB

[MongoDB Install Ubuntu](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

[MongoDB Install Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

[MongoDB Install Mac](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)

[MongoDB Docker](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)

# Installing Application Dependency

Run command in project root directory

```js
npm install
```

# Running Application

```js
npm run local:start
```

or

```js
node index.js
```
