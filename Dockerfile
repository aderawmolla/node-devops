# Stage 1: Build
FROM node:14 AS build

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install the app dependencies (only production dependencies).
RUN npm install --only=production

# Copy the rest of the application code.
COPY . .

# Run the build command if you have one (optional, remove if not needed).
# RUN npm run build

# Stage 2: Run
FROM node:14-alpine
# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage.
COPY --from=build /usr/src/app .

# Expose the port the app runs on.
EXPOSE 3000

# Command to run the application.
CMD ["node", "index.js"]
