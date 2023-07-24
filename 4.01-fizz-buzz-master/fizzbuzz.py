#Implement Fizz Buzz, by counting from 0 up to 100
for num in range(101):

#If the number is evenly divisible by both 3 and 5, print fizzbuzz
    if num % 3 == 0 and num % 5 == 0:
        print('fizzbuzz')

#If the number is evenly divisible by 3, print fizz
    elif num % 3 == 0:
        print('fizz')

#If the number is evenly divisible by 5, print buzz
    elif num % 5 == 0:
        print('buzz')

#Otherwise, just print the number
    else:
        print(str(num))