# Installing TypeScript

This is a skeleton app for people who want to use TypeScript. 

## Preparation

### Local NodeJS

1. Install [NodeJS](https://nodejs.org/en/download/). This will automatically also install `npm`.
2. Open a terminal window (command prompt, git bash, powershell)
3. Check if NodeJS is installed by typing `node --version` into the terminal. It should print a line with something like `v22.11.0`.
4. Check if NPM is installed by typing  `npm --version` into the terminal. It should print a line with something like `10.9.0`.

### Docker

If you dislike NodeJS and NPM piling up heaps of folders on your computer, use Docker!

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Open a terminal window.
3. Clone this repository.
4. Move to this folder inside the terminal.
5. Run `docker run -it --rm -v .:/app -w /app node:lts bash`.
6. You will now get a **bash** terminal from which you can execute commands.
   - From the **bash** terminal you can execute `node --version` and `npm --version`.
   - All commands executed in this environment will have an inpact on your project.
7. Once finished, you can type `exit`.

## Instructions

1. Clone or download this repository to your computer
2. Open a terminal or docker container in the project directory.
3. Install the dependencies by running `npm install`.
4. Compile the project by running `npm run build`. If you want to run the build script everytime you make changes automatically, you can use `npm run watch`.
5. Run the application. You cannot just open the `index.html` file (see the following section). 

### Webserver

Applications built with es6 (and higher) modules must be run on a webserver. On Visual Studio Code, [Five Server](https://marketplace.visualstudio.com/items?itemName=yandeu.five-server) is recommended.

An example `index.html` is provided. **You cannot load the index.html from your filesystem. It will not work!**

## Recommended VS Code Extension
 - To use the provided `.editorconfig` file, install the [EditorConfig](https://editorconfig.org/#download) plugin.
 - To use the provided `eslint.config.mjs` file, install the [ESLint](https://eslint.org/docs/user-guide/integrations) plugin.
