# Use Node.js 22
FROM node:22

# Create working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Backend listens on port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]