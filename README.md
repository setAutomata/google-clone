# Google search clone

This project is is a clone of google.com with working "All" and "Images" tab using Google Custom Search JSON API.

## Built with
* **Vite**: A fast, opinionated build tool for modern web development. 
* **React**: A JavaScript library for building user interfaces.

## Setup

1. **Clone and Install**
```bash
git clone https://github.com/setAutomata/google-clone.git
cd google-clone
npm i
```

2. **Create Programmable Search Engine. You can get all the info from https://developers.google.com/custom-search/v1/introduction**
   
3. **Create .env or .env.local file and edit:**
```
VITE_APP_API_ENDPOINT = https://www.googleapis.com/customsearch/v1
VITE_APP_API_KEY = <your google custom search JSON API key>
VITE_APP_CSE_ID = <your cse id>
```

4. **Run the app**
```bash
npm run dev
```
open [http://localhost:5173](http://localhost:5173) in your browser

