#!/bin/bash

if [ ! -d /var/log/nginx ]; then
	mkdir /var/log/nginx;
fi
if [ ! -f /var/log/nginx/access.log ]; then
    touch /var/log/nginx/access.log
fi
if [ ! -f /var/log/nginx/error.log ]; then
    touch /var/log/nginx/error.log
fi

# cd to the project
cd /opt/app || exit

echo "ENVIRONMENT"
echo "$NODE_ENV"

# if in debug mode, start the serve command for auto reload.
if [ "$NODE_ENV" == "development" ] ; then
	yarn cache clean
	yarn install

	echo "AOT"
	echo "$AOT"

	echo "running ng-cli" 
	ng serve --host=0.0.0.0 --env=$NODE_ENV --aot=$AOT
else	
	echo "running nginx"
	nginx -g 'daemon off;'
fi