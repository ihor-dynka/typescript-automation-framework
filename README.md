# TS Automation Framework

## To run the tests ##

Download all required dependencies

    `npm install`

Specify environment variables. ENVIRONMENT is required (qa, uat)


API test:

    `npm run apiTest`

UI test:

chromedriver:

    `npm run webTest`

selenoid:

    `docker pull selenoid:$BROWSER_NAME:$BROWSER_VERSION` and update `/config/selenoid/browser.json` file
    `npm run startSelenoid`
    `npm run webTest`
    `npm run stopSelenoid`


## Stack of tools and frameworks:
1. Programming language - **Typescript**
2. Build and package management - **NPM**
3. CI tool - **Jenkins**
4. Test framework - **Mocha**
5. Assertion library - **Chai**
6. Test Reporting - **Allure**, **Report Portal**
7. Selenium server - **Selenoid**
8. UI and Mobile automation - **Webdriver.io**
9. API automated testing - **Got**


##Jenkins
### Plugins
- NodeJS
- git Parameter

## Architecture diagrams

### Flow diagram
![Flow diagram](./diagrams/flow_diagram.png?raw=true)

### Architecture diagram
![Architecture diagram](./diagrams/architecture_diagram.png?raw=true)







