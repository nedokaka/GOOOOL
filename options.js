document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings
    browser.storage.local.get(['noBear', 'noFavicon']).then((result) => {
        document.getElementById('noBear').checked = result.noBear || false;
        document.getElementById('noFavicon').checked = result.noFavicon || false;
    });

    // Save settings when the save button is clicked
    document.getElementById('save').addEventListener('click', () => {
        const noBear = document.getElementById('noBear').checked;
        const noFavicon = document.getElementById('noFavicon').checked;

        browser.storage.local.set({ noBear, noFavicon });
    });
});
