FROM node:14

# Create app directory
WORKDIR /server

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /server

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


EXPOSE 4500

CMD [ "npm", "start" ]
