<!-- # Steps to Access Basic Lodash Methods in Node.js via VS Code

1. **Open VS Code**  
    Launch Visual Studio Code and open your Node.js project folder.

2. **Initialize npm (if not yet initialized)**  
    Open the terminal in VS Code and run:
    ```bash
    npm init -y
    ```

3. **Install Lodash**  
    In the terminal, install lodash using:
    ```bash
    npm install lodash
    ```

4. **Create a JavaScript File**  
    Create a new file, e.g., `app.js`.

5. **Import Lodash in Your File**  
    At the top of your file, add:
    ```js
    const _ = require('lodash');
    ```

6. **Use Basic Lodash Methods**  
    Example usage:
    ```js
    const arr = [1, 2, 3, 4];
    const reversed = _.reverse(arr.slice());
    console.log(reversed); // Output: [4, 3, 2, 1]
    ```

7. **Run Your Code**  
    In the terminal, execute:
    ```bash
    node app.js
    ```

8. **Check the Output**  
    View the results in the terminal.
 -->