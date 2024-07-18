# Hub Entertainment Mega


## Description

This project is an entertainment hub that will have movies, series and cartoons, it will have the functions of giving recommendations, saving favorites and seeing what you have seen, but it is still in development.

I will use RXJS for asynchronous threads and Karma with Jasmine to test this application.

Speaking of testing, there are some images that show the code coverage of the application, this helps us know how much of the application is covered in testing.

## Technical requirements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli), TypeScript, HTML and CSS.

## How to install the project

### First Step: 

You need to have node.js, run the following command: `node --version` and npm installed, confirm that the version number displayed meets the requirements.

### Second Step: 
Remember that after downloading or cloning the project you must stop at your project in the terminal and run: `npm install`

### Final Step 

Install the Angular CLI which provides tooling for effective Angular development from a terminal window run the following command: `npm install -g @angular/cli`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Sprint 2 and 3

### Goals

- Add the RXJS library to the project
- Test all the functionalities of your application and that the code coverage is greater than 70%.

## Images of Proyect

The images are to see what the application would look like in differents devices.

- Desktop View

![Desktop View](/public/Desktop_View.webp)
- IPad View

![IPad View](/public/IPad_View.webp)
- Mobile View

![Mobile View](/public/Mobile_View.webp)

## Testing and Code Coverage

These images are the tests and the code coverage of the applications and their functions.

- Tests passed

![Tests Passed](/public/Tests_Passed.webp)
- Code Coverage

![Code Coverage](/public/Code_Coverage.webp)
!
- CMD Code Coverage

![CMD Code Coverage](/public/CMD_CodeCoverage.webp)

## Process

I knew what I had to do, which are my Sprint Goals, so I started thinking about where I could implement it and how in the explanation it said that I could implement RXJS in the database data through a service called Item service and implementing it in my Item-List component, although I think I will use it in more places, that is how I decided to implement it.

To carry out the tests I went from component to component checking the logic I had to be able to test my functions as in the explanation using Jasmine and doing a unit test for each function to be able to test and try to ensure that the application does not fail.

## Issues

- My problems were when doing the tests because I had never done a test on an application so it was a bit difficult for me but I had to do it to achieve my goals.
- Perform testing when using asynchronous thread.

## Table Sprint Review

| What was done well? | What can I do differently? | What didn't go well? |
------------------|----------------------------|-----------------------
| Learn to use Angular from scratch since the learning curve is high but since you understand little you can continue advancing and not stagnate | Work a little more efficiently without so many errors but I suppose there will always be errors so also work without so much pressure. | Not being able to test the entire application and get 10% code coverage |

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage` to execute code coverage.
