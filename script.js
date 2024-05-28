//ini haru le buttons haru khojxa html bata
const yesButton = document.getElementById('YES');
const noButton = document.getElementById('NO');
const cta = document.querySelector('.buttons');

// esley chai mouse button ko mathi aauxa ki nai herxa
noButton.addEventListener('mouseover', swapButtons);

function swapButtons() {
    // Check hanxa button haru
    if (cta.contains(yesButton) && cta.contains(noButton)) {
        const yesIndex = Array.from(cta.children).indexOf(yesButton);
        const noIndex = Array.from(cta.children).indexOf(noButton);
        if (yesIndex < noIndex) {
            // Swap gardinxa
            cta.insertBefore(noButton, yesButton);
        } else {
            // Swap gardinxa tara arkai condition ma
            cta.insertBefore(yesButton, noButton);
        }
    }
}


