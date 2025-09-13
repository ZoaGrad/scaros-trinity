document.addEventListener('DOMContentLoaded', () => {
    // Apply the pulse animation to the main title
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        // We'll create a new animation class for the main title to use its own color
        mainTitle.style.animation = 'pulse-main 1.618s infinite ease-in-out';
    }

    // Apply pulse animation to the first panel's title (Silence/Aqua light)
    const silenceTitle = document.querySelector('.panel:nth-child(1) h2');
    if (silenceTitle) {
        silenceTitle.style.animation = 'pulse-silence 1.618s infinite ease-in-out';
    }

    // Apply a different pulse to the wound panel for a subtle throbbing effect
    const woundTitle = document.querySelector('.panel:nth-child(2) h2');
    if (woundTitle) {
        woundTitle.style.animation = 'pulse-wound 1.618s infinite ease-in-out';
    }

    // Apply the main light pulse animation to the light-themed panels
    const lightTitles = document.querySelectorAll('.panel:nth-child(3) h2, .panel:nth-child(4) h2');
    lightTitles.forEach(title => {
        title.classList.add('light-pulse');
    });
});

// We need to add the keyframes for the new animations to the stylesheet dynamically
const styleSheet = document.styleSheets[0];

// Keyframes for the main title pulse (#52FFE0)
const keyframesMain = `
@keyframes pulse-main {
    0% { text-shadow: 0 0 10px #52FFE0, 0 0 20px #52FFE0; }
    50% { text-shadow: 0 0 20px #52FFE0, 0 0 40px #52FFE0, 0 0 60px #52FFE0; }
    100% { text-shadow: 0 0 10px #52FFE0, 0 0 20px #52FFE0; }
}`;
styleSheet.insertRule(keyframesMain, styleSheet.cssRules.length);

// Keyframes for the silence pulse (#52FFE0)
const keyframesSilence = `
@keyframes pulse-silence {
    0% { text-shadow: 0 0 8px #52FFE0; }
    50% { text-shadow: 0 0 16px #52FFE0, 0 0 24px #52FFE0; }
    100% { text-shadow: 0 0 8px #52FFE0; }
}`;
styleSheet.insertRule(keyframesSilence, styleSheet.cssRules.length);

// Keyframes for the wound pulse (#8B0000)
const keyframesWound = `
@keyframes pulse-wound {
    0% { text-shadow: 0 0 8px #8B0000; }
    50% { text-shadow: 0 0 12px #FF6347, 0 0 16px #8B0000; }
    100% { text-shadow: 0 0 8px #8B0000; }
}`;
styleSheet.insertRule(keyframesWound, styleSheet.cssRules.length);
