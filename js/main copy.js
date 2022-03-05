const environment = document.querySelector('#location');
const mileage = document.querySelector('#mileage');
const races = document.querySelector('#races');
const arch = document.querySelector('#arch');
const legs = document.querySelector('#legs');
const kneeTrack = document.querySelector('#kneeTrack');
const cushion = document.querySelector('#cushion');
const brand = document.querySelector('#brand');
const gender = document.querySelector('#gender');
const neutralLightShoes = document.querySelectorAll('.neutralLight');
const neutralMidShoes = document.querySelector('.neutralMid');
const neutralMaxShoes = document.querySelector('.neutralMax');
const stabilityLightShoes = document.querySelector('.stabilityLight');
const stabilityMidShoes = document.querySelector('.stabilityMid');
const stabilityMaxShoes = document.querySelector('.stabilityMax');


document.querySelector('#road').addEventListener('click', roadShoes);
document.querySelector('#trail').addEventListener('click', trailShoes);

// Desired location to run/walk

function roadShoes() {
    environment.classList.add('hidden');
    mileage.classList.toggle('hidden');
}

function trailShoes() {
    environment.classList.add('hidden');
    mileage.classList.toggle('hidden');
}

// Mileage

document.querySelector('#underTen').addEventListener('click', underTen);
document.querySelector('#tenToTwenty').addEventListener('click', tenToTwenty);
document.querySelector('#moreThanThirty').addEventListener('click', moreThanThirty);

function underTen() {
    mileage.classList.toggle('hidden');
    races.classList.toggle('hidden');
}

function tenToTwenty() {
    mileage.classList.toggle('hidden');
    races.classList.toggle('hidden');
}

function moreThanThirty() {
    mileage.classList.toggle('hidden');
    races.classList.toggle('hidden');
}

// Events the user is training for

document.querySelector('#raceSubmit').addEventListener('click', upcomingRaces);

function upcomingRaces() {
    races.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

// Arch type

document.querySelector('#flatArch').addEventListener('click', flatArch);
document.querySelector('#normArch').addEventListener('click', normArch);
document.querySelector('#highArch').addEventListener('click', highArch);

function flatArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
}

function normArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
}

function highArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
}

// Leg shape

document.querySelector('#knockKnee').addEventListener('click', knockKnee);
document.querySelector('#straightLegs').addEventListener('click', straightLegs);
document.querySelector('#bow').addEventListener('click', bow);

function knockKnee() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
}

function straightLegs() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
}

function bow() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
}

// Knee track

document.querySelector('#rotateOut').addEventListener('click', rotateOut);
document.querySelector('#straight').addEventListener('click', straight);
document.querySelector('#rotateIn').addEventListener('click', rotateIn);

function rotateOut() {
    kneeTrack.classList.toggle('hidden');
    injury.classList.toggle('hidden');
}

function straight() {
    kneeTrack.classList.toggle('hidden');
    injury.classList.toggle('hidden');
}

function rotateIn() {
    kneeTrack.classList.toggle('hidden');
    injury.classList.toggle('hidden');
}

// Injury history

document.querySelector('#injurySubmit').addEventListener('click', injuries);

function injuries() {
    injury.classList.toggle('hidden');
    cushion.classList.toggle('hidden');

}

// Desried cushion level

document.querySelector('#lightFast').addEventListener('click', lightFast);
document.querySelector('#midCushion').addEventListener('click', midCushion);
document.querySelector('#maxCushion').addEventListener('click', maxCushion);

let cushionLevel = 'error';

function lightFast() {
    cushion.classList.toggle('hidden');
    brand.classList.toggle('hidden');
    cushionLevel = document.querySelector('#lightFast').value;
}

function midCushion() {
    cushion.classList.toggle('hidden');
    brand.classList.toggle('hidden');
    cushionLevel = document.querySelector('#midCushion').value;

}

function maxCushion() {
    cushion.classList.toggle('hidden');
    brand.classList.toggle('hidden');
    cushionLevel = document.querySelector('#maxCushion').value;
}

// Preferred brands

document.querySelector('#brandSubmit').addEventListener('click', brandSubmit);

function brandSubmit() {
    brand.classList.toggle('hidden');
    gender.classList.toggle('hidden');
}

// Gender

document.querySelector('#womensShoes').addEventListener('click', womensShoes);
document.querySelector('#mensShoes').addEventListener('click', mensShoes);

function womensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    finalResult();
}

function mensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    finalResult();
}

