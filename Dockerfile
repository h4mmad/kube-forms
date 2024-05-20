# Use official Node.js LTS version as base image
FROM node:lts-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 (the default Next.js port)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]



