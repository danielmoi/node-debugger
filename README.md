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
- Click on line 8 to set a red dot
- Open Debugging Panel (Cmd + Shift + D)
- index.js 8 now visible in the Breakpoints section

### 1.2.1 VS Code ("Launch Node Program")
- Create configuration
- Debug > Add Configuration
- Select Node
- Click on the Green triangle icon
- VS Code will start the app inside itself and open the Debug Console
- App will have stopped at line 8
- Use the actions to step through the code

### 1.2.2 VS Code ("Attach by process ID")


------------------------------------------------------------
## 2. Node + Docker

------------------------------------------------------------
## 3. Typescript

------------------------------------------------------------
## 4. Typescript + Docker