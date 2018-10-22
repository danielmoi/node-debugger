# Debugging Node Apps

## 1. Basic Node App
### 1.1. Chrome
- Start Node application (`yarn inspect`)
- Open `http://localhost:1337`
- Open Chrome Dev Tools
- Click on the green Node.js icon (Open dedicated DevTools for Node.js)
- Set a breakpoint on line 8
- App will have stopped at line 8
- Use the actions to step through the code

### 1.2. VS Code (Setup)
- Close Chrome tab
- Click on line 8 to set a red dot
- Open Debugging Panel (Cmd + Shift + D)
- index.js 8 now visible in the Breakpoints section

### 1.2.1 VS Code ("Launch Node Program")
- Create configuration
  - Debug > Add Configuration > Node > Launch Program
- Click on the Green triangle icon
- VS Code will start the app inside itself and open the Debug Console
- `curl localhost:1337`
- App will have stopped at line 8
- Use the actions to step through the code
- Click the red "Disconnect" icon to disconnect

### 1.2.2 VS Code ("Attach by process ID")
- Start server `yarn inspect`
- Create Configuration
  - Debug > Add Configuration > Node > Attach by Process
- Select the processId (which in our case is the one with `watchexec`)
- Click the green triangle ("Start debugging")
- Debugger panel should show "App listening on port 1337"
- `curl localhost:1337`
- App will have stopped at line 8
- Use the actions to step through the code
- Click the red "Disconnect" icon to disconnect



------------------------------------------------------------
## 2. Node + Docker

------------------------------------------------------------
## 3. Typescript

------------------------------------------------------------
## 4. Typescript + Docker


------------------------------------------------------------
## References
https://scotch.io/tutorials/debugging-node-code-in-vs-code