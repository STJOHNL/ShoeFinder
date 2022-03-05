// Variables for selecting different questions

const environment = document.querySelector('#location');
const mileage = document.querySelector('#mileage');
const races = document.querySelector('#races');
const arch = document.querySelector('#arch');
const legs = document.querySelector('#legs');
const kneeTrack = document.querySelector('#kneeTrack');
const cushion = document.querySelector('#cushion');
const brand = document.querySelector('#brand');
const gender = document.querySelector('#gender');

// Variable that holds users support needed

let supportLevel = 0;

// Location user intends to run

document.querySelector('#road').addEventListener('click', roadShoes);
document.querySelector('#trail').addEventListener('click', trailShoes);

// functions below hide question once answered and progress to next question

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
    arch.classList.toggle('hidden');
}

function tenToTwenty() {
    mileage.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

function moreThanThirty() {
    mileage.classList.toggle('hidden');
    arch.classList.toggle('hidden');
}

// Events the user is training for

// document.querySelector('#raceSubmit').addEventListener('click', upcomingRaces);

// function upcomingRaces() {
//     races.classList.toggle('hidden');
//     arch.classList.toggle('hidden');
// }

// Arch type

document.querySelector('#flatArch').addEventListener('click', flatArch);
document.querySelector('#normArch').addEventListener('click', normArch);
document.querySelector('#highArch').addEventListener('click', highArch);

function flatArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

function normArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = 0;
}

function highArch() {
    arch.classList.toggle('hidden');
    legs.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

// Leg shape

document.querySelector('#knockKnee').addEventListener('click', knockKnee);
document.querySelector('#straightLegs').addEventListener('click', straightLegs);
document.querySelector('#bow').addEventListener('click', bow);

function knockKnee() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

function straightLegs() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
}

function bow() {
    legs.classList.toggle('hidden');
    kneeTrack.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

// Knee track

document.querySelector('#rotateOut').addEventListener('click', rotateOut);
document.querySelector('#straight').addEventListener('click', straight);
document.querySelector('#rotateIn').addEventListener('click', rotateIn);

function rotateOut() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
    supportLevel = supportLevel - 1;
}

function straight() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
}

function rotateIn() {
    kneeTrack.classList.toggle('hidden');
    cushion.classList.toggle('hidden');
    supportLevel = supportLevel + 1;
}

// Injury history

// document.querySelector('#injurySubmit').addEventListener('click', injuries);

// function injuries() {
//     injury.classList.toggle('hidden');
//     cushion.classList.toggle('hidden');

// }

// Desried cushion level

document.querySelector('#lightFast').addEventListener('click', lightFast);
document.querySelector('#midCushion').addEventListener('click', midCushion);
document.querySelector('#maxCushion').addEventListener('click', maxCushion);

let cushionLevel = 'error';

function lightFast() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#lightFast').value;
}

function midCushion() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#midCushion').value;

}

function maxCushion() {
    cushion.classList.toggle('hidden');
    gender.classList.toggle('hidden');
    cushionLevel = document.querySelector('#maxCushion').value;
}

// Preferred brands

// document.querySelector('#brandSubmit').addEventListener('click', brandSubmit);

// function brandSubmit() {
//     brand.classList.toggle('hidden');
//     gender.classList.toggle('hidden');
// }

// Gender

let shoeGender;
document.querySelector('#womensShoes').addEventListener('click', womensShoes);
document.querySelector('#mensShoes').addEventListener('click', mensShoes);

function womensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    shoeGender = 'womens';
    finalResult();
}

function mensShoes() {
    gender.classList.toggle('hidden');
    results.classList.toggle('hidden');
    shoeGender = 'mens';
    finalResult();
}

// Desired size


// Men's shoe categories

// Only show Men's Light Cushion Neutral Shoes

function mensNeutralLight() {
    document.querySelector("#launchM").classList.toggle('hidden');
    document.querySelector("#hyperionTempoM").classList.toggle('hidden');
    document.querySelector("#hyperionEliteM").classList.toggle('hidden');
    document.querySelector("#rinconM").classList.toggle('hidden');
    document.querySelector("#carbonXM").classList.toggle('hidden');
    document.querySelector("#machM").classList.toggle('hidden');
    document.querySelector("#kinvaraM").classList.toggle('hidden');
    document.querySelector("#speedM").classList.toggle('hidden');
}

// Only show Men's Medium Cushion Neutral Shoes

