from capitals import states
import random 

def hello_ape():
    print("Live or die, it's time to name some capitals, ape.")

    random.shuffle(states)

    correct = 0
    incorrect = 0

    for state in states:
        ape_say = input(f'Name the capital of {state["name"]}: ')
        if ape_say == state['capital']:
            correct += 1
        else:
            incorrect += 1 
        print(f'Correct: {correct}, Incorrect: {incorrect}')

    again_ape = input(f'She was an A-mer-i-can ape with lots of places to run to. Try again (Y/N): ')
    if again_ape == 'Y':
        hello_ape()
    else:
        print("G'night, ape.")
        exit()

hello_ape()