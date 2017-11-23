#!/bin/bash
cd /opt/app || exit

PASSED_ENV=$1
PASSED_LINT=$2

ENVIRONMENT=${PASSED_ENV:-'production'}
LINT=${PASSED_LINT:-'false'}
TARGET=${NODE_ENV:-'production'}


if [ "$ENVIRONMENT" == "master" ] ; then
	ENVIRONMENT='production'
fi

echo "LINT: ${LINT}"
echo "ENVIRONMENT: ${ENVIRONMENT}"
echo "TARGET: ${TARGET}"

echo "NG VERSION"
ng version

echo "TSC VERSION"
tsc --version

echo "NGINX VERSION"
nginx -v

if [ "$LINT" == "true" ] ; then
	npm run lint || {
		echo 'Linting failed' ;
		exit 1; 
	}
fi

if [ "$ENVIRONMENT" == "release" ] || [ "$ENVIRONMENT" == "development" ] || [ "$ENVIRONMENT" == "production" ] || [ "$ENVIRONMENT" == "production-ah" ] ; then
	echo "Building application"
	ng build --aot --env=$ENVIRONMENT --target=$TARGET
else
	echo "Not building application"
fi