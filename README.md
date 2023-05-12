# LEA Typology GUI

### Objective:
- provide an interactive UI for an LEA Typology database

### Structure:
- a Vue router is used to toggle between 5 views that each make an API call, parse, and store data, and display it in the form of a data table and visualization tools

### Views:
- Variables: a data table of variables used for LEA Typology with their descriptions, sources, and datasets they are included in
- Databases: a data table displaying each database used for LEA Typology
- Agency: local police agency information with a map and data visualization tools for statistics
- State: state police agency information with a map and data visualization tools for statistics
- About: general app overview
### Components, libraries, and APIs:
- SearchAutoComplete: allows autocompleting in forms
- TagInput: allows tags to be added to forms
- Typology API: makes an API call and returns the data in JSON format
- Vue-good-table: data table library allowing searching, sorting, and formatting 
- ChartJS: library displaying data visualization tools such as graphs and charts
- Google Maps API: shows an interactive Google map based on a location input
### Backend API:
- For this prototype version: the API used is a Node.js app with 5 endpoints that stores and retrieves data (a few LEA Typology data tables) in JSON format
- For future uses: the API can be changed to retrieve data from PostgreSQL/SQL database in JSON format. If the data is retrieved in a different format or uses different datasets than the ones in the prototype API, the code for data visualization tools may need to be updated.

# typology-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
