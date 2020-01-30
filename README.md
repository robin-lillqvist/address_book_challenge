## Adressbook Challenge

Userstories:

- Create a new contact

    As a user
    To stay in touch with my friends
    I would like to be able to create a contact for them in my address book

- List contacts

    As a user
    In order to contact my friends
    I would like to be able to view a list of my saved contacts

- Update existing contacts

    As a user
    In order to keep my friends' contact details accurate
    I would like to be able to update them when needed

- Delete existing contacts

    As a user
    In order to keep my contact list up to date
    I would like to be able to delete contacts
    
    
    
    To run this  you need to 

        - yarn init
        - yarn add cypress --dev
        - yarn add superstatic 
        
        and modify your package.json to include
                  "devDependencies": {
                    "cypress": "^3.8.3"
                    },
                  "dependencies": {
                    "browser-sync": "^2.26.7",
                    "superstatic": "^6.0.4" 
                    },        
                 "scripts": {
                    "start": "superstatic src --port 3001",
                    "start:hot": "node server.js",
                    "cy:open": "yarn start & cypress open" 
                    }
