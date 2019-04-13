#!/bin/bash

yarn tsc --watch &
yarn nodemon -r dotenv/config ./dist/index.js
