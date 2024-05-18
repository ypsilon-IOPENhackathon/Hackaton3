document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('table-body');
    const exportButton = document.getElementById('export-button');
    const downloadButton = document.getElementById('download-button');

    const data = [
        { obligation: 'ISR', months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { obligation: 'IVA', months: [true, true, true, true, true, false, true, true, true, true, true, true] },
        { obligation: 'Retenciones', months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { obligation: 'DiOT', months: [true, true, true, true, true, true, true, true, true, true, true, true] },
        { obligation: 'Declaración anual', months: [true, true, true, true, true, true, true, true, true, true, true, true] }
    ];

    function populateTable() {
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            const obligationTd = document.createElement('td');
            obligationTd.textContent = row.obligation;
            tr.appendChild(obligationTd);
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

    exportButton.addEventListener('click', function() {
        // Logic to export the table data to Excel
        alert('Exporting to Excel...');
    });

    downloadButton.addEventListener('click', function() {
        // Logic to download the compliance opinion
        alert('Downloading compliance opinion...');
    });

    populateTable();
});
