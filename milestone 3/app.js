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
        var profilePictureURL = '';
        if ((profilePictureInput === null || profilePictureInput === void 0 ? void 0 : profilePictureInput.files) && profilePictureInput.files.length > 0) {
            var profilePictureFile = profilePictureInput.files[0];
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }
        document.getElementById('preview-name').innerText = name || 'Your Name';
        document.getElementById('preview-title').innerText = title || 'Job Title';
        document.getElementById('preview-email').innerText = email || 'example@example.com';
        document.getElementById('preview-phone').innerText = phone || '000-000-0000';
        document.getElementById('preview-degree').innerText = degree || 'Your Degree';
        document.getElementById('preview-school').innerText = school || 'Your School';
        document.getElementById('preview-year').innerText = year || '2020';
        document.getElementById('preview-company').innerText = company || 'Your Company';
        document.getElementById('preview-position').innerText = position || 'Your Position';
        document.getElementById('preview-work-duration').innerText = workDuration || 'Work Duration';
        document.getElementById('preview-skills').innerText = skills || 'Skill 1, Skill 2, Skill 3';
        var profilePictureContainer = document.getElementById('profile-picture-container');
        if (profilePictureContainer && profilePictureURL) {
            profilePictureContainer.innerHTML = "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">");
        }
        document.getElementById('resume-preview').style.display = 'block';
    };
    (_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
};
