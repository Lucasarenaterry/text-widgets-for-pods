# text-widgets-for-pods
## By Lucas Arena Terry


## Tech Stack

### Frontend:

- Next.js 
- React 
- TypeScript 

### Backend:

- Express 
- TypeScript

### Backend Unit Testing:
- Jest

### Virtual Container:

- Docker


## Requirements 

- Docker (https://www.docker.com/)
- NPM v10.x ()
- node.js v20.x (https://nodejs.org/en/download)
- NX (https://nx.dev/)

## Getting Started
To run the application both the web-app and the server have to be run at the same time.

Run the web-app:
```sh npx nx serve web-app ``` 

Run the server (api):
```npx nx serve api```

## Docker

Build the Docker containers:
```docker-compose up --build```

Start the docker containers:
```docker compose up```
