## Reading data from a file (JSON document)

There are two ways: 

First method syntax=>  cy.fixture(lctn).then((var){ cy.log(var.key)}) so basically we need to put the file inside the fixtures folder before we can use the fixture(). Then we need to provide the path to the file, if it is direclty inside the fixture folder, we can just specify the file name but if it is inside a folder inside the fixture foler then we need to specify the folder name followed by the filename.


The second method syntax=> cy.readFile(lctn).............. similar to fixture(). Just that we can place the file inside any location and we just need to provide the relative path to the file.

Now, after passing the location, we need to call the then() and pass an anonymous method to the then function. with a parameter (var) name that will hold the content of the file.

Now we can now use the variable name to access all the keys of the data file 

## before()

This is used to extract the values of a file and get it stored in a variable so we can use it later on in our code. Visit read2.cy.js to see implementation. We pass an anonymous funtion to the before() and we can either use fixture or readFile() to access the file and then finally use as('varName') to hold the file

## writeFile()
writeFile('outputFile.txt', 'sting that we want to store', {flag:"a+"}) , we can use {flag:"a+"} to append multiple line of texts