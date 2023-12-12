document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('workoutForm');
    const suggestedWorkoutsContainer = document.getElementById('suggestedWorkoutsList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const goals = document.getElementById('goals').value;
        const workoutType = document.getElementById('workout-type').value;

        const suggestedWorkouts = getSuggestedWorkouts(goals, workoutType);

        displaySuggestedWorkouts(suggestedWorkouts);
    });

    //suggested workouts for different goal and workout type combinations
    function getSuggestedWorkouts(goals, workoutType) {
        const suggestedWorkouts = {
            'gain strength-strength-training': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: '3-4 reps' },
                { name: 'Arnold Split', image: 'arnold.webp', repRange: '3-4 reps' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: '3-4 reps' },
            ],
            'gain strength-bodybuilding': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: 'til failure' },
                { name: 'Arnold Split', image: 'arnold.webp', repRange: 'til failure' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: 'til failure' },
            ],
            'gain strength-aerobic': [
                { name: 'Bro Split', image: 'bro.jpg', repRange: '10-12 reps' },
                { name: 'Upper/Lower Split', image: 'UL.jpg', repRange: '10-12 reps' },
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: '10-12 reps' },
            ],
            'gain strength-calisthenics': [
                { name: 'Calisthenics Split', image: 'calisthenics.jpg', repRange: 'high reps of body weight' },
            ],
            'tone-strength-training': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: '8-10 reps' },
                { name: 'Arnold Split', image: 'arnold.webp', repRange: '8-10 reps' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: '8-10 reps' },
            ],
            'tone-bodybuilding': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: 'til failure' },
                { name: 'Arnold Split', image: 'arnold.webp', repRange: 'til failure' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: 'til failure' },
            ],
            'tone-aerobic': [
                { name: 'Full Body Split', image: 'fullbody.jpg', repRange: '10-12 reps' },
                { name: 'Bro Split', image: 'bro.jpg', repRange: '10-12 reps' },
                { name: 'Upper/Lower Split', image: 'UL.jpg', repRange: '10-12 reps' },
            ],
            'tone-calisthenics': [
                { name: 'Calisthenics Split', image: 'calisthenics.jpg', repRange: 'high reps of body weight' },
            ],
            'lose weight-strength-training': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: '6-8 reps' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: '6-8 reps' },
                { name: 'Upper/Lower Split', image: 'UL.jpg', repRange: '6-8 reps' },
            ],
            'lose weight-bodybuilding': [
                { name: 'PPL (Push/Pull/Legs)', image: 'ppl.png', repRange: 'til failure' },
                { name: 'Arnold Split', image: 'arnold.webp', repRange: 'til failure' },
                { name: 'Hybrid Split (PPL x Arnold)', image: 'hybrid.jpg', repRange: 'til failure' },
            ],
            'lose weight-aerobic': [
                { name: 'Full Body Split', image: 'fullbody.jpg', repRange: '10-12 reps' },
                { name: 'Bro Split', image: 'bro.jpg', repRange: '10-12 reps' },
            ],
            'lose weight-calisthenics': [
                { name: 'Calisthenics Split', image: 'calisthenics.jpg', repRange: 'high reps of body weight' },
            ],
        };

        const userGoals = goals.toLowerCase().split(',');
        let suggestedWorkoutsList = [];

        userGoals.forEach(goal => {
            const workoutsForGoal = suggestedWorkouts[goal + '-' + workoutType] || [];
            suggestedWorkoutsList = suggestedWorkoutsList.concat(workoutsForGoal);
        });

        return suggestedWorkoutsList;
    }

    // Function to display suggested workouts in the container
    function displaySuggestedWorkouts(workouts) {
        suggestedWorkoutsContainer.innerHTML = '';

        // Create an unordered list
        const workoutList = document.createElement('ul');

        workouts.forEach(workout => {
            // Create a list item for each workout
            const workoutItem = document.createElement('li');

            const workoutCard = document.createElement('div');
            workoutCard.className = 'card';

            const workoutImage = document.createElement('img');
            workoutImage.src = workout.image;
            workoutImage.alt = workout.name;
            workoutImage.className = 'workout-image';

            const workoutName = document.createElement('p');
            workoutName.textContent = workout.name;

            const repRange = document.createElement('p');
            repRange.textContent = 'Rep Range: ' + workout.repRange;

            workoutCard.appendChild(workoutImage);
            workoutCard.appendChild(workoutName);
            workoutCard.appendChild(repRange);

            workoutItem.appendChild(workoutCard);

            // Append each list item to the unordered list
            workoutList.appendChild(workoutItem);
        });

        // Append the unordered list to the "suggested-workouts" div
        suggestedWorkoutsContainer.appendChild(workoutList);
    }
});