function mensNeutralMid() {
    document.querySelector("#escalanteM").classList.toggle('hidden');
    document.querySelector("#riveraM").classList.toggle('hidden');
    document.querySelector("#evorideM").classList.toggle('hidden');
    document.querySelector("#ghostM").classList.toggle('hidden');
    document.querySelector("#traceM").classList.toggle('hidden');
    document.querySelector("#kawanaM").classList.toggle('hidden');
    document.querySelector("#riderM").classList.toggle('hidden');
    document.querySelector("#eightEightyM").classList.toggle('hidden');
    document.querySelector("#pegasusM").classList.toggle('hidden');
    document.querySelector("#zoomFlyM").classList.toggle('hidden');
    document.querySelector("#cloudflowM").classList.toggle('hidden');
    document.querySelector("#cloudgoM").classList.toggle('hidden');
    document.querySelector("#rideM").classList.toggle('hidden');
}

// Only show Men's Max Cushion Neutral Shoes

function mensNeutralMax() {
    document.querySelector("#torinM").classList.toggle('hidden');
    document.querySelector("#nimbusM").classList.toggle('hidden');
    document.querySelector("#glycerinM").classList.toggle('hidden');
    document.querySelector("#levitateM").classList.toggle('hidden');
    document.querySelector("#bondiM").classList.toggle('hidden');
    document.querySelector("#cliftonM").classList.toggle('hidden');
    document.querySelector("#tenEightyM").classList.toggle('hidden');
    document.querySelector("#vomeroM").classList.toggle('hidden');
    document.querySelector("#cloudMonsterM").classList.toggle('hidden');
    document.querySelector("#cloudStratusM").classList.toggle('hidden');
    document.querySelector("#triumphM").classList.toggle('hidden');
}

// Only show Men's Light Cushion Stability Shoes

function mensStabilityLight() {
    document.querySelector("#launchGTSM").classList.toggle('hidden');

}

// Only show Men's Medium Cushion Stability Shoes

function mensStabilityMid() {
    document.querySelector("#provisionM").classList.toggle('hidden');
    document.querySelector("#gtTwoThousandM").classList.toggle('hidden');
    document.querySelector("#adrenalineM").classList.toggle('hidden');
    document.querySelector("#arahiM").classList.toggle('hidden');
    document.querySelector("#eightSixtyM").classList.toggle('hidden');
    document.querySelector("#cloudflyerM").classList.toggle('hidden');
    document.querySelector("#guideM").classList.toggle('hidden');
    document.querySelector("#omniM").classList.toggle('hidden');
}

// Only show Men's Max Cushion Stability Shoes

function mensStabilityMax() {
    document.querySelector("#kayanoM").classList.toggle('hidden');
    document.querySelector("#glycerinGTSM").classList.toggle('hidden');
    document.querySelector("#gaviotaM").classList.toggle('hidden');
    document.querySelector("#horizonM").classList.toggle('hidden');
    document.querySelector("#vongoM").classList.toggle('hidden');
    document.querySelector("#shiftM").classList.toggle('hidden');
}

// Women's shoe categories

// Only show Women's Light Cushion Neutral Shoes

function womensNeutralLight() {
    document.querySelector("#launchW").classList.toggle('hidden');
    document.querySelector("#hyperionTempoW").classList.toggle('hidden');
    document.querySelector("#hyperionEliteW").classList.toggle('hidden');
    document.querySelector("#rinconW").classList.toggle('hidden');
    document.querySelector("#carbonXW").classList.toggle('hidden');
    document.querySelector("#machW").classList.toggle('hidden');
    document.querySelector("#kinvaraW").classList.toggle('hidden');
    document.querySelector("#speedW").classList.toggle('hidden');
}

// Only show Women's Medium Cushion Neutral Shoes

function womensNeutralMid() {
    document.querySelector("#escalanteW").classList.toggle('hidden');
    document.querySelector("#riveraW").classList.toggle('hidden');
    document.querySelector("#evorideW").classList.toggle('hidden');
    document.querySelector("#ghostW").classList.toggle('hidden');
    document.querySelector("#traceW").classList.toggle('hidden');
    document.querySelector("#kawanaW").classList.toggle('hidden');
    document.querySelector("#riderW").classList.toggle('hidden');
    document.querySelector("#eightEightyW").classList.toggle('hidden');
    document.querySelector("#pegasusW").classList.toggle('hidden');
    document.querySelector("#zoomFlyW").classList.toggle('hidden');
    document.querySelector("#cloudflowW").classList.toggle('hidden');
    document.querySelector("#cloudgoW").classList.toggle('hidden');
    document.querySelector("#rideW").classList.toggle('hidden');
}

