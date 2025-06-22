<!-- # Steps to Access Basic Events Methods in Node.js Using VS Code

1. **Open VS Code**  
    Launch Visual Studio Code on your computer.

2. **Create a New Project Folder**  
    Open a new folder for your Node.js project (`File > Open Folder`).

3. **Initialize Node.js Project**  
    Open the terminal (`Ctrl + ``) and run:
    ```bash
    npm init -y
    ```

4. **Create a JavaScript File**  
    Add a new file, e.g., `events-demo.js`.

5. **Import the Events Module**  
    At the top of your file, add:
    ```js
    const EventEmitter = require('events');
    ```

6. **Create an EventEmitter Instance**  
    ```js
    const emitter = new EventEmitter();
    ```

7. **Register an Event Listener**  
    ```js
    emitter.on('eventName', () => {
      console.log('Event triggered!');
    });
    ```

8. **Emit the Event**  
    ```js
    emitter.emit('eventName');
    ```

9. **Run the File**  
    In the terminal, execute:
    ```bash
    node events-demo.js
    ```

10. **Check the Output**  
     You should see `Event triggered!` in the terminal.

---
**Note:**  
You can explore other methods like `.once()`, `.removeListener()`, and `.off()` for advanced event handling. -->