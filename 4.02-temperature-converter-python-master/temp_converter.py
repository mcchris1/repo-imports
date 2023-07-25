#Ask the user for two inputs and store them in their own variables...
#Typecasting integer input: temp_value = int v float(input(''))???

temp_value = int(input('Input integer, ape: '))
#print(temp_value)
temp_unit = input('Input unit. Of measurement, ape. f, C, K: ')
#print(temp_unit)

def convert_temp():
    if temp_unit == 'f':
        C_output = (int(temp_value) - 32) / 1.8
        K_output = (int(temp_value) + 459.67) / 1.8 
        print(f"{C_output} °C\n{K_output} K")
    elif temp_unit == 'C':
        F_output = int(temp_value) * 1.8 +32
        K_output = int(temp_value) + 273.15
        print(f"{F_output} °F\n{K_output} K")
    elif temp_unit == 'K':
        C_output = int(temp_value) - 273.15
        F_output = int(temp_value) * 1.8 -459.67
        print(f"{C_output} °C\n{F_output} °F")
    else:
        print('Follow directions, ape.')

convert_temp()

#Fahrenheit-to-Celsius	C = ( F - 32) / 1.8
#Fahrenheit-to-kelvin	K = ( F + 459.67) / 1.8
#Celsius-to-Fahrenheit	F =  C × 1.8 + 32
#Celsius-to-kelvin	    K = C  + 273.15	
#kelvin-to-Celsius	    C = K - 273.15
#kelvin-to-Fahrenheit	F = K × 1.8 - 459.67