# Base image
FROM node:18

# Working directory inside container
WORKDIR /usr/src/app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["node", "server.js"]
