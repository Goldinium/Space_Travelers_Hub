# Space Travel Hub: Ometman and BEN
<a name="readme-top"></a>

<div align="center">
  <img src="./ometman-logo.png" alt="logo" width="140"  height="auto" /> and <h1>BEN (Goldinium)</h1>
  <br/>
  <h3><b>The Space_Travel_Hub: by Ometman and Ben</b></h3>
  <h5>"Space_Travel_Hub" is a dynamic website for space travelers and businesses. It is a pure JavaScript Extended application built on React library and Redux for state management. Space business owners can use it to manage mission bookings. Clients can make rocket and mission reservation, and also cancel a trip in a user profile page. The interface UI design is provided by Microverse. Both the rockets and missions data are from an API consumed to dynamically populate the rockets, missions and profile sections or pages. It is simple but nice and powerful. We trust you will enjoy it!
  
</div>

# 📗 Table of Contents
- [Space\_Travel\_Hub: Ometman and BEN](#space_travel_hub-ometman-and-ben)
- [📗 Table of Contents](#-table-of-contents)
- [📖 Space\_Travelers'\_Hub Application ](#-space_travelers_hub-application-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)


# 📖 Space Traveler's Hub Application <a name="about-project"></a>

**A Demo Video: Introduction to this Project**
--coming soon

>The project includes designs for two different screen sizes.

 - Mobile: up to 768px wide.
 - Desktop: 768px or wider.

>Project Brief :
 - It is built on a design by Microverse.
 - It is a single page App, powered by React, Redux tools and axios.
 - It displays 3 sections or pages: Rockets, Missions and Profile.
 - Content is dynamic, using React components and routes.
 - Dynamic State management was done with Redux.
 - Data is fetch using axios, with Redux ThunkAPI.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>Pure JSX</>
    <li>CSS</li>
    <li>Webpack</li>
    <li>A Microverse design</li>
    <li>Jest Testing Framework </i>
    <li>React Toolkit and Testing Library </i>
    <li>Base public API</li>
    <li>React and Redux </li>
    <li>Axios</li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li>Optionally: Deployable Using GitHub Pages</li>
    <li>Uses API and Github Servers</li>
  </ul>
</details>

<details>
  <ul>
    <li>Databases</li>
  </ul>
  <li>Currently, utilizes Public API Service entities.
</details>

### Key Features <a name="key-features"></a>

- **Conversion of a Wireframe real design using Pure JSX/***
- **Uses Jest testing and webpack bundled in the 'create-react-app**
- **A Dynamic Rockets, Missions and Profile pages**
- **The UI allows CRUD type funtionality**
- **Responsive Web Design: Desktop & Mobile**
- **Consumes public API for dynamically content and access**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Git
- An IDE (e.g. VS Code)
- A good modern Browser (eg: Chrome, Edge). 

### Setup

- Using Git Bash or any integrated terminal of you choice:
  - Open your code editor (e.g. VS Code).
  - At the terminal, clone this repository to your desired directory.
  - Make sure you have node (www.nodejs.org)
  - Run `npm intall` at the prompt
    - Make sure all dependencies( eg: webpack, webpack dev server, css-loader, sass-loader)

### Usage
To run the project locally, execute the following command:
- Run `npm run server` (You should see a success result)
- Now access the app on port 3000 by entering the following in your browser:
- http://localhost:3000

### Run tests

To run tests, run the following command:

**************
Initial Step:
**************
- `mkdir .github/workflows`
- copy the **linters.yml** file to the directory created above.
- touch .gitignore if not created already and add **node_modules/** to it.
- initialize npm to create package.json file by running the command: 
`npm i -y`     

(here i for install & -y for saying yes to all)

**************
For Stylelint
**************
- Run 
`npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x`
- Copy **.stylelintrc.json** to the root directory of your project.

- Run 
`npx stylelint "**/*.{css,scss}"`
on the root of your directory of your project.
- Fix linter errors.

*******
ESLint
*******
- Run 
`npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x @babel/preset-env@7.x  @babel/preset-react@7.x`
- Copy **.eslintrc.json** to the root directory of your project.
- Copy **.babelrc.json** to the root directory of your project.

- Run 
`npx eslint .`
on the root of your directory of your project to fix JS linter errors.

- For functionality testing, Run 
`npm test` or `npm run test`
- All test must pass without error  

### Deployment
You can deploy this project using:
- GitHub Pages from a specific branch (e.g. main). 
- You can also used any cloud service like gcloud or Azure.
- A deployed version can be found here:
[#] (Coming Soon)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

> ## Developed by: 

>> Omet Omeni (Ometman)

- GitHub: [@ometman](https://github.com/ometman)
- Twitter: [@twitterhandle](https://twitter.com/ometman)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/ometman/)
  
>> BEN (Goldinium)

- GitHub: [@goldinium](https://github.com/goldinium)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Rocket Search functionality**
- **Improved interactivity**
- **Changing UI - look and feel**
- **Improved Aesthetics & Design**
- **Location and Contact information**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Goldinium/Space_Travelers_Hub/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

As a tech enthusiast, your support is always appreciated. If you like this project please do let us know with your support in any way you see fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank especially [Microverse](https://www.microverse.org/) for inspiring this project & project guidelines. And, also thanks all friends for the encouragement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>
- **Can I fork this project?**
  - Yes, feel free to fork and knock yourself out :) . 

- **Can I share this project with others?**
  - Yes, you can share this project for any educational purposes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>
This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


