let nestProcessPid = null; // Store the NestJS server PID
let backendBuildPath = null; // Store the backend build path


Neutralino.init();

async function getBackendBuildPath() {
  try {
    backendBuildPath = await Neutralino.filesystem.getAbsolutePath('./backend build');
    console.log('Backend build path:', backendBuildPath);
  } catch (err) {
    console.error('Failed to get backend build path:', err);
  }
}

async function startNestServer() {
  try {
    // // Get the current executable directory
    // let exeDir = (await Neutralino.os.execCommand("pwd")).stdOut.trim();

    // exeDir = exeDir.substring(1);
    // exeDir = exeDir.charAt(0).toUpperCase()+ ":" + exeDir.slice(1);
    // // Construct the full path to the backend build folder
    // const nestPath = `${exeDir}/backend build/src/main.js`;

    // // Wrap the path in double quotes for Windows compatibility
    // const command = `node "${nestPath.replace(/\\/g, '\\\\')}"`;

    // console.log("Executing command:", command);


    // Get the backend build path
    await getBackendBuildPath();

    if (!backendBuildPath) {
      throw new Error('Backend build path is not available.');
    }

    // Construct the full path to the NestJS main file
    const nestPath = `${backendBuildPath}/src/main.js`;
    console.log('NestJS main file path:', nestPath);

    // Start the NestJS backend
    const command = `node "${nestPath}"`;
    console.log("Executing command:", command);
    // Start the NestJS backend
    const process = await Neutralino.os.spawnProcess(command);

    console.log("NestJS server started with PID:", process.pid);
    nestProcessPid = process.pid; // Store the PID
  } catch (err) {
    console.error("Failed to start NestJS server:", err);
  }
}

Neutralino.events.on("ready", () => {
  startNestServer();
});

Neutralino.events.on("exit", async () => {
  try {
    const command = process.platform === "win32" ? "taskkill /F /PID" : "kill";
    const killProcess = Neutralino.os.execCommand(`${command} ${nestProcessPid}`);

    // Wait for the process to stop, but timeout after 2 seconds
    await Promise.race([
      killProcess,
      new Promise((resolve) => setTimeout(resolve, 2000)),
    ]);

    console.log("NestJS server stopped.");
  } catch (err) {
    console.error("Failed to stop NestJS server:", err);
  }

  // Exit the app
  Neutralino.app.exit();
});
