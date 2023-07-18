# Counter Application

## Steps to run the application
Open the console and run below commands
### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## test the application
Open the console and run below commands
### `npm test`

## After runnig unit tests it should pass following 7 test cases
1. it should render counter component without any errors
2. initial count value should be 0
3. it should increase counter to 1 when Increase button is clicked
4. it should decrease counter to 0 when Decrease button is clicked
5. it should reset the count to 0 when Reset button is clicked and if current count equals to 1
6. it should show an alert when count exceeds 10 on increase
7. it should show an alert when count goes below 0 on decrease

## codebase walkthrough

Counter.tsx component is placed under src->components folder

It maintains count using useState hook and count is number type

Styles for ui elements are defined within the component as Record<string, CSSProperties>, which means it's an object with keys of type string, and the values should be type of CSSProperties.