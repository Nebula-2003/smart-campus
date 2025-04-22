FROM node:22-slim

WORKDIR /usr/src/app

RUN npm install -g pnpm

# Copy and install dependencies
COPY package*.json ./
RUN pnpm install

# Copy the full app
COPY . .

# Build the app
RUN pnpm run build

# Expose the port
EXPOSE 3000

# Run the production build
CMD ["pnpm", "start"]