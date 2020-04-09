This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Inside the pages you can find two pages:
    - `pages/index.js` in this page you will find an example of list of published contents
    - `pages/top-site/[publicId]` in this page you will find an example of a published content

## Before to start
Before to start with this starter project you will need:

    - an active ContentChef subscription and an active space 
    - your spaceId, spaceApiKey and the ContentChef api url (you can get those information in your space home inside the ContentChef dashboard app) 

## STEP

    1) publish to stage your all your contents inside the ***Starter Repository***
    2) install @contentchef/contentchef-node (needed to retrieve contents from ContentChef) npm install --save @contentchef/contentchef-node
    3) create a support class for contentChef 
    4) create a component layout that will wrap your next pages
    5) create a component a card that will handle your contentchef search data
    6) inside the page ***pages/index.tsx*** implement the next method ***getServerSideProps*** (used to retrieve ContentChef data) and add logic inside component to show your ContentChef search data
    7) create a new folder inside the pages folder and call it ***top-sites*** inside the folder a file named ***[publicId].js***
    8) inside the file ***[publicId].js*** implement the next method ***getServerSideProps*** (used to retrieve ContentChef data) and add logic inside component to show your ContentChef get data

## Learn More

To learn more about ContentChef and Next.js, take a look at the following resources:

- [ContentChef Site](https://contentchef.io) - to know more about ContentChef
- [ContentChef Documentation](https://docs.contentchef.io/) - learn about ContentChef features
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


