# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

# Exercises

## 11.1 Warming up 

Please see separated [page](./exercise1.md) for essay. 

## 11.2 The example project

Tasks to do
- install dependencies `npm install` and after that `npm audit fix`.
- start the code in development mode `npm start`.
- run tests `npm test`. 
- lint the code `npm run eslint`.
- create a production build of the project `npm run build`.
- run the production version locally `npm run start-prod`. 

## 11.3 Hello world! and 11.4 Date and directory contents

Tasks to do
- add [workflow file](./.github/workflows/hello.yml)
- print Hello world, date time and ls

## 11.5 Linting workflow and 11.6 Fix the code

Task to do
- add eslint config to workflow
- fix issues in lint log 

## 11.7 Building and testing and 11.8 Back to green

Task to do 
- add build and test steps to workflow
- fix issues 

## 11.9 Simple end-to-end tests

Install Playwright with `npm install --save-dev playwright` and `npm install --save-dev @playwright/test`. Configure startup script so that application is started for the test runs.

Some debugging was needed and command `npx playwright install` to fix issues. After that test can run locally without issues. 

## 11.10 Deploying your application to Fly.io and 11.11 Automatic deployments

With tweaks mentioned in course page deployment from command line and github actions runs smoothly.

## 11.12 Health check

Health check code and config added and after that tested. 

## 11.13 Pull request

**Step by step** 
- create branch `git branch 11.13-Pull-request`.
- checkout that `git checkout 11.13-Pull-request`.
- do needed changes and commit
- push `git push --set-upstream origin 11.13-Pull-request`  
- create pull request in web UI
    - check that repo/fork is correct one
- review change/pull request 
    - check that repo/fork is correct one
- merge commit to main
- checkout main `git checkout main`
- pull changes `git pull`

## 11.14 Run deployment step only for the main branch

More practice with branches, pull request and merges. Workflow seem to work as expected. 

## 11.15 Adding versioning

Needed changes done and tested. 

## 11.16 Skipping a commit for tagging and deployment

