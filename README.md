# Cats and dogs
This is a demo fullstack project using the following technologies:
- Gatsby js
- Apollo server with graphql

## Running locally
In order to run this project locally one needs Docker install. The following command needs to be run to start the project
```
docker-compose up
```
After this command has been ran, one needs to wait for the `cats-and-dogs-client-1` container to be up and running,and then access the following page [http://localhost:8080](http://localhost:8080)
## Structure
This project contains 3 services:
1. A front end service found in the `client` folder that is written in typescript using gatsby. It is containerized using a ngix docker
2. A back end service found in the `server` folder that is written in typescript using a netlify lambda apollo graphql server.
3. A mysql service

## Running tests
Each service has its own tests, so in order to run tests, one should run the following command from a service's folder (`client` or `server`):
```
npm run test
```

## Things that could have been done better
1. Using an ORM in the backend to have typed queries
2. Store the images in a storage system (S3 or similar), and use the database to only save references
3. Test the database queries in the backend
4. Test the grpahql queries in the backend
5. Test the dogs page in the frontend
6. There are some errors in the backend docker, which don't affect the service, but it would be nice to get rid of them

## Deployed version
This project has been deployed to netlify. To access the project, one can click [here](https://heroic-smakager-dc65eb.netlify.app/). The database service used was free, thus it is slow, so the dog images takes a bit to load.