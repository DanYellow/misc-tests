# Package.json inheritance
### Inherits your package.json from a another one

#Commands
- Copy inherited depedancies: In your subfolder: node ../copyer.js. This will implements every dependencies (not devDependancies or optionnalDependancies currently) to your sub package.json, this will also change their "absolute" path in to a local one.
Please note after that, you can have some issues with npm install in your sub package.json so run : `npm cache clean --force` it should be fine after that

In front-end folder : 
- npm run babel: to create a bundle with broserify
- npm run server: to run a node server