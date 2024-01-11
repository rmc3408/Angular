

### Course Project



### Create app for section 1 and 2 - Basics
` ng new section1 --no-strict --standalone false --routing false --skip-tests `

### Create component
` ng generate component servers --skip-tests`


#### Errors about hot reoloading in HTML file
angular.json
```
"serve": {
    "configurations": {
       "development": {
          "liveReload": true
       }
    }
}
```
