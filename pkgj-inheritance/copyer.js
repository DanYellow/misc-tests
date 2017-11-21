const fs = require('fs');
const path = require('path');

const rootPkgJSON = `../package.json`;
const rootPkgJSONContent = fs.readFileSync(rootPkgJSON, 'utf8')
const rootPkgJSONDependancies = {...JSON.parse(rootPkgJSONContent).dependencies};

const localPath = Object.keys(rootPkgJSONDependancies).map(function(key, index) {
    return [[`${key}`], `file:../${key}`]
 })

const obj = {};
localPath.forEach(function(data){
    obj[data[0]] = data[1]
});


const currentPkgJSON = fs.readFileSync('package2.json', 'utf8')
let currentPkgJSONDependancies = (JSON.parse(currentPkgJSON).dependencies) ? JSON.parse(currentPkgJSON).dependencies : {}
currentPkgJSONDependancies = {...currentPkgJSONDependancies, ...obj}

const newPkg = {...JSON.parse(currentPkgJSON), ...{dependencies: currentPkgJSONDependancies}}

fs.writeFileSync('./package.json', JSON.stringify(newPkg, null, 4));
