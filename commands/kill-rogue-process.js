export default function killRogueProcess() {
  const command = `kill -9 $(ps aux | grep "node --inspect app.js" | grep -v "grep" | awk '{print $2}') || echo "No Node process found" && exit 1`;
  const dir = exec(command, (err, out, stderr) => {
    if (err) {
      console.log(1, err);
    }
    console.log(out);
  });

  dir.on('exit', (code) => {
    console.log(2, code);
  });
}
