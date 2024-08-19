# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve the build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "build"]

