# Use official Node.js LTS version as base image
# FROM node:lts-alpine

# Set working directory inside the container
# WORKDIR /app

# Copy package.json and package-lock.json (if available)
# COPY package*.json ./

# Install dependencies
# RUN npm install

# Copy the rest of the application code
# COPY . .

# Build the Next.js application
# RUN npm run build

# Expose port 3000 (the default Next.js port)
# EXPOSE 3000

# Start the Next.js application
# CMD ["npm", "start"]

# Use the official Apache HTTP Server image as base image
# Use the official Ubuntu base image
FROM ubuntu:latest

# Install Apache and other necessary dependencies
RUN apt-get update && apt-get install -y \
    apache2 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory within the container
WORKDIR /var/www/html

# Copy the built Next.js application into the Apache document root
COPY ./.next/ .

# Expose port 80
EXPOSE 80

# Start Apache in the foreground
CMD ["apache2ctl", "-D", "FOREGROUND"]


