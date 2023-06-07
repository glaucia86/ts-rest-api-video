FROM node:18

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy package.json so that package manager commands can be used.
COPY package*.json ./

RUN npm install

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "run", "dev"]
