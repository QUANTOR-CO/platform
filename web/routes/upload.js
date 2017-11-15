const gekkoRoot = __dirname + '/../../';
const fs = require('co-fs');

module.exports = function *() {
  const strategyDir = gekkoRoot + 'strategies'
  let name = this.request.body.name;
  let code = this.request.body.code;
  var options = { flag : 'w' };
  fs.writeFile(strategyDir + "/" + name + ".js", code, options, function(err) {
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
