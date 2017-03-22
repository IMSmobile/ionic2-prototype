# Ionic 2 (Cordova)  Prototype

Evaluation Prototype for IMSmobile/app.  
Progress is tracked in [IMSmobile/app/issue/3](https://github.com/IMSmobile/app/issues/3)

## Setup
Basic Setup according to [Install Ionic 2](https://ionicframework.com/docs/v2/intro/installation/).  
As IDE I used [Visual Studio Code] out of the box(https://code.visualstudio.com/)

## Inspiration
Fundamentals: https://ionicframework.com/docs/v2/components/#overview
Unit Testing: https://www.joshmorony.com/introduction-to-testing-ionic-2-applications-with-testbed/
End to End Testing:  https://scotch.io/tutorials/react-native-app-with-authentication-and-user-management-in-15-minutes  

## Contributors
https://github.com/driftyco/ionic2/graphs/contributors


## Project Change Log
https://github.com/driftyco/ionic/blob/master/CHANGELOG.md

## Ecosystem evaluation
Ionic is free but prices can raise when using their serivce. The service thus is free in development but start to coast money in production -> https://ionic.io/pricing helps to estimate money


### Name global players using it (req 53) 
I can't really find global players. The Ionic 2 framework is still quite new on the marekt. There is a link http://showcase.ionicframework.com/apps/top to th best apps created with ionic 2.

Cordova is widley used by some bigger companies / institutation. For example Wikipedia, IBM and Microsoft Co

But when trying to register for the paid servcie of ionic one can see a lot of bigger companies as reference.



### Challenge documentation: Report on how useful it was when developing prototype app, ist there a upgrade guide, do example work (try three)
The official documentation for ionic and also the one for cordova was really helpfull. All tasks that I needed to do (expect for unit testing) have been covered in th online documentation or in a professional blog 


### Challenge community: how useful were the search results (req 52)
All cordova realted problmes could be found very easly on the internet. Problem was that ionic 2 is still quite new are erros are community is not to big on this one. But as it is based on angular and cordova the problems that are according to angular or cordova have been covered really good.

### Calculate expected financial cost for project (req 50)
Ionic 2 and Angular are Opensource Project licensed under the MIT License.
Cordova is Opensource Project licensed under the Apache License.

Ionic has online desing tool (http://ionicframework.com/getting-started/) to earn money.

Some features are in a paid license 2000 US$ per dev and year. 

Some Examples
- [Expo](https://expo.io/)
- [Appetize.io](https://appetize.io/)

### Apps can also run in a Browser (req 3)
Yes, it is designed to run in a broser.

### Has been shown to work with CI and CD (req 9, 10)
#### CI
Just run npm commands in any kind of ci (for example travis)
There is at least this blog article about it but it's with ionic 1
http://blog.samuelbrown.io/2015/10/20/continuous-delivery-with-ionic-ios-and-travisci/ there isn't an out of the box solution propapbly because testing is a thing that is not nativly integrated inti ionic

#### CD
Ionic has a bunch of services one is for deploying the app https://docs.ionic.io/services/
https://docs.ionic.io/services/deploy/

### Loading Icon
Ionic has a bunch of loading icon possiblities to inform the user that something is going on
See http://ionicframework.com/docs/v2/api/components/loading/LoadingController/

### Exception Handling / Global Exceptionhandling
Default and Customaziable Error Handler http://ionicframework.com/docs/v2/api/util/IonicErrorHandler/c2/63196/3
mplemented from Angulars Error Handler https://angular.io/docs/ts/latest/api/core/index/ErrorHandler-class.html

Errors can be shown with for example http://ionicframework.com/docs/v2/api/components/alert/AlertController/

###  Pin Code Protection
I wasn't really able to find how to read screen lock type. There might be a cordova plugin or we might would have to write one.

###  Dynamic Fields
As we are using Angular we need to find a solutin within angular. It seems to be possbile but it might be tricky.
See links
http://stackoverflow.com/questions/31579909/add-more-button-for-generating-dynamic-form-inputs-using-ionic-framework
http://stackoverflow.com/questions/15296949/how-can-i-use-angular-to-output-dynamic-form-fields


### Asynchronus Upload
Push Notifiaction Ionic http://ionicframework.com/docs/v2/native/push/  done by phonegape https://github.com/phonegap/phonegap-plugin-push


File Transfer Upload with Ionic https://github.com/dtaalbers/ionic-2-examples/blob/a501d45bd34de481bc8909ed129247f7574f877a/file-transfer-upload/app/pages/uploading/uploading.ts


### Async Uploading (App Switch)
I was not able to find out if this is possible. It is indeed possible to register async tasks but I couldn't find and explicit example

### Network Connection Loss
https://github.com/apache/cordova-plugin-network-information

