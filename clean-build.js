const fs = require('fs');
const path = require('path');

function cleanBuildDir() {
  const nextDir = path.join(__dirname, '.next');
  const traceFile = path.join(nextDir, 'trace');
  
  try {
    // Try to remove the trace file specifically
    if (fs.existsSync(traceFile)) {
      fs.unlinkSync(traceFile);
      console.log('Removed trace file');
    }
    
    // Try to remove the entire .next directory
    if (fs.existsSync(nextDir)) {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log('Cleaned .next directory');
    }
  } catch (error) {
    console.warn('Could not clean build directory:', error.message);
  }
}

cleanBuildDir();
