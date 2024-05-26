# Use the official Node.js LTS image as a base for building the app
FROM node:lts AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app (ensure the build output directory matches your Angular configuration)
RUN npm run build --prod

# Use a lightweight web server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage to the nginx directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]