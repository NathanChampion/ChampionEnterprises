# Dockerfile for building a react app using a node image then hosting it using NGINX
# Recommended dev build commands
# docker build -t blueprint .
# docker run -d -p 80:8080 --name blueprint blueprint
# Navigate to http://localhost to view
# Cleanup
# docker container rm blueprint -f

# Node linux image is our base build environment.
FROM node:16.13.0 AS builder

#ENV http_proxy http://wall.ad.selinc.com:8080
#ENV https_proxy https://wall.ad.selinc.com:8080

# Create a directory called app and change to it.
WORKDIR /app

# Copy over the package.json so we can do an npm install
# We do this before copying over the rest of our code so 
# we don't have to reinstall all the packages when we change our code
COPY package.json .

# This is usually not necessary but can be helpful since some packages seem to not upgrade correctly
RUN rm -rf ./node_modules

# .npmrc file for authentication
COPY .npmrc .

RUN npm config set registry https://artifactory.metro.ad.selinc.com/artifactory/api/npm/sel-npm/ && \
  # Use yarn to install all of our packages
  npm install

# Copy everything from the local build context to the /app directory on the target node image.
COPY . .

# Build the optimized version of our app.
RUN npm run prebuild
COPY meta.json .
RUN npm run build

RUN rm -rf .npmrc

# Nginx alpine will be used to run our code
FROM sel-docker.artifactory.metro.ad.selinc.com/nginx:1.15.8-alpine AS runner

ENV http_proxy=http://wall.ad.selinc.com:8080
ENV https_proxy=https://wall.ad.selinc.com:8080
ENV no_proxy=localhost,127.0.0.1,selinc.com

# Copy the buit app to our local /var/www directory where it will be served.
# Copy our nginx.conf config file over top of the default.
COPY --from=builder /app/dist /var/www
COPY --from=builder /app/meta.json /var/www
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

# Create a group and user so we are not running our container and application as root and thus user 0 which is a security issue.
RUN addgroup -S -g 1000 customgroup && \
    adduser -S -u 1000 -G customgroup -s /bin/sh customuser

# Change the owner of necessary nginx directories to our new user.
RUN touch /var/run/nginx.pid && \
  chown -R customuser:customgroup /var/run/nginx.pid && \
  chown -R customuser:customgroup /var/cache/nginx

# Serve on port 8080, we cannot serve on port 80 with a custom user that is not root.
EXPOSE 8080

# Tell docker that all future commands should run as the appuser user, we must use the user number here.
USER 1000

# Run nginx, setting daemon off makes nginx run in the foreground, which is necessary in docker.
ENTRYPOINT ["nginx","-g","daemon off;"]