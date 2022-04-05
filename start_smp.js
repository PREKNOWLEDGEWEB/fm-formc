var spawn = require('child_process').spawn,
    child = spawn('cmd');

child.stdin.setEncoding('utf-8');
child.stdout.pipe(process.stdout);

child.stdin.write("npm -v\n");

setTimeout(() => {
  child.stdin.write("echo hello\n");
},200);

//child.stdin.end(); /// this call seems necessary, at least with plain node.js executable