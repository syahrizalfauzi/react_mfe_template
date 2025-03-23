# Stage 1: Build the React app
FROM node:23-alpine AS builder

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Add your environment variables here
# ENV FEDERATION_REMOTE_URL="http://localhost:2000"

# Install dependencies
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the source code and build
COPY . .
RUN pnpm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default Nginx config and add a custom one
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
