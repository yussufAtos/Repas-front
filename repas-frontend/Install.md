#Installation guide
## node.js installation
* Download the tarball and extract it in the desired directory
* Add \<install_dir\>/bin to your PATH

`wget https://nodejs.org/dist/v8.11.3/node-v8.11.3-linux-x64.tar.xz`

## Proxy configuration
* Add the following lines to your ~/.npmrc file
```
registry = "https://devin-depot.rte-france.com/repository/npm-all/" ; Necessary for the packages downloading directly from github
proxy = "http://<nni>:<mdp>@proxy-surf.rte-france.com:3128"
```

## angular/cli installation
`npm install -g @angular/cli`

## Dependencies installation
```
cd <project root>/repas-frontend
npm install
```
