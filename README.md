# Insquoo Images


This webapp is built with react and uses redux as its state management. It fetches images using Unsplash API.  



**Install Dependencies**

```
npm install
```

**Start the development server**

```
npm start
```

**Build the production files**

```
npm run build
```

**Deploy on surge**

```cd build
surge
```

## TODO: Enter your unsplash access key inplace of XXXXXX in /views/tabOne.js inside fetch

```
fetch("https://api.unsplash.com/photos/random/?client_id=<XXXXXXX>&count=15")
```
