#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

program
  .version('1.0.0')
  .description('Create a new React project with professional setup')
  .argument('[project-name]', 'name of the project')
  .action(async (projectName) => {
    console.log(chalk.cyan.bold('\n🚀 Welcome to Pro React Starter!\n'));
    
    const questions = [];
    
    if (!projectName) {
      questions.push({
        type: 'input',
        name: 'projectName',
        message: 'Enter project name:',
        default: 'my-react-app',
        validate: (input) => {
          if (!input.trim()) return 'Project name is required';
          if (fs.existsSync(input)) return 'Directory already exists';
          return true;
        }
      });
    }
    
    const answers = await inquirer.prompt(questions);
    const finalProjectName = projectName || answers.projectName;
    
    try {
      // Create project directory
      console.log(chalk.yellow(`Creating project: ${finalProjectName}`));
      const projectPath = path.resolve(finalProjectName);
      fs.ensureDirSync(projectPath);
      
      // Get template path
      const templatePath = path.join(__dirname, '../template');
      
      // Check if template exists
      if (!fs.existsSync(templatePath)) {
        console.error(chalk.red('Template directory not found!'));
        console.error(chalk.yellow('Please ensure the template/ directory exists in your package.'));
        process.exit(1);
      }
      
      // Copy template files
      console.log(chalk.yellow('Copying template files...'));
      fs.copySync(templatePath, projectPath);
      
      // Update package.json with project name
      const packageJsonPath = path.join(projectPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = fs.readJsonSync(packageJsonPath);
        packageJson.name = finalProjectName;
        fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
      }
      
      console.log(chalk.green('✓ Project structure created'));
      
      // Install dependencies
      console.log(chalk.yellow('\nInstalling dependencies...'));
      process.chdir(projectPath);
      execSync('npm install', { stdio: 'inherit' });
      
      console.log(chalk.green.bold('\n✅ Project created successfully!\n'));
      console.log(chalk.cyan('To get started:'));
      console.log(chalk.white(`  cd ${finalProjectName}`));
      console.log(chalk.white('  npm run dev'));
      console.log(chalk.cyan('\nHappy coding! 🎉\n'));
      
    } catch (error) {
      console.error(chalk.red('Error creating project:', error.message));
      process.exit(1);
    }
  });

program.parse();