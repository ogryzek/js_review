#JavaScript Review: Review Session 2
This past week, we looked at JavaScript, we looked at NodeJS, and we developed a JukeBox app.  
  
Let's take what we've learned and apply it to what we know about OOP. That is, let's translate our Pacman, Ghost, and Ball classes from [Ruby](https://github.com/ogryzek/oop_review) into JavaScript.  
  
## Ball Class
Our `Ball` class should have a `ball_type` attribute whose value can be either regular or super,
```javascript
// ball.js
var Ball = function(ballType) {
  this.ballType = ballType === undefined ? "regular" : "super";
};
```
## Ghost Class
Now that we are comfortable (somewhat) with classes in JavaScript, let's implement a Ghost class which sets its color to red, pink, white, or yellow randomly on instantiation. Also, let's use javascript's `prototype` in our code.
```js
// ghost.js
```
