Read Me
------------------------------------------------
## Author ##

Ramkrishna.Bhandare


````
npm install 
````

```
npm i mocha

```

------------------------------------------------

##### Instructions for Running on local machine #############
```
Download latest chromedriver/msedgedriver.
Download latest selenium grid standalone. 
put both in one folder
Edit Environment Variables and add chromedriver/msedgedriver to 'path' variable

open command prompt from folder and run chromedriver/msedgedriver
open another command prompt and run selenium jar using the command "java -jar <Selenium jar name> standalone"

run the suite using command "npm run wdio:ed"
```


#### Runner Installation ####
```
npm install @wdio/cli
```


#### Run Test Cases ####
```
npm run wdio:ed --  --spec ./test/specs/billing.tc_064.spec.js
```
#### Run Config File #### 

```
npm run wdio:ed(as per settings in package.json) 
```
#### Instructions for generating Allure Report from command line ####

```
allure generate .\reports\allure-results\ --clean

allure open .\allure-report\
```

#### Add Prettier code formatting for project ####
```
Add from extensions. 
```

#### enabling Chance instead of faker
```
https://www.npmjs.com/package/chance
```

## Installing Oracle DB ##

```
npm i oracledb
```
