#!bin/sh
docker -H tcp://$1:2375 build -t yoothubui .
