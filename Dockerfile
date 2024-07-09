# Use an official Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD ["npm", "start"]
