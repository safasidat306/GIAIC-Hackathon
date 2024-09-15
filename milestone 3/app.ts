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

        let profilePictureURL = '';
        if (profilePictureInput?.files && profilePictureInput.files.length > 0) {
            const profilePictureFile = profilePictureInput.files[0];
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        }

        document.getElementById('preview-name')!.innerText = name || 'Your Name';
        document.getElementById('preview-title')!.innerText = title || 'Job Title';
        document.getElementById('preview-email')!.innerText = email || 'example@example.com';
        document.getElementById('preview-phone')!.innerText = phone || '000-000-0000';
        document.getElementById('preview-degree')!.innerText = degree || 'Your Degree';
        document.getElementById('preview-school')!.innerText = school || 'Your School';
        document.getElementById('preview-year')!.innerText = year || '2020';
        document.getElementById('preview-company')!.innerText = company || 'Your Company';
        document.getElementById('preview-position')!.innerText = position || 'Your Position';
        document.getElementById('preview-work-duration')!.innerText = workDuration || 'Work Duration';
        document.getElementById('preview-skills')!.innerText = skills || 'Skill 1, Skill 2, Skill 3';

        const profilePictureContainer = document.getElementById('profile-picture-container');
        if (profilePictureContainer && profilePictureURL) {
            profilePictureContainer.innerHTML = `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`;
        }

        document.getElementById('resume-preview')!.style.display = 'block';
    };

    document.getElementById('generate-resume')?.addEventListener('click', generateResume);
};