#!/bin/sh

function echoBanner {
  echo "
  ----------------------------
  $1
  ----------------------------
  "
}

function makeAwsDir {
  echoBanner "Creating .aws directory."

  mkdir -p ~/.aws

cat > ~/.aws/credentials << EOF1
[default]
aws_access_key_id = $AWS_ACCESS_KEY
aws_secret_access_key = $AWS_SECRET_TOKEN
EOF1

  echo ".aws direction successfully created."
}

function deploy {
  makeAwsDir
  echoBanner "Initiating deploy process."

  aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://$1

  echo "Deploy process successfully completed."
}

case $TRAVIS_BRANCH in
  master)
    deploy $S3_PROD_BUCKET
    ;;
  develop)
    deploy $S3_DEV_BUCKET
    ;;
  *)
    echo "Branch [$TRAVIS_BRANCH] not included in allowed deploy branches. Exiting."
    ;;
esac
