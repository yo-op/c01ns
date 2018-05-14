module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": { 
        "import/resolver": { 
            node: { 
                paths: ["src"] 
            }
        } 
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb-base"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 1,
        "no-unused-vars": "warn",
        "comma-dangle": 0
    }
};