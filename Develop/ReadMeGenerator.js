function ReadMeGenerator(response) {
    var content = `# ${response.title}
    ##### [${response.userName}](${response.GitHub}) [Email Me](${response.email}) [Deployed Application](${response.deployedapplication})
    #### ReadMeGenerator© 2022 All Rights Reserved.  ${response.license} All material need to be cited or creatited when using. (free to use)
    
    ## Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Usage Information](#Usage)
    *[References](#Ref)
    * [Repositiory End-Goal Criterea](#Criterea)
    * [Future Project](#Future-Project)
    
    # Project Describtion
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    Remember this also, as a developer, your goal should be designing NEW experiences that makes people's lives simple; because as developers, we solve problems that people didn't even knew they had- even better, in a way that they do not understand: We are the super heroes and heriones of tomorrow; so get coding, and I hope this repository helps you along your development. - [Frederick Thomas](https://www.linkedin.com/in/discoverfrederickthomas/), Super Coding Ninja™
    
    ## User Story
    ### As the Creator
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.   AS A developer
    2.   I WANT a README generator
    3.   SO THAT I can quickly create a professional README for a new project
    
    ### Contribution
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.contribute}
    
    
    ## Instructions
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.instruction1}
    2.  ${response.instruction2}
    3.  ${response.instruction3}
    
    
    ##  Accomplishments!
    ### Workflow [Back to Table of Contents](#Table-of-Contents)
    ${response.accomplishments}
    
    
    ### Screenshots ReadMe Generator
    ###### [Back to Table of Contents](#Table-of-Contents)
    #### Screenshot of the index.js file ![index.js](${response.indexjs})
    
    #### Screenshot of the ReadMeGenerator file![ReadMeGenerator.js](${response.readmegenerator})
    
    #### Screenshot of the generated ReadMe![ReadMe.md](${response.ReadMe})
    
    
    ## References
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.  ${response.reference1}
    
    ## Acceptance Criteria
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.acceptancecriteria}
    
    ## License
    ${response.license}
    
    `
    return content;
};

module.exports = ReadMeGenerator;