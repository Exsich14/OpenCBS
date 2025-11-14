// OpenCBS 1.0
const OpenCBS = {
    appName: "OpenCBS", // Display name(can change)
    
    info: (msg) => {
        console.log(`[INFO] [${OpenCBS.appName}] ${msg}`);
    },

    warn: (msg) => {
        console.warn(`[WARN] [${OpenCBS.appName}] ${msg}`);
    },

    error: (msg) => {
        console.error(`[ERROR] [${OpenCBS.appName}] ${msg}`);
        if (typeof process !== "undefined" && process.exit) {
            process.exit(1); // Node.js
        } else {
            throw new Error(msg); // Browser
        }
    },
};

// Example
let score = 10;

if (score === 0) {
    OpenCBS.warn("Score is not initializated");
} else if (score === -1) {
    OpenCBS.error("Score is have error: -1 is can not to be okay");
} else {
    OpenCBS.info("All is okay(maybe)");
}
