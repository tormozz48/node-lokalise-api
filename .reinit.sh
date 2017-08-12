#!/usr/bin/env bash

set -e

# For *nix systems, this should work

# get the current directory without path
app=${PWD##*/}
read -p "Name the project: ($app): " appname
appname=${appname:-$app}

sed -i "s/typescript-starter-node/$appname/" package.json
sed -i "s/typescript-starter-node/$appname/" README.md

# reset git repo
rm -rf .git # remove reference to old repo
git init # initialize a new git repo
echo "git repo has been reset - please configure git username/email, like so"
echo ""
echo "git config user.name \"John Doe\""
echo "git config user.email john@doe.com"
echo ""

# git commit -m "Big Bang"

read -p "Reinitialization of this repo is complete. Destroy .reinit.sh? (Y/n): " response
respose=${response:-y}
case $response in
  [yY])
    rm ./.reinit.sh
    echo "Deleted ./.reinit.sh"
    ;;
  *)
    echo "Preserving ./.reinit.sh"
    ;;
esac

# Now add all remaining files into new repo.
git add . --all

# install dependencies and build the bare project.
npm install
npm run build

# go forth and make a brave new package...
