function attachEventsListeners() {
    const confirmButton = document.getElementById('convert');
    
    confirmButton.addEventListener('click', () => {
        const inputDistance = document.getElementById('inputDistance');
        const inputUnits = document.getElementById('inputUnits');
        const outputUnits = document.getElementById('outputUnits');
        const typeUnit = Number(inputUnits.selectedIndex);
        const typeUnitOutput = Number(outputUnits.selectedIndex);
        const result = document.getElementById('outputDistance');

        let resultInMeters = 0;

        if (typeUnit == 0) {
            resultInMeters = inputDistance.value * 1000;
        } else if (typeUnit == 1) {
            resultInMeters = inputDistance.value * 1;
        } else if (typeUnit == 2) {
            resultInMeters = inputDistance.value * 0.01;
        } else if (typeUnit == 3) {
            resultInMeters = inputDistance.value * 0.001;
        } else if (typeUnit == 4) {
            resultInMeters = inputDistance.value * 1609.34;
        } else if (typeUnit == 5) {
            resultInMeters = inputDistance.value * 0.9144;
        } else if (typeUnit == 6) {
            resultInMeters = inputDistance.value * 0.3048;
        } else if (typeUnit == 7) {
            resultInMeters = inputDistance.value * 0.0254;
        }

        let finishedResult = 0;

        if (typeUnitOutput == 0) {
            finishedResult = resultInMeters / 1000;
            result.value = finishedResult;
        } else if (typeUnitOutput == 1) {
            finishedResult = resultInMeters;
            result.value = finishedResult;
        } else if (typeUnitOutput == 2) {
            finishedResult = resultInMeters * 100;
            result.value = finishedResult;
        } else if (typeUnitOutput == 3) {
            finishedResult = resultInMeters * 1000;
            result.value = finishedResult;
        } else if (typeUnitOutput == 4) {
            finishedResult = resultInMeters / 1609.34;
            result.value = finishedResult;
        } else if (typeUnitOutput == 5) {
            finishedResult = resultInMeters / 0.9144;
            result.value = finishedResult;
        } else if (typeUnitOutput == 6) {
            finishedResult = resultInMeters / 0.3048;
            result.value = finishedResult;
        } else if (typeUnitOutput == 7) {
            finishedResult = resultInMeters / 0.0254;
            result.value = finishedResult;
        }
    })
}