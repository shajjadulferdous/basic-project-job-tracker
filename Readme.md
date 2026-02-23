## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### getElementById
- uses id 
- return only one element
- NoT Live (it does not automatically update if the DOM changes)

### getElementsByClassName

- Return HTML collection
- use className
- live collection

### querySelector
- Ruturn 1st matching element 
- use full css selector
- Not live (it does not automatically update if the DOM changes)

### querySelectorAll
- Return nodelist
- use full css selector
- Not live (it does not automatically update if the DOM changes)

## 2. How do you create and insert a new element into the DOM?

i . we can create element by using createElement Method - one of example is -

const element = document.createElement('div');

ii. we can insert value into the element by using innterHtml task 
 
 element = `<div> hello world </div>`;

iii. we can insert into the dom by using appendChild method

document.body.appendChild(element);

## 3. What is Event Bubbling? And how does it work?

Event Bubbling refers event starts from target element and goes upward to parent element;

it goes like - 
child -> parent -> grandparent -> document
### How it works
When an action (like a click) occurs, the browser follows a specific path. While the Bubbling phase is what we usually focus on, it is actually the final part of a three-step process:

- Capturing Phase: The event starts at the window and moves down to the target.

- Target Phase: The event reaches the element you clicked.

- Bubbling Phase: The event travels back up from the target to the window.

```html
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me!</button>
  </div>
</div>

if you click on click me then it goes to child(target) -> parent -> grandparent- > document
```
## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a design pattern in JavaScript where instead of adding an event listener to every individual child element, you add one single listener to a parent element.

Because of Event Bubbling, any event triggered on a child element travels up to the parent. The parent can then identify which child was clicked using the event.target property.


### usefulness
- Adding 1,000 listeners to 1,000 list items consumes a lot of memory. Adding 1 listener to the parent  is much lighter.

- it makes mangaging complex UI much simpler


## 5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() : is a method that does not stop event propagation but it say's to  stop default behaviour like when we submit a form then it automatically refresh the page but when we use preventDefault method it will remove the automatic behaviour

stopPropagation() : Event Bubbling refers event starts from target element and goes upward to parent element . stopProgation() remove Event Bubbling .it does not stop default behaviour
