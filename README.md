## ngwa

## install dependencies

First, install [git](http://git-scm.com/downloads) and the latest stable version of [node](https://nodejs.org/).

```sh
$ git --version
$ git config --global user.name "foo bar"
$ git config --global user.email "foo@bar.com"
```

# clone ngwa repository from github

open an command prompt; cd to the parent directory for the ngwa repository
```sh
$ git clone https://github.com/davchang/ngwa.git
$ cd ngwa
```

## install nvm to manage node versions

https://github.com/creationix/nvm

run in command prompt to download nvm:
```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
Add the export command to .bash_profile
export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

#nvm to install node

```sh
$ nvm --help
$ nvm list
$ nvm install 6.10.0
#$ nvm install 5.X.X
$ nvm use 6.10.0
```

## use npm commands to install, start up webpack-dev-serever and more

```sh
$ npm install

$ npm run

## Run eslint
```sh
$ npm run lint
$ npm run lint:fix" : "eslint --config .eslintrc --fix app tests index.js",
$ npm run start : "webpack-dev-server --progress --colors --config .webpack.config.js",
$ npm run ci:build : "webpack --progress --colors --optimize-minimize --optimize-dedupe --config .webpack.config.js",
$ npm run test : "karma start .karma.config.js",
$ npm run ci:test : "NODE_ENV=production npm test"
```
## run http://localhost:8080
