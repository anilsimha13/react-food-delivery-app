# React Food Delivery App
React is a _Javascript Library_ developed by _Facebook_

## Day - 1

### Things to remember

- VS code use Emeet (_Intellisense_)
- Browsers has Javascript engine in it
- CDN (_Content Delivery Network_)
- Cross-Origin
  - _refers to an attempt by a web browser to access a resource (like an API or a file) from a different origin than the one the web page was served from_
- React.createElement() is just an Javascript Object
- If you want to create the html elements at same level(Sibilings), you can use it by having Square brackets as [below code](#render-using-react-in-html-traditional-approach)

### Setup React

- CDN Links (_Not a recommended way_)
  - Update just above the closing tag of Body in html

### Code to remember

- Render using Javascript in html (_Traditional Approach_)

```java
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World!🌏";
        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>
```

- Render using React in html (_Traditional Approach_)

```java
  <script>
      const heading = React.createElement(
        "div",
        { id: "parent", attribute: "value" },
        [React.createElement('h1',{},"Hello World!🌏 🧠"), 
        React.createElement('h5',{},'Creating the sibiling elements using Square Brackets🥹[ ]')]
      );
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);

  </script>
```
- Props (_elements, keys, children,attribures_)
![Props Screenshot](Screenshots/1.png)

## Day - 2

### Things to remember
- NPM, Node Package Manager ❌ 
- Bundlers
  - Parcel
  - Vite
  - Webpack
- Parcel
  - `npm install parcel`
  - Dev Build
  - Local Server
  - HMR - Hot Module Replacement
  - File Watching Algorithm
  - Caching > Faster Builds
  - Image Optimization
  - Minification
  - Bundling
  - Compressing
  - Code Splitting
  - Differential bundlings
  - Error Handling
  - HTTPs
- Two Dependencies
  - Dev Dependencies
    - Required during Development phase
  - Normal Dependencies
    - Required during Production phase
- "parcel": "^2.16.0"
  - ^ Carrot symbol is for Minor upgrade
  - ~ Tilda symbol is for Major upgrade
### Setup React
1. `npm init`
2. `npm install -D parcel`
3. `npx parcel index.html`
4. `npm install react`
5. `npm install react-dom`

### Code to remember
```json
//Package.json
  "devDependencies": {
    "parcel": "^2.16.0"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "browserslist": [
    "last 2 Chrome version"
  ] 

```



