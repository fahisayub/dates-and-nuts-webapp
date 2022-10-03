# Dates & Nuts E-Commerce Web App
 

## What is this project all about?
Dates and Nuts is an ecommerce website that that sells Dates,Nuts,Spices,Seeds and related values added products.
This Project is Basically an implementation of React with Firebase as backend along with Redux reduxthunks and Chakra-UI.This Project is hosted on Netlify.

 Deployment Link : https://datesandnutsapp.netlify.app
## Features
- Authentication for User and Admin
- User can Filter and Sort Products
- User can select the quantity
- Can add Products to cart and update the quantity
- User add multiple shipping addresses
- Order status is visible and can be udpated by admin
- Adimin can add,update and delete products
- In mobile screen bottom navbar is added for convenience

## TODO
- [ ] Need to Improve the UI
- [ ] Need to add Payment methods
- [ ] User should be able to cancel the order
- [ ] Make the user profile visible
## How to use it?
1. You can clone the repository and run the command `npm install`
2. You need to to create your own firebase project.
3. Add the firebase-config that is given while linking this to your firebase project.
4. then go to the utils folder inside the src folder and replace the dummyfirebase-config.js with your firebase-config.js file.
5. enable signin with email and password in firebase project 
6. now run `npm start` here we go...

now you can make changes as you need.


## How it works?
 As the user get into the website the product are fetched from the firestore products collection and as the user applies filters it will send the query request to firestore for the products with filtered types.

 On clicking on any products it will navigate to the single product page where the user can add the product to cart, if the user is not logged in then user will be redirected to the login page.

 In cart user can update the quantity of the product and the shipping address.On clicking on checkout button a modal will appear form were the user can place order. On payment the user will be redirected to the order page.

 In order page the user can view th order status 


## Author
Muhammed Fahiz
## Dependencies
 - redux
 - redux-thunk
 - react-redux
 - react-router-dom
 - chakra-UI
 - chakra-ui-bottom-navigation
 - firebase
