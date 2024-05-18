document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('table-body');
    const updateButton = document.getElementById('update-button');
    const downloadButton = document.getElementById('download-button');

    const data = [
        { year: 2019, months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { year: 2020, months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { year: 2021, months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { year: 2022, months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { year: 2023, months: [true, true, true, true, true, false, true, true, true, true, true, true] }
    ];

    function populateTable() {
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            const yearTd = document.createElement('td');
            const yearButton = document.createElement('button');
            yearButton.textContent = row.year;
            yearButton.className = 'year-button';
            yearButton.onclick = () => redirectToYearPage(row.year);
            yearTd.appendChild(yearButton);
            tr.appendChild(yearTd);
            row.months.forEach(month => {
                const td = document.createElement('td');
                const dot = document.createElement('span');
                dot.className = month ? 'green-dot' : 'red-dot';
                td.appendChild(dot);
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }

    function redirectToYearPage(year) {
        // Redirect to another page (assuming a page structure like year.html)
        window.location.href = "http://127.0.0.1:5500/year_index.html";
    }

    updateButton.addEventListener('click', function() {
        // Logic to update the table data
        alert('Updating data...');
    });

    downloadButton.addEventListener('click', function() {
        // Logic to download the compliance opinion
        alert('Downloading compliance opinion...');
    });

    populateTable();
});
