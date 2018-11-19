#!/bin/sh

function write_file {

cat > .env << EOF1
APP_URL = $1
EOF1

}

function post_processing {
  npm run build
}
 
case $TRAVIS_BRANCH in
  master)
    write_file $APP_URL_PROD
    post_processing
    ;;
  develop)
    write_file $APP_URL_DEV
    post_processing
    ;;
  *)
    echo "Branch [$TRAVIS_BRANCH] not included in allowed build branches. Exiting."
    ;;
esac
