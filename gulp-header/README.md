- npm start -- --versionType=major
- npm start -- --versionType=minor (default)
- npm start -- --versionType=patch/fix



# Delete all containers
docker rm $(docker ps -a -q)
# Delete all images
docker rmi $(docker images -q)