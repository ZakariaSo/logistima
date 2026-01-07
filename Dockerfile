FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Install dependencies including devDependencies so the TypeScript compiler is available
RUN npm ci --include=dev

# Ensure tsc is available in case dev dependencies were omitted
RUN npm install -g typescript

COPY . .

RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app

COPY package*.json ./

# Install only production dependencies in the runtime image
RUN npm ci --omit=dev

# Copy compiled output
COPY --from=build /app/dist ./dist

CMD ["npm", "run", "start"]
