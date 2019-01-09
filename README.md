## TS-MONOREPO
A minimal example of a typescript monorepo setup

### Repo structure
* `apps/` contains SPAs that consumes the packages inside `modules/`

* `modules/` contains packages that are consumed by the SPAs inside `apps/`

* `package.json` specifies where our workspaces resides among other things

* `tsconfig.json` contains common config for typescript shared across all subrepos

* `tsconfig.json` inside of each package (in `apps/` and `modules/`) extends the `tsconfig.json` in the root dir, specifies its src and out dir and excludes dist and node_modules

### Install & build 🔧
We're using lerna and yarn to install and build 
packagess and we can run these commands from the root dir:

* Install all dependencies in all subrepos: 
`yarn install`
 
* Lint all subrepos: `yarn lint`

* Use lerna to build all subrepos: `yarn build`

* Release using lerna: `yarn release`
