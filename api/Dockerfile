FROM node:22-slim

WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm nodemon rimraf concurrently typescript

# Copy only package.json and lockfile first
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm","run","dev"]