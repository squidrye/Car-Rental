[deployment](https://rainbow-fairy-59d6d4.netlify.app/)
[backend](https://dorian-opposite-utahraptor.glitch.me/)
[backend-repo](https://github.com/squidrye/Car-Rental-Middleware)
[frontend-repo](https://github.com/ArthSrivastava/Car-Rental)

# Car-Rental Project for MLH Hack-ccelerate Hackathon
## Inspiration
Our inspiration for this project was to encourage sustainable collaboration of vehicles, in our mind sharing and pooling of already existing vehicles can satisfy a large number of automobile consumer market as well as approach will help in reducing the strain on environment and natural resources due to ever increasing number of vehicles on road.
## What it does

1. User can list their cars for others to use meanwhile himself rent cars listed by other people
2. User can sign-up on our website to list their own car as well as view other listings for which signing-up is not necessary.
3. Description for car to be listed by user is generated by cohere-ai based on details provided by user
4. Once listed user can select any two listings to compare them where in cohere-ai generates a comparison for two cars.
5. Comparison page also generates pollution statistics about the selected cars.

## How we built it
1. We have used react and react strap for building of the website.
2. We have used firebase-auth for configuring authentication of user on website.
3. We have used cohere-ai for description generation, car comparison and pollution description of cars.
4. We have used node-js as a middleware for sending requests to cohere and filtering out necessary data.

## Challenges we ran into
1. We ran into multiple state management problems while building the app
2. We ran into problems while configuration and deployment of backend middleware and cors.
3. We had to figure out firebase and firestore integration as well.

## Accomplishments that we're proud of
1.  We were able to resolve most of the problems we ran into.
2. We were able to create a dynamic website which incorporate an ai model.
3. We were able to create something that is capable of serving real world customers and authentic purpose

## What we learned
1. We were able to learn state management in react using context providers.
2. We were able to learn firebase integration in web apps.
3. We were able to learn integration of api's and creation of a custom rest api middleware that trims down data from multiple sources

## What's next for Car.Rent
1. Car.Rent has plathora of possibilities in near future in terms of scaling.
2. Addition of comments and reviews in listings which was our goal but time constraints didn't make it feasible, can be used for sentiment analysis of particular car.
3. Many more features such as extended booking, multiple booking, pooling, sharing can be added to already existing app.
