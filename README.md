# Lesson 3.3 - Events

## Event Handlers
- Event handlers are JavaScript functions that respond to events, making web pages interactive.
- It’s similar to a doorbell ringing when someone's at the door.

## Common Events:
- **Click Events**: Clicking a button with the mouse.
- **Key Press Events**: Typing on a keyboard.
- **Mouse Over Events**: Hovering over an element.
- **Form Submission Events**: Submitting a form.

## .addEventListener Method
- `.addEventListener` is the preferred way for adding event listeners in JS. It keeps JS separate from HTML for cleaner code.
- Allows you to add multiple listeners to a single event.
  
### Example:
```javascript
element.addEventListener('click', function() { 
    alert('Hello, World!');
});
```