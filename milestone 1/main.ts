// Grab elements from the DOM
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;

// Add an event listener to the "Generate Resume" button
generateBtn.addEventListener('click', () => {
    // Collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const university = (document.getElementById('university') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduation-year') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const duration = (document.getElementById('duration') as HTMLInputElement).value;

    // Generate the resume HTML dynamically
    const resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h4>Education</h4>
        <p><strong>Degree:</strong> ${education}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Year:</strong> ${graduationYear}</p>

        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>

        <h4>Work Experience</h4>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Duration:</strong> ${duration}</p>
    `;

    // Insert the generated resume HTML into the output section
    resumeOutput.innerHTML = resumeHTML;
});


