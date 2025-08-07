#!/bin/bash


git pull 
sleep 5
STATUS=$(git status -s)
if [ -n "$STATUS" ]; then
    echo "$STATUS"
    echo "commiting updates"
    git add .
    git commit -m "autocommit"
    git push origin
fi

