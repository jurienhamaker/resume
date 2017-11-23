cp docker/Dockerfile .
docker build -t kingsdev/resume:latest --build-arg environment=production --build-arg lint='false' --no-cache=true .
docker push kingsdev/resume:latest
rm -rf Dockerfile