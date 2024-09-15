var _a;
window.onload = function () {
    var _a;
    var generateResume = function () {
        var nameElement = document.getElementById('name');
        var titleElement = document.getElementById('title');
        var emailElement = document.getElementById('email');
        var phoneElement = document.getElementById('phone');
        var degreeElement = document.getElementById('degree');
        var schoolElement = document.getElementById('school');
        var yearElement = document.getElementById('year');
        var companyElement = document.getElementById('company');
        var positionElement = document.getElementById('position');
        var workDurationElement = document.getElementById('work-duration');
        var skillsElement = document.getElementById('skills');
        var profilePictureInput = document.getElementById('profile-pic');
        // Get values from the form
        var name = (nameElement === null || nameElement === void 0 ? void 0 : nameElement.value) || '';
        var title = (titleElement === null || titleElement === void 0 ? void 0 : titleElement.value) || '';
        var email = (emailElement === null || emailElement === void 0 ? void 0 : emailElement.value) || '';
        var phone = (phoneElement === null || phoneElement === void 0 ? void 0 : phoneElement.value) || '';
        var degree = (degreeElement === null || degreeElement === void 0 ? void 0 : degreeElement.value) || '';
        var school = (schoolElement === null || schoolElement === void 0 ? void 0 : schoolElement.value) || '';
        var year = (yearElement === null || yearElement === void 0 ? void 0 : yearElement.value) || '';
        var company = (companyElement === null || companyElement === void 0 ? void 0 : companyElement.value) || '';
        var position = (positionElement === null || positionElement === void 0 ? void 0 : positionElement.value) || '';
        var workDuration = (workDurationElement === null || workDurationElement === void 0 ? void 0 : workDurationElement.value) || '';
        var skills = (skillsElement === null || skillsElement === void 0 ? void 0 : skillsElement.value) || '';
        // Get the profile picture file if uploaded
        var profilePictureURL = '';
        if ((profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) && profilePictureInput.files.length > 0) {
            var profilePictureFile = profilePictureInput.files[0];
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }
        // Set the innerHTML of the preview section with editable fields
        var resumePreview = document.getElementById('resume-preview');
        if (resumePreview) {
            resumePreview.innerHTML = "\n                <div id=\"profile-picture-container\" class=\"center-profile\">\n                    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                </div>\n                <h1 contenteditable=\"true\" id=\"preview-name\">").concat(name || 'Your Name', "</h1>\n                <h2 contenteditable=\"true\" id=\"preview-title\">").concat(title || 'Job Title', "</h2>\n                <p>Email: <span contenteditable=\"true\" id=\"preview-email\">").concat(email || 'example@example.com', "</span></p>\n                <p>Phone: <span contenteditable=\"true\" id=\"preview-phone\">").concat(phone || '000-000-0000', "</span></p>\n\n                <h3>Education</h3>\n                <p>Degree: <span contenteditable=\"true\" id=\"preview-degree\">").concat(degree || 'Your Degree', "</span></p>\n                <p>School: <span contenteditable=\"true\" id=\"preview-school\">").concat(school || 'Your School', "</span></p>\n                <p>Graduation Year: <span contenteditable=\"true\" id=\"preview-year\">").concat(year || '2020', "</span></p>\n\n                <h3>Work Experience</h3>\n                <p>Company: <span contenteditable=\"true\" id=\"preview-company\">").concat(company || 'Your Company', "</span></p>\n                <p>Position: <span contenteditable=\"true\" id=\"preview-position\">").concat(position || 'Your Position', "</span></p>\n                <p>Duration: <span contenteditable=\"true\" id=\"preview-work-duration\">").concat(workDuration || 'Work Duration', "</span></p>\n\n                <h3>Skills</h3>\n                <p><span contenteditable=\"true\" id=\"preview-skills\">").concat(skills || 'Skill 1, Skill 2, Skill 3', "</span></p>\n            ");
        }
        // Show the resume preview
        if (resumePreview) {
            resumePreview.style.display = 'block';
        }
    };
    (_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
};
// Show the "Download as PDF" button
var printButton = document.getElementById('print-resume');
if (printButton) {
    printButton.style.display = 'block';
}
// Event listener to print the resume
var printResume = function () {
    window.print();
};
(_a = document.getElementById('print-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', printResume);
