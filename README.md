# bomb-dashboard-Vishal_Thakur

# Project Desciption

 This project is about creating an investment dashboard for bomb.money, a DeFi product that allows users to earn rewards by staking tokens.The dashboard will be a new page added to the existing frontend of the site, which will display relevant information such as price, supply, returns and functions related to the user's investment. The project will require frontend development skills, web3 integration skills, and adaptability to learn from the original codebase. 
 
The dashboard UI design is provided in Figma, and the codebase is available for download. The main tasks are to build the dashboard on a new route, fetch and show accurate data from the original codebase, and call and execute the same functions as in the original codebase when users interact with the dashboard buttons.

The project will also use Metamask as a browser extension to connect with the Ethereum network.

## Setup

Install the dependencies

```shell
yarn install
yarn
yarn start
```

Make sure you've configured your IDE with `prettier`.

You can reformat the project by running

```shell
npx prettier --write .
```

Possible Error:
- SSL error caused by latest Node version possibly
- In package.json replace
 ```
 "start": "react-scripts start",
    "build": "react-scripts build",
 ```
 with
 
 ```
 "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
  ```  
