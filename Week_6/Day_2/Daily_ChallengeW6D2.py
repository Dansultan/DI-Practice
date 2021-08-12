a = input('Please enter a string with with 10 characters')
if len(a)<10:
    print('Too short')
elif len(a)>10:
    print('Too long')
else:
    print(a[0],a[9])

i=0
for element in range(0, len(a)):
    print(a[0:element])

import random

str_var = list(a)
random.shuffle(str_var)
print (''.join(str_var))