// Desired size


// Assign values to Arch Type, Leg Shape, and Knee Track
// If value is over zero assign stability
// If value is less than or equal to zero assign neutral

// Variable for support needed

let supportLevel = 0;

// Assign a value to supportLevel based on Arch response

document.querySelector('#flatArch').addEventListener('click', archResultFlat);
document.querySelector('#normArch').addEventListener('click', archResultNorm);
document.querySelector('#highArch').addEventListener('click', archResultHigh);

function archResultFlat() {
    supportLevel = 1;
}

function archResultNorm() {
    supportLevel = 0;
}

function archResultHigh() {
    supportLevel = -1;
}

// Assign a value to supportLevel based on Leg Shape response

document.querySelector('#knockKnee').addEventListener('click', legResultKnock);
document.querySelector('#bow').addEventListener('click', legResultBow);

function legResultKnock() {
    supportLevel = supportLevel + 1;
}

function legResultBow() {
    supportLevel = supportLevel - 1;
}


// Assign a value to supportLevel based on Knee Track response

document.querySelector('#rotateOut').addEventListener('click', kneeResultOut);
document.querySelector('#rotateIn').addEventListener('click', kneeResultIn);

function kneeResultIn() {
    supportLevel = supportLevel + 1;
}

function kneeResultOut() {
    supportLevel = supportLevel - 1;
}

// Catergorize shoes based on support and cushion

function neutralLight() {
    neutralMidShoes.classList.add('hidden');
    neutralMaxShoes.classList.add('hidden');
    stabilityLightShoes.classList.add('hidden');
    stabilityMidShoes.classList.add('hidden');
    stabilityMaxShoes.classList.add('hidden');
}

function neutralMid() {
    neutralMidShoes.classList.toggle('hidden');
    neutralMaxShoes.classList.add('hidden');
    stabilityLightShoes.classList.add('hidden');
    stabilityMidShoes.classList.add('hidden');
    stabilityMaxShoes.classList.add('hidden');
}

function neutralMax() {
    neutralMidShoes.classList.add('hidden');
    neutralMaxShoes.classList.toggle('hidden');
    stabilityLightShoes.classList.add('hidden');
    stabilityMidShoes.classList.add('hidden');
    stabilityMaxShoes.classList.add('hidden');
}

function stabilityLight() {
    neutralMidShoes.classList.add('hidden');
    neutralMaxShoes.classList.add('hidden');
    stabilityLightShoes.classList.toggle('hidden');
    stabilityMidShoes.classList.add('hidden');
    stabilityMaxShoes.classList.add('hidden');
}

function stabilityMid() {
    neutralMidShoes.classList.add('hidden');
    neutralMaxShoes.classList.add('hidden');
    stabilityLightShoes.classList.add('hidden');
    stabilityMidShoes.classList.toggle('hidden');
    stabilityMaxShoes.classList.add('hidden');
}

function stabilityMax() {
    neutralMidShoes.classList.add('hidden');
    neutralMaxShoes.classList.add('hidden');
    stabilityLightShoes.classList.add('hidden');
    stabilityMidShoes.classList.add('hidden');
    stabilityMaxShoes.classList.toggle('hidden');
}

// Display category user needs

function finalResult() {
    if (supportLevel > 0 && cushionLevel === 'lightFast') {
        document.querySelector('#displayResult').innerText = 'Light Cushion Stability';
        stabilityLight();
    } else if (supportLevel > 0 && cushionLevel === 'midCushion') {
        document.querySelector('#displayResult').innerText = 'Medium Cushion Stability';
        stabilityMid();
    } else if (supportLevel > 0 && cushionLevel === 'maxCushion') {
        document.querySelector('#displayResult').innerText = 'Max Cushion Stability';
        stabilityMax();
    } else if (supportLevel <= 0 && cushionLevel === 'lightFast') {
        document.querySelector('#displayResult').innerText = 'Light Cushion Neutral';
        neutralLight();
    } else if (supportLevel <= 0 && cushionLevel === 'midCushion') {
        document.querySelector('#displayResult').innerText = 'Medium Cushion Neutral';
        neutralMid();
    } else if (supportLevel <= 0 && cushionLevel === 'maxCushion') {
        document.querySelector('#displayResult').innerText = 'Max Cushion Neutral';
        neutralMax();
    } else {
        document.querySelector('#displayResult').innerText = 'Error';
    }
}


// Only show brands selected
// Show colors based on gender selected
