## TS-MONOREPO
Minimal example of a typescript monorepo setup


### Repo structure
* packages/ contains all subrepos

* package.json specifies where our workspaces resides among other things

* tsconfig.json contains common config for typescript shared across all subrepos

* packages/*/tsconfig.json extends the tsconfig.json in the root dir, specifies its src and out dir and excludes dist and node_modules

### Install & build 🔧
We're using lerna and yarn to install and build all packages from the root dir:

* Install all dependencies in all subrepos: 
`yarn install`
 
* Use lerna to build all subrepos: `yarn build`
