# Use a Node.js base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
COPY . .

# Install the dependencies
RUN npm install

# Build the project
RUN npm run build
