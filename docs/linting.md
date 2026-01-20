Code Formatting deals with the aesthetic appearance of the code. For example, it enforces things like whitespace, indentation, and line length.

On the other hand, linting has more to do with the analysis of code to detect functional issues. Linters provide warnings or errors for potentially problematic code.

ESLint
Install ESLint
To install eslint, run:

npm init @eslint/config@latest

It will ask you a few questions to determine what other packages to install, use these answers:

? What do you want to lint?
✔ JavaScript

? How would you like to use ESLint?
❯ To check syntax and find problems

? What type of modules does your project use?
❯ JavaScript modules (import/export)

? Which framework does your project use?
❯ None of these

? Does your project use TypeScript?
❯ Yes

? Where does your code run?
✔ Node

? Which language do you want your configuration file be written in?
✔ JavaScript

? Would you like to install them now?
❯ Yes

? Which package manager do you want to use? …
❯ npm

Then add the lint command to our package.json like this:

 "lint": "eslint ."

 Run ESLint
To run eslint on the entire Notely codebase, run this from the root of the project:

npm run lint

It should run without errors because the project is already configured to pass all of the default checks. Let's make sure that's true by breaking something!

Add an unused function to the src/main.ts file:

function unused() {
  // this function does nothing
  // and is called nowhere
}

If you're using VS Code with the ESLint extension, it should automatically detect the error and underline the function name. Or you can continue to run from the CLI with npm run lint.

You should see an error like this:

error  'unused' is defined but never used  @typescript-eslint/no-unused-vars

If so, great! ESLint is working properly.

Run and submit the CLI tests from the root of your repo.