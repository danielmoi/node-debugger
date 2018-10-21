# Debugging Node Apps

## Basic Node App
- Start Node application (`yarn inspect`)
- Open `http://localhost:1337`
- Open Chrome Dev Tools
- Click on the green Node.js icon (Open dedicated DevTools for Node.js)
- Set a breakpoint on line 8
- App will have stopped at line 8
- Use the actions to step through the code

## VS Code ("Launch Node Program")
- Click on line 8 to set a red dot
- Open Debugging Panel (Cmd + Shift + D)
- index.js 8 now visible in the Breakpoints section
- Create configuration
- Debug > Add Configuration
- Select Node
- Click on the Green triangle icon
- VS Code will start the app inside itself and open the Debug Console
- App will have stopped at line 8
- Use the actions to step through the code

## VS Code ("Attach by process ID")
-