Automated code formatting keeps your code consistent and readable. It's also a great way to avoid arguments about code style (bikeshedding).

For example, this is technically valid:

function welcome() {
	console.log("hello world!") }

But it's not formatted according to standard conventions. You would normally write it like this:

function welcome() {
  console.log("hello world!");
}

We're going to use Prettier to format our code. It's a popular package that will format our code automatically.

Prettier
Assignment
Install prettier with:
npm install -D --save-exact prettier

Add some new formatting commands to the scripts in our package.json like we did before:
    "format:write": "prettier --write \"src/**/*.{js,ts,json,css,md}\"",
    "format:check": "prettier --check \"src/**/*.{js,ts,json,css,md}\""

    if i add a script with spece between the  prettier scripts then i should run npm run format: check if not then npm run format:check like in this case