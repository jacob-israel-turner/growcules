const { exec } = require('child_process');

module.exports = function killRogueProcess() {
  const command = `kill -9 $(ps aux | grep "node --inspect app.js" | grep -v "grep" | awk '{print $2}') || (echo "No Node process found" && exit 1)`;
  const dir = exec(command, (err, out, stderr) => {
    if (err) console.log(err);
    if (stderr) console.log(err);
    if (out) console.log(out);
  });

  dir.on('exit', () => {
    console.log('The rogue process has taken out back and shot.');
  });
}
