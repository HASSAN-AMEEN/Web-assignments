function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    let data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("Submitted Application Data:");
    console.log(data);
}

let employmentCount = 1;

function addEmployment() {
    employmentCount++;
    const employmentDiv = document.createElement("div");
    employmentDiv.classList.add("employment-item");
    employmentDiv.innerHTML = `
        <h3>Employment #${employmentCount}</h3>
        <div class="form-group">
            <label for="jobTitle${employmentCount}">Job Title:</label>
            <input type="text" id="jobTitle${employmentCount}" name="jobTitle${employmentCount}" required>
        </div>
        <div class="form-group">
            <label for="companyName${employmentCount}">Company Name:</label>
            <input type="text" id="companyName${employmentCount}" name="companyName${employmentCount}" required>
        </div>
        <div class="form-group">
            <label for="employmentDates${employmentCount}">Employment Dates:</label>
            <input type="text" id="employmentDates${employmentCount}" name="employmentDates${employmentCount}" required>
        </div>
        <div class="form-group">
            <label for="jobResponsibilities${employmentCount}">Job Responsibilities:</label>
            <textarea id="jobResponsibilities${employmentCount}" name="jobResponsibilities${employmentCount}" rows="3" required></textarea>
        </div>
    `;
    document.getElementById("employmentHistory").appendChild(employmentDiv);
}

let referenceCount = 1;

function addReference() {
    referenceCount++;
    const referenceDiv = document.createElement("div");
    referenceDiv.classList.add("reference-item");
    referenceDiv.innerHTML = `
        <h3>Reference #${referenceCount}</h3>
        <div class="form-group">
            <label for="referenceName${referenceCount}">Reference Name:</label>
            <input type="text" id="referenceName${referenceCount}" name="referenceName${referenceCount}" required>
        </div>
        <div class="form-group">
            <label for="referenceContact${referenceCount}">Reference Contact Information:</label>
            <input type="text" id="referenceContact${referenceCount}" name="referenceContact${referenceCount}" required>
        </div>
        <div class="form-group">
            <label for="relationship${referenceCount}">Relationship to Applicant:</label>
            <input type="text" id="relationship${referenceCount}" name="relationship${referenceCount}" required>
        </div>
    `;
    document.getElementById("references").appendChild(referenceDiv);
}

function viewApplicationsTable() {
    const formData = new FormData(document.getElementById("jobApplicationForm"));
    let applications = [];
    formData.forEach((value, key) => {
        applications.push({ [key]: value });
    });

    const tableDiv = document.getElementById("applicationsTable");
    tableDiv.innerHTML = "";

    if (applications.length === 0) {
        tableDiv.innerHTML = "<p>No applications to display.</p>";
        return;
    }

    const table = document.createElement("table");
    table.classList.add("applications-table");

    let headerRow = table.insertRow();
    let nameHeader = headerRow.insertCell(0);
    nameHeader.innerHTML = "<b>Name</b>";
    let valueHeader = headerRow.insertCell(1);
    valueHeader.innerHTML = "<b>Value</b>";

    applications.forEach(application => {
        for (const key in application) {
            let row = table.insertRow();
            let nameCell = row.insertCell(0);
            let valueCell = row.insertCell(1);
            nameCell.textContent = key;
            valueCell.textContent = application[key];
        }
    });

    tableDiv.appendChild(table);
}