// Only show Women's Max Cushion Neutral Shoes

function womensNeutralMax() {
    document.querySelector("#torinW").classList.toggle('hidden');
    document.querySelector("#nimbusW").classList.toggle('hidden');
    document.querySelector("#glycerinW").classList.toggle('hidden');
    document.querySelector("#levitateW").classList.toggle('hidden');
    document.querySelector("#bondiW").classList.toggle('hidden');
    document.querySelector("#cliftonW").classList.toggle('hidden');
    document.querySelector("#tenEightyW").classList.toggle('hidden');
    document.querySelector("#vomeroW").classList.toggle('hidden');
    document.querySelector("#cloudMonsterW").classList.toggle('hidden');
    document.querySelector("#cloudStratusW").classList.toggle('hidden');
    document.querySelector("#triumphW").classList.toggle('hidden');
}

// Only show Women's Light Cushion Stability Shoes

function womensStabilityLight() {
    document.querySelector("#launchGTSW").classList.toggle('hidden');

}

// Only show Women's Medium Cushion Stability Shoes

function womensStabilityMid() {
    document.querySelector("#provisionW").classList.toggle('hidden');
    document.querySelector("#gtTwoThousandW").classList.toggle('hidden');
    document.querySelector("#adrenalineW").classList.toggle('hidden');
    document.querySelector("#arahiW").classList.toggle('hidden');
    document.querySelector("#eightSixtyW").classList.toggle('hidden');
    document.querySelector("#cloudflyerW").classList.toggle('hidden');
    document.querySelector("#guideW").classList.toggle('hidden');
    document.querySelector("#omniW").classList.toggle('hidden');
}

// Only show Women's Max Cushion Stability Shoes

function womensStabilityMax() {
    document.querySelector("#kayanoW").classList.toggle('hidden');
    document.querySelector("#glycerinGTSW").classList.toggle('hidden');
    document.querySelector("#gaviotaW").classList.toggle('hidden');
    document.querySelector("#horizonW").classList.toggle('hidden');
    document.querySelector("#vongoW").classList.toggle('hidden');
    document.querySelector("#shiftW").classList.toggle('hidden');
}

// Display category user needs based on support needs, desired cushion, and gender.

function finalResult() {
    if (supportLevel > 0 && cushionLevel === 'lightFast' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Light Cushion Stability';
        mensStabilityLight();
    } else if (supportLevel > 0 && cushionLevel === 'midCushion' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Medium Cushion Stability';
        mensStabilityMid();
    } else if (supportLevel > 0 && cushionLevel === 'maxCushion' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Max Cushion Stability';
        mensStabilityMax();
    } else if (supportLevel <= 0 && cushionLevel === 'lightFast' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Light Cushion Neutral';
        mensNeutralLight();
    } else if (supportLevel <= 0 && cushionLevel === 'midCushion' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Medium Cushion Neutral';
        mensNeutralMid();
    } else if (supportLevel <= 0 && cushionLevel === 'maxCushion' && shoeGender === 'mens') {
        document.querySelector('#displayMensResult').innerText = 'Max Cushion Neutral';
        mensNeutralMax();
    } else if (supportLevel > 0 && cushionLevel === 'lightFast' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Light Cushion Stability';
        womensStabilityLight();
    } else if (supportLevel > 0 && cushionLevel === 'midCushion' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Medium Cushion Stability';
        womensStabilityMid();
    } else if (supportLevel > 0 && cushionLevel === 'maxCushion' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Max Cushion Stability';
        womensStabilityMax();
    } else if (supportLevel <= 0 && cushionLevel === 'lightFast' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Light Cushion Neutral';
        womensNeutralLight();
    } else if (supportLevel <= 0 && cushionLevel === 'midCushion' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Medium Cushion Neutral';
        womensNeutralMid();
    } else if (supportLevel <= 0 && cushionLevel === 'maxCushion' && shoeGender === 'womens') {
        document.querySelector('#displayWomensResult').innerText = 'Max Cushion Neutral';
        womensNeutralMax();
    } else {
        document.querySelector('#result').innerText = 'Error';
    }
}


// Tasks
// Only show brands selected
// Show recommended insoles based on leg and arch type
// Show injury support accessories based on items checked
// Show nutrition based on races selected