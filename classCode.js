class Rocket {
    //make the properties
    constructor(
        fuelType,
        weight,
        power
    ) {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch sequence started");
        alert("Clear the launch area, launch is about to start");
        alert("launch sequence started");
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
    }

    detachThruster(){
        console.log("detach thruster sequence started")
        alert("detach thruster sequence started")
    }
}

class Mission{
    constructor(
        objective,
        oxygenLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ) {
        this.objective = objective;
        this.oxygenLvl = oxygenLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    launchMission(){
        console.log("launchMission");
        alert("launch sequence started, best of luck to the crew of the " 
        + this.spaceCraft);
    }

    displayMissionParameters(){
        console.log("displayMissionParameters() started");
        alert("The spacecraft, " + this.spaceCraft + ", will launch on " + this.launchDateDay
            + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of "
            + this.oxygenLvl + "%");
    }
}

function runSpDisplay(){
    console.log("runSpDisplay() started");
    springLaunch.displayMissionParameters();
}

function spLaunch(){
    console.log("spLaunch() started");
    springLaunch.launchMission();
}

function runFallDisplay(){
    console.log("runFallDisplay() started");
    fallLaunch.displayMissionParameters();
}

function faLaunch(){
    console.log("faLaunch() started");
    fallLaunch.launchMission();
}