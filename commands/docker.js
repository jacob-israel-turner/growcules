const { exec } = require('child_process');

module.exports = function(command) {
  switch (command) {
    case 'login':
      dockerLogin();
      break;
    case 'update':
      dockerUpdate();
      break;
    case 'up':
      dockerUp();
      break;
    case undefined:
      dockerLogin()
        .then(dockerUpdate)
        .then(dockerUp)
      break;
    default:
      console.log(`Unkown docker command: ${command}`);
  }
}

function dockerLogin() {
  return new Promise((resolve, reject) => {
    const command = `$(aws ecr get-login --no-include-email)`;
    const dir = exec(command, (err, out, stderr) => {
      if (err) console.log(err);
      if (stderr) console.log(stderr);
      if (out) console.log(out);
    });
    dir.on('exit', resolve);
  });
}

function dockerUpdate() {
  return new Promise((resolve, reject) => {
    const command = `docker-compose pull`;
    const dir = exec(command, (err, out, stderr) => {
      if (err) console.log(err);
      if (stderr) console.log(stderr);
      if (out) console.log(out);
    });
    dir.on('exit', resolve);
  });
}

function dockerUp() {
  return new Promise((resolve, reject) => {
    const command = `docker-compose up -d --remove-orphans`;
    const dir = exec(command, (err, out, stderr) => {
      if (err) console.log(err);
      if (stderr) console.log(stderr);
      if (out) console.log(out);
    });
    dir.on('exit', resolve);
  });
}
