<!-- # Steps to Access Basic Filesystem Methods in Node.js Using VS Code

1. **Open VS Code**  
    Launch Visual Studio Code and open your project folder.

2. **Create a JavaScript File**  
    Create a new file, e.g., `filesystem.js`.

3. **Import the `fs` Module**  
    At the top of your file, add:
    ```js
    const fs = require('fs');
    ```

4. **Read from `notes.txt`**  
    Use the following code to read the file:
    ```js
    fs.readFile('notes.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

5. **Write to `notes.txt`**  
    To write data:
    ```js
    fs.writeFile('notes.txt', 'Your content here', (err) => {
      if (err) throw err;
      console.log('File written successfully');
    });
    ```

6. **Append to `notes.txt`**  
    To add content without overwriting:
    ```js
    fs.appendFile('notes.txt', '\nAdditional content', (err) => {
      if (err) throw err;
      console.log('Content appended');
    });
    ```

7. **Run Your Script**  
    Open the terminal in VS Code and run:
    ```
    node filesystem.js
    ```

8. **Check `notes.txt`**  
    Verify the changes in `notes.txt` within your project folder.
 -->