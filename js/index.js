const btnStart = document.getElementById('start');
const mallet = document.querySelector('.mallet');
const mole = document.querySelector('.mole');

btnStart.addEventListener('click', function() {
    // add class to move mallet
    mallet.classList.add('raise-mallet');

    // setTimeout for 5 seconds
    const malletTimer = setTimeout(() => {
        // when timeout ends, remove class
        mallet.classList.remove('raise-mallet');
        mole.classList.remove('raise-mole');
    }, 5000);

    const moleTimer = setTimeout(() => {
        mole.classList.add('raise-mole');
    }, 2000);
    
});