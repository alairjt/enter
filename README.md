# enter
AngularJS Directive for to execute command on press enter

### Install

**With Bower**
* Install the dependency:

   ```javascript
   bower install enter --save
   ```
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['enter']);
   ```

### How To Use

1. **Add enter plugin after your AngularJS.**

   ```html
   <script src="angular.min.js"></script>
   <script src="enter.min.js"></script>
   ```
2. **Add enter module dependency to your app.**

   ```javascript
   angular.module('yourApp', ['enter']);
   ```
3. **Add directive to input.**

   ```html
   <input id="input-enter" on-enter="vm.count = vm.count + 1" placeholder="Press enter" type="text" /><
   ```