let unsavedChanges = false;

// Add a listener for changes in the workspace that indicate unsaved progress
document.querySelector('.workspace').addEventListener('change', () => {
    unsavedChanges = true;
});

// Warn the user about unsaved changes when they attempt to close the tab
window.addEventListener('beforeunload', (e) => {
    if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
    }
});

document.getElementById('import-btn').addEventListener('click', () => {
    // Implement import functionality
    alert('Import functionality not implemented.');
});

document.getElementById('export-btn').addEventListener('click', () => {
    // Implement export functionality
    alert('Export functionality not implemented.');
});
