function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';
    const loadMealsButtonElement = document.getElementById('load-meals');
    const editMealButtonElement = document.getElementById('edit-meal');
    const addMeal = document.getElementById('add-meal');
    const formElement = document.getElementById('form');

    let loadMeals;

    const newFoodNameElement = document.getElementById('food');
    const newFoodTimeElement = document.getElementById('time');
    const newFoodCaloriesElement = document.getElementById('calories');

    const containerMeals = document.getElementById('list');


    addMeal.addEventListener('click', () => {

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                food: newFoodNameElement.value,
                calories: newFoodCaloriesElement.value,
                time: newFoodTimeElement.value,
            })
        });
        containerMeals.innerHTML = '';
        newFoodNameElement.value = '';
        newFoodTimeElement.value = '';
        newFoodCaloriesElement.value = '';
        loadMeals();
    })

    loadMealsButtonElement.addEventListener('click', () => {
        loadMeals();
    });

    loadMeals = function () {
        fetch(baseUrl)
            .then(result => result.json())
            .then(data => {
                containerMeals.innerHTML = '';
                for (const meal of Object.values(data)) {

                    const changeMeal = document.createElement('button');
                    changeMeal.classList.add('change-meal');
                    changeMeal.textContent = 'Change';

                    const deleteMeal = document.createElement('button');
                    deleteMeal.classList.add('delete-meal');
                    deleteMeal.textContent = 'Delete';

                    const divButtons = document.createElement('div');
                    divButtons.classList.add('meal-buttons');

                    divButtons.appendChild(changeMeal);
                    divButtons.appendChild(deleteMeal);

                    const h3Calory = document.createElement('h3');
                    h3Calory.textContent = meal.calories;

                    const h3Time = document.createElement('h3');
                    h3Time.textContent = meal.time;

                    const h2MealName = document.createElement('h2');
                    h2MealName.textContent = meal.food;

                    const newMeal = document.createElement('div');
                    newMeal.classList.add('meal');
                    newMeal.appendChild(h2MealName);
                    newMeal.appendChild(h3Time);
                    newMeal.appendChild(h3Calory);
                    newMeal.appendChild(divButtons);

                    containerMeals.appendChild(newMeal);

                    changeMeal.addEventListener('click', () => {
                        newFoodNameElement.value = h2MealName.textContent;
                        newFoodTimeElement.value = h3Time.textContent;
                        newFoodCaloriesElement.value = h3Calory.textContent;

                        containerMeals.removeChild(newMeal);
                        editMealButtonElement.removeAttribute('disabled');
                        addMeal.setAttribute('disabled', 'disabled');

                        editMealButtonElement.addEventListener('click', () => {
                            fetch(`${baseUrl}/${meal._id}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify({
                                    food: newFoodNameElement.value,
                                    time: newFoodTimeElement.value,
                                    calories: newFoodCaloriesElement.value,
                                    _id: meal._id,
                                })
                            });

                            containerMeals.innerHTML = '';
                            loadMeals();
                            editMealButtonElement.setAttribute('disabled', 'disabled');
                            addMeal.removeAttribute('disabled');
                        })
                    })

                    deleteMeal.addEventListener('click', () => {
                        fetch(`${baseUrl}/${meal._id}`, {
                            method: 'DELETE',
                        })
                        console.log('aaaebebebeeb');
                        containerMeals.innerHTML = '';
                        loadMeals();
                    });

                }
            })
    }
}

solve();