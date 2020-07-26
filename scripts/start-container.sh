#!/bin/bash

ENV_PREFIX="REACT_APP_"
ARGS=

for i in $(env); do
  KEY=$(echo $i | awk -F"=" '{print $1}')
  if [[ $KEY =~ $ENV_PREFIX ]]; then
    ARGS="${ARGS} -v ${KEY} "
  fi
done

JSON=$(json_env --json $ARGS)

echo " ==> Writing ${CONFIG_FILE_PATH}/env.js with ${JSON}"

echo "window.__env = ${JSON}" >${CONFIG_FILE_PATH}/env.js

exec "$@"
