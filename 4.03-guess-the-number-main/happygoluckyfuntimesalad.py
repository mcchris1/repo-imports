import random

def compare():
    pseudo_random_number = random.randint(1, 99)
    #print(pseudo_random_number)
    guess = int(input('Input an integer betwixt nothing and one-hundred, ape: '))

    if guess == pseudo_random_number:
        guess_more = input('Double your money (Y/N):')
        if guess_more == 'Y':
            compare()
        else: print('Jesus loves you, ape.')
    else:
        print('Try again, ape.')
        guess == int(input('Input an integer betwixt nothing and one-hundred, ape: '))
        compare()

compare()