#!/bin/sh

function echoBanner {
  echo "
  ----------------------------
  $1
  ----------------------------
  "
}

function aws {
  curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
  unzip awscli-bundle.zip
  ./awscli-bundle/install -b ~/bin/aws
  sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

  makeAwsDir
}

function makeAwsDir {
  echoBanner "Creating .aws directory."

  mkdir -p ~/.aws

cat > ~/.aws/credentials << EOF1
[default]
aws_access_key_id = $AWS_ACCESS_KEY
aws_secret_access_key = $AWS_SECRET_TOKEN
EOF1

  echo ".aws directory successfully created."
}

function deploy {
  echoBanner "Initiating deploy process."

  aws --version
  aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://$1

  echo "Deploy process successfully completed."
}

case $TRAVIS_BRANCH in
  master)
    aws;
    deploy $S3_PROD_BUCKET;
    ;;
  develop)
    aws;
    deploy $S3_DEV_BUCKET;
    ;;
  *)
    echo "Branch [$TRAVIS_BRANCH] not included in allowed deploy branches. Exiting."
    ;;
esac
