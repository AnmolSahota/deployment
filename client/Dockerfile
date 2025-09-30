FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Build React
RUN npm run build

# Install a simple static server
RUN npm install -g serve

# Expose container port
EXPOSE 3000

# Start the static server
CMD ["serve", "-s", "build", "-l", "3000"]
