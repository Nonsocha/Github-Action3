## IMPLEMENTING CONTINOUS INTEGRATION 
### Implementin Continous Integration With Github Action
  In this module we would delve into more advanced aspect of Github Action , Learning how to configur builsd matrices for testing for testing across multiple enviroments and integrating essentialcode quality checks.This module is designed to enhance skills in automating and improving  the quality of software development.



  ### Pre-requisites:
  
  #### 1. Proficiency in YMAL:
* Basic Understanding of ymal file
* Familarity withwritting and interpreting of **YMAL** file ,As a gith action workflow are defined in **YMAL**

### 2. Experience with Github and Github Actions:
   * Basic Knowledge of how to use Github,include creating repository aand push code.
   * A Foundational understanding of github action and How it works

### 3 . Understand Node.js and npm
 * Experience Node.js as the projest example are based on Node.js enviroment
 * Familarity with npm for managing node.js dependencies project
  

### 4.  Familarity with software Testing Concept

* Basic Knowledge of software testing principle  
* Understanding of automated testing and its role in CI/CD 
    
### LESSON 2 Configuring Build Matrices
  #### Objectives:
  * Implement matrix build to test across multiple enviroment or versions
  * Manage Build dependencies efficiently

### Steps:
 **1 Parallel and Matrix Builds**

 ```
    
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [16.x, 18.x, 20.x]

```
**2 . Managing and Build Dependencies**
  
* Handling dependencies and services required for build process is crucial

  ```
    - name: Cache Node.js modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
   ```

### Lesson 3 Integrating code quality and checks

**Objectives**
 
 * ntegrate code analysis into Github Action Workflow.
 * Configure Linters and static code analyzers for maintaining code quality

**Steps**
 
 **1 Create a file called eslintrc.json with the content below:**
 ```
   {
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
     "no-unused-vars": "warn"
     },
     "ignorePatterns": ["node_modules/", "public/"]
    }
  ```

 **2 Create a file called eslintignore and put the node_module and public folder inside**
 
 **3. After saving the esilintignore Run** 
 
 ```
   npx eslint . --ext .js,.jsx,.ts,.tsx
```

**4. In your GitHub Actions YAML (inside .github/workflows/ci.yml or similar), add a linting step after dependencies:**

```
  - name: Run ESLint
  run: npx eslint . --ext .js,.jsx,.ts,.tsx
```