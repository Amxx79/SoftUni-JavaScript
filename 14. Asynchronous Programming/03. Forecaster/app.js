function attachEvents() {
    const baseUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', () => {
        const wantedLocation = document.getElementById('location');

        fetch(`${baseUrl}`)
            .then(res => res.json())
            .then(res => {
                const { code } = res.find(location => location.name === wantedLocation.value);

                return Promise.all([
                    fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`),
                    fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`),
                ])
            })
            .then(respones => Promise.all(respones.map(res => res.json())))
            .then(data => {
                console.log(data);
                const forecastElement = document.getElementById('forecast');
                forecastElement.style.display = 'block';

                const currentDiv = document.getElementById('current');

                const createForecastsContainer = document.createElement('div');
                createForecastsContainer.classList.add('forecasts');

                const createSpanElementHolderConditions = document.createElement('span');
                createSpanElementHolderConditions.classList.add('condition');
                const createSpanWithSymbolOfTheWeather = document.createElement('span');
                createSpanWithSymbolOfTheWeather.classList.add('condition');
                createSpanWithSymbolOfTheWeather.classList.add('symbol');
                if (data[0].forecast.condition === 'Sunny') {
                    createSpanWithSymbolOfTheWeather.textContent = "\u2600";
                } else if (data[0].forecast.condition === 'Rain') {
                    createSpanWithSymbolOfTheWeather.textContent = '☂';
                }

                const createSpanElementCityName = document.createElement('span');
                createSpanElementCityName.classList.add('forecast-data');
                createSpanElementCityName.textContent = `${data[0].name}`;

                const createSpanElementDegrees = document.createElement('span');
                createSpanElementDegrees.classList.add('forecast-data');
                let calcDegrees = `${data[0].forecast.low}°${data[0].forecast.high}°`
                createSpanElementDegrees.textContent = calcDegrees;

                const createSpanElementWeather = document.createElement('span');
                createSpanElementWeather.classList.add('forecast-data');
                createSpanElementWeather.textContent = data[0].forecast.condition;

                createSpanElementHolderConditions.appendChild(createSpanElementCityName);
                createSpanElementHolderConditions.appendChild(createSpanElementDegrees);
                createSpanElementHolderConditions.appendChild(createSpanElementWeather);

                createForecastsContainer.appendChild(createSpanWithSymbolOfTheWeather);
                createForecastsContainer.appendChild(createSpanElementHolderConditions);
                currentDiv.appendChild(createForecastsContainer);

                createForecastsContainer.style.display = 'flex';
                createForecastsContainer.style.justifyContent = 'center';
                createForecastsContainer.style.alignItems = 'center';
                createForecastsContainer.style.marginLeft = '300px';

                //-------------Another Section-------------

                const divUpComingInfo = document.createElement('div');
                divUpComingInfo.classList.add('forecast-info');

                const spanFirstUpComing = document.createElement('span');
                spanFirstUpComing.classList.add('upcoming');


                const firstAtFirstSpanCondition = document.createElement('span');
                firstAtFirstSpanCondition.classList.add('symbol');
                if (data[1].forecast[0].condition === 'Partly sunny') {
                    firstAtFirstSpanCondition.textContent = '⛅';
                } else if (data[1].forecast[0].condition === 'Sunny') {
                    firstAtFirstSpanCondition.textContent = '☀';
                } else if (data[1].forecast[0].condition === 'Overcast') {
                    firstAtFirstSpanCondition.textContent = '☁';
                } else if (data[1].forecast[0].condition === 'Rain') {
                    firstAtFirstSpanCondition.textContent = '☂';
                }
                
                const secondAtFirstSpanCondition = document.createElement('span');
                secondAtFirstSpanCondition.classList.add('forecast-data');
                secondAtFirstSpanCondition.textContent = `${data[1].forecast[0].low}°${data[1].forecast[0].high}°`;

                const thirdAtFirstSpanCondition = document.createElement('span');
                thirdAtFirstSpanCondition.classList.add('forecast-data');
                thirdAtFirstSpanCondition.textContent = data[1].forecast[0].condition;
                
                spanFirstUpComing.appendChild(firstAtFirstSpanCondition);
                spanFirstUpComing.appendChild(secondAtFirstSpanCondition);
                spanFirstUpComing.appendChild(thirdAtFirstSpanCondition);

                divUpComingInfo.appendChild(spanFirstUpComing);
                forecastElement.appendChild(divUpComingInfo);



                const spanSecondUpComing = document.createElement('span');
                spanSecondUpComing.classList.add('upcoming');

                const firstAtSecondSpanCondition = document.createElement('span');
                firstAtSecondSpanCondition.classList.add('symbol');
                if (data[1].forecast[1].condition === 'Partly sunny') {
                    firstAtSecondSpanCondition.textContent = '⛅';
                } else if (data[1].forecast[1].condition === 'Sunny') {
                    firstAtSecondSpanCondition.textContent = '☀';
                } else if (data[1].forecast[1].condition === 'Overcast') {
                    firstAtSecondSpanCondition.textContent = '☁';
                } else if (data[1].forecast[1].condition === 'Rain') {
                    firstAtSecondSpanCondition.textContent = '☂';
                }
                
                const secondAtSecondSpanCondition = document.createElement('span');
                secondAtSecondSpanCondition.classList.add('forecast-data');
                secondAtSecondSpanCondition.textContent = `${data[1].forecast[1].low}°${data[1].forecast[1].high}°`;

                const thirdAtSecondSpanCondition = document.createElement('span');
                thirdAtSecondSpanCondition.classList.add('forecast-data');
                thirdAtSecondSpanCondition.textContent = data[1].forecast[1].condition;

                spanSecondUpComing.appendChild(firstAtSecondSpanCondition);
                spanSecondUpComing.appendChild(secondAtSecondSpanCondition);
                spanSecondUpComing.appendChild(thirdAtSecondSpanCondition);

                divUpComingInfo.appendChild(spanSecondUpComing);
                forecastElement.appendChild(divUpComingInfo);




                const spanThirdUpComing = document.createElement('span');
                spanThirdUpComing.classList.add('upcoming');

                const firstAtThirdSpanCondition = document.createElement('span');
                firstAtThirdSpanCondition.classList.add('symbol');
                if (data[1].forecast[2].condition === 'Partly sunny') {
                    firstAtThirdSpanCondition.textContent = '⛅';
                } else if (data[1].forecast[2].condition === 'Sunny') {
                    firstAtThirdSpanCondition.textContent = '☀';
                } else if (data[1].forecast[2].condition === 'Overcast') {
                    firstAtThirdSpanCondition.textContent = '☁';
                } else if (data[1].forecast[2].condition === 'Rain') {
                    firstAtThirdSpanCondition.textContent = '☂';
                }
                
                const secondAtThirdSpanCondition = document.createElement('span');
                secondAtThirdSpanCondition.classList.add('forecast-data');
                secondAtThirdSpanCondition.textContent = `${data[1].forecast[2].low}°${data[1].forecast[2].high}°`;

                const thirdAtThirdSpanCondition = document.createElement('span');
                thirdAtThirdSpanCondition.classList.add('forecast-data');
                thirdAtThirdSpanCondition.textContent = data[1].forecast[2].condition;

                spanThirdUpComing.appendChild(firstAtThirdSpanCondition);
                spanThirdUpComing.appendChild(secondAtThirdSpanCondition);
                spanThirdUpComing.appendChild(thirdAtThirdSpanCondition);

                divUpComingInfo.appendChild(spanThirdUpComing);
                forecastElement.appendChild(divUpComingInfo);

                divUpComingInfo.style.textAlign = 'center';
            })
            .catch(() => {
                const forecastElement = document.getElementById('forecast');
                forecastElement.style.display = 'block';

                const errorElement = document.createElement('span');
                errorElement.textContent = 'Error';
                forecastElement.appendChild(errorElement);
                forecastElement.style.textAlign = 'center';
                forecastElement.style.fontSize = '30px';
            }
            )
    })
}

attachEvents();