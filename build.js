import 'dotenv/config';
import { spawnSync } from 'child_process';

// Check if required environment variables are set
const requiredEnvVars = ['FEDERATION_REMOTE_URL'];
const missingEnvVars = requiredEnvVars.filter(
  (varName) => !process.env[varName],
);

if (missingEnvVars.length > 0) {
  console.error(`Error: Missing env vars: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

// Print the environment variables
console.log('Environment variables:');
for (const varName of requiredEnvVars) {
  console.log(`${varName}: ${process.env[varName]}`);
}

// Run the build command
const execCommand = (command, args = []) => {
  console.log(`Running: ${command} ${args.join(' ')}`);
  const result = spawnSync(command, args, { stdio: 'inherit', shell: true });

  if (result.error) {
    console.error(`Failed to execute: ${command}`, result.error);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`Error: Command "${command} ${args.join(' ')}" failed.`);
    process.exit(result.status);
  }
};

execCommand('rsbuild', ['build']);
