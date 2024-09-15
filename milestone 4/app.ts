window.onload = () => {
    const generateResume = () => {
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const titleElement = document.getElementById('title') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const degreeElement = document.getElementById('degree') as HTMLInputElement;
        const schoolElement = document.getElementById('school') as HTMLInputElement;
        const yearElement = document.getElementById('year') as HTMLInputElement;
        const companyElement = document.getElementById('company') as HTMLInputElement;
        const positionElement = document.getElementById('position') as HTMLInputElement;
        const workDurationElement = document.getElementById('work-duration') as HTMLInputElement;
        const skillsElement = document.getElementById('skills') as HTMLInputElement;
        const profilePictureInput = document.getElementById('profile-pic') as HTMLInputElement;

        // Get values from the form
        const name = nameElement?.value || '';
        const title = titleElement?.value || '';
        const email = emailElement?.value || '';
        const phone = phoneElement?.value || '';
        const degree = degreeElement?.value || '';
        const school = schoolElement?.value || '';
        const year = yearElement?.value || '';
        const company = companyElement?.value || '';
        const position = positionElement?.value || '';
        const workDuration = workDurationElement?.value || '';
        const skills = skillsElement?.value || '';

        // Get the profile picture file if uploaded
        let profilePictureURL = '';
        if (profilePictureInput?.files && profilePictureInput.files.length > 0) {
            const profilePictureFile = profilePictureInput.files[0];
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }

        // Set the innerHTML of the preview section with editable fields
        const resumePreview = document.getElementById('resume-preview');
        if (resumePreview) {
            resumePreview.innerHTML = `
                <div id="profile-picture-container" class="center-profile">
                    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
                </div>
                <h1 contenteditable="true" id="preview-name">${name || 'Your Name'}</h1>
                <h2 contenteditable="true" id="preview-title">${title || 'Job Title'}</h2>
                <p>Email: <span contenteditable="true" id="preview-email">${email || 'example@example.com'}</span></p>
                <p>Phone: <span contenteditable="true" id="preview-phone">${phone || '000-000-0000'}</span></p>

                <h3>Education</h3>
                <p>Degree: <span contenteditable="true" id="preview-degree">${degree || 'Your Degree'}</span></p>
                <p>School: <span contenteditable="true" id="preview-school">${school || 'Your School'}</span></p>
                <p>Graduation Year: <span contenteditable="true" id="preview-year">${year || '2020'}</span></p>

                <h3>Work Experience</h3>
                <p>Company: <span contenteditable="true" id="preview-company">${company || 'Your Company'}</span></p>
                <p>Position: <span contenteditable="true" id="preview-position">${position || 'Your Position'}</span></p>
                <p>Duration: <span contenteditable="true" id="preview-work-duration">${workDuration || 'Work Duration'}</span></p>

                <h3>Skills</h3>
                <p><span contenteditable="true" id="preview-skills">${skills || 'Skill 1, Skill 2, Skill 3'}</span></p>
            `;
        }

        // Show the resume preview
        if (resumePreview) {
            resumePreview.style.display = 'block';
        }
    };

    document.getElementById('generate-resume')?.addEventListener('click', generateResume);
};
