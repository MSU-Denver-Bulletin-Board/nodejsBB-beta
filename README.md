This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Firebase LocalHost
Following this guide, we were able to set up a test web application that connects to firebase using nodejs: https://firebase.google.com/codelabs/firebase-nextjs#0

Install nodejs here https://nodejs.org/en/download


If you're cloning this repo to test on your own, please follow the guide to connect your firestore database to your repo 

make sure you have npm and run these commands

```
npm install firebase
npm update -g firebase-tools
npm install -g firebase-tools
```

If you are trying to connect to a repo that already has firebase setup simply

```
firebase login
```

Once you are logged in and connected you can skip to step 5 of the guide to generate a private key, and enable webframeworks by
```
firebase experiments:enable webframeworks
```

Then to run the webapp on localhost using firebase hosting run
```
firebase emulators:start --only hosting
```

If you dont have a repo connect to firebase you will need to follow step 5 of the guide completely

## Setting Up firebase
...



## Getting Started
**Using node js alone, will not connect to firebase what this is**
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
