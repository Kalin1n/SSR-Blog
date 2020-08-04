module.exports = { 
    root : true, 
    parser : "@typescript-eslint/parser", 
    parserOptions : { 
        ecmaVersion : 5, 
        sourceType : "module", 
        ecmaFeatures : { jsx : true, }
    }, 
    globals : { 
        React : "writable"
    }, 
    settings: { 
        react : { 
            version : "detect"
        }
    }, 
    env : { 
        node : true, 
        browser : true
    }
}