const gekkoRoot = __dirname + '/../../';
const fs = require('fs');

module.exports = function *() {
  const strategyDir = yield fs.readdir(gekkoRoot + 'strategies');
  let name = this.request.body.name;
  let code = this.request.body.code;
  console.log(name);
  console.log(code);
  fs.writeFile(strategyDir + "/" + name + ".js", code, function(err) {
      if(err) {
           console.log(err);
        this.body = {
          status: 'not ok'
        }
        return;
      }
      console.log("The file was saved!");
  });

  this.body = {
    status: 'ok'
  };
}
