FROM node:8
MAINTAINER Jurien Hamaker <jurien@superbuddy.nl>

ARG environment
ARG lint

EXPOSE 4200 49152 80
WORKDIR /opt/app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 0.26.1

RUN touch /etc/apt/sources.list.d/nginx.list
RUN echo "deb http://nginx.org/packages/debian/ jessie nginx" >> /etc/apt/sources.list.d/nginx.list
RUN echo "deb-src http://nginx.org/packages/debian/ jessie nginx" >> /etc/apt/sources.list.d/nginx.list
RUN curl http://nginx.org/keys/nginx_signing.key | apt-key add -
RUN apt-get update && apt-get install -y nginx

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d/angular.conf

RUN yarn global add @angular/cli typescript@~2.4.2

COPY package.json /opt/app/
COPY docker/build.sh /opt/app/
COPY docker/start.sh /

RUN chmod 775 /start.sh

RUN yarn cache clean
RUN yarn install --no-lockfile --force

COPY . /opt/app

RUN bash /opt/app/build.sh "$environment" "$lint"

CMD ["/start.sh"]