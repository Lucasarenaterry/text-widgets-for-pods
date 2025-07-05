# text-widgets-for-pods

### By Lucas Arena Terry

## Tech Stack

### Frontend:

- Next.js
- React
- TypeScript

### Backend:

- Express
- TypeScript

### Backend Testing:

- Jest

### Virtual Container:

- Docker

## Requirements

- Docker (https://www.docker.com/)
- NPM v10.x
- node.js v20.x (https://nodejs.org/en/download)
- NX (https://nx.dev/)

## Getting Started

### Run web-app and api localy

To run the application both the web-app and the server have to be run at the same time.

Run the web-app:
`npx nx serve web-app`

Run the server (api):
`npx nx serve api`

### Run Docker Container

You should have the following files in folder:

- docker-compose.yml
- web-app.tar
- api.tar

- Make sure you have Docker running.
- Make sure to CD into this folder location.

Load the images using:
`docker load < text_widget_api.tar`
`docker load < text_widget_web_app.tar`

Run the container:
`docker-compose up`

### Build the Docker container and run

Build the Docker container:
`docker-compose up --build`

Start the docker container:
`docker compose up`

## Testing

Run all api tests:
`npx nx test api`
