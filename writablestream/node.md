<!-- using core module fs and path


How to Run  
Create two files, `index.js` and `input.txt`, in the same folder. Fill them according to the code above.  
Open your terminal and navigate to that folder.  
Run the following command:
```bash
node index.js
```

Expected Output  
In your terminal, you will see a series of logs showing each chunk being processed, ending with a completion message.

```
Receiving and writing chunk: "Lorem ipsum dol"
Receiving and writing chunk: "or sit amet, co"
Receiving and writing chunk: "nsectetur adipi"
...and so on...

File read and write process completed.
```

`output.txt` File  
A new file named `output.txt` will appear in your folder. If you open it, the content will be the text from `input.txt`, but with a new line every 15 characters.

```
Lorem ipsum dol
or sit amet, co
nsectetur adipi
scing elit, se
d do eiusmod t
empor incididun
t ut labore et
...and so on...
``` -->