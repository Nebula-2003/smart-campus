FROM node:22-slim

WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy only package.json and lockfile first
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]