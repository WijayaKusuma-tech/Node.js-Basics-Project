<!-- # Steps to Access Basic Modularization Methods in Node.js via VS Code

1. **Open VS Code**  
    Launch Visual Studio Code on your computer.

2. **Create a New Project Folder**  
    Make a new folder for your Node.js project and open it in VS Code.

3. **Initialize Node.js Project**  
    Open the terminal in VS Code and run:
    ```bash
    npm init -y
    ```

4. **Create Module Files**  
    - Create a new JavaScript file, e.g., `math.js`.
    - Define your functions and export them using `module.exports`:
      ```js
      // math.js
      function add(a, b) {
         return a + b;
      }
      module.exports = { add };
      ```

5. **Import and Use the Module**  
    - Create another file, e.g., `app.js`.
    - Import the module using `require` and use its methods:
      ```js
      // app.js
      const math = require('./math');
      console.log(math.add(2, 3)); // Output: 5
      ```

6. **Run the Application**  
    In the terminal, execute:
    ```bash
    node app.js
    ```

7. **View the Output**  
    Check the terminal for the result of your modularized function.

---
**Note:**  
You can create and import multiple modules as needed to organize your code better. -->