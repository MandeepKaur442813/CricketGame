document.addEventListener('DOMContentLoaded', load);

function load() {
    const bat = document.querySelector('#bat');
    const ball = document.querySelector('#ball');
    const stump = document.querySelector('#stump');
    let computerChoice;

    bat.addEventListener('click', (e) => {
        const random = Math.random() * 3;

        if (random > 0 && random <= 1) 
        {
            computerChoice = 'Bat';
        }
        else if (random > 1 && random <= 2) 
        {
            computerChoice = 'Ball';
        }
        else
        {
            computerChoice = 'Stump';
        }

        let result;

        if (computerChoice === 'Ball') 
        {
            result = 'User Won!!';
        }
        else if (computerChoice === 'Bat') 
        {
            result = `It's a tie.`;
        }
        else if (computerChoice == 'Stump')
        {
            result = 'Computer Won!!';
        }

        alert(`You have chosen Bat.\nComputer's choice is ${computerChoice}.\n${result}`);
    })

    ball.addEventListener('click', (e) => {
        const random = Math.random() * 3;

        if (random > 0 && random <= 1) 
        {
            computerChoice = 'Bat';
        }
        else if (random > 1 && random <= 2) 
        {
            computerChoice = 'Ball';
        }
        else
        {
            computerChoice = 'Stump';
        }

        let result;

        if (computerChoice === 'Ball') 
        {
             
            result = `It's a tie.`;
        }
        else if (computerChoice === 'Bat') 
        {
            result =  'Computer Won!!';
        }
        else if (computerChoice == 'Stump')
        {
            result = 'User Won!!';
        }

        alert(`You have chosen Ball.\nComputer's choice is ${computerChoice}.\n${result}`);
    })

    stump.addEventListener('click', (e) => {
        const random = Math.random() * 3;

        if (random > 0 && random <= 1) 
        {
            computerChoice = 'Bat';
        }
        else if (random > 1 && random <= 2) 
        {
            computerChoice = 'Ball';
        }
        else
        {
            computerChoice = 'Stump';
        }

        let result;

        if (computerChoice === 'Ball') 
        {
            result = 'Computer Won!!';
        }
        else if (computerChoice === 'Bat') 
        {
            result = 'User Won!!';
        }
        else if (computerChoice == 'Stump')
        {
            result = `It's a tie.`;
        }

        alert(`You have chosen Stump.\nComputer's choice is ${computerChoice}.\n${result}`);
    })
}