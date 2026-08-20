// KENNEYS SHOOTOUT - Menu Script
// Buttons are ready for functionality to be added later

document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('.play-btn');
    const settingsBtn = document.querySelector('.settings-btn');
    const creditsBtn = document.querySelector('.credits-btn');

    // Log button clicks for now (no functionality yet)
    playBtn.addEventListener('click', () => {
        console.log('PLAY button clicked - functionality coming soon!');
    });

    settingsBtn.addEventListener('click', () => {
        console.log('SETTINGS button clicked - functionality coming soon!');
    });

    creditsBtn.addEventListener('click', () => {
        console.log('CREDITS button clicked - functionality coming soon!');
    });

    console.log('🎮 KENNEYS SHOOTOUT menu loaded!');
});
