var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var contactDetails = document.getElementById('contact-details').value;
    var profilePicture = document.getElementById('profile-picture').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    var workExperience = document.getElementById('work-experience').value;
    // Generate resume output
    var resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n            <header class=\"personal-info\">\n                <img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\">\n                <h1>").concat(name, "</h1>\n                <p>").concat(contactDetails, "</p>\n            </header>\n            <section class=\"education\">\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n            <section class=\"skills\">\n                <h2>Skills</h2>\n                <p>").concat(skills, "</p>\n            </section>\n            <section class=\"work-experience\">\n                <h2>Work Experience</h2>\n                <p>").concat(workExperience, "</p>\n            </section>\n        ");
    }
});
