# 1
# num = int(input('enter a number'))
# for i in range(1,num):
#     if(i%5==0 and i%11==0):
#         print('both')
#     elif(i%5==0):
#         print('5')
#     elif(i%11==0):
#         print('11')
#     else:
#         print('none')




# Input 3 numbers from the user, and print the second max without using logical operators (and, or)

# num1=int(input('enter num1:'))
# num2=int(input('enter num2:'))
# num3=int(input('enter num3:'))
# if(num1>num2):
#     max=num1
#     min=num2
# else:
#     max=num2
#     min=num1
# if(max>num3):
#     max1=max
#     min1=num3
# else:
#     max1=num3
#     min1=max
# if(min>min1):
#     print(min)
# else:
#     print(min1)


# Take an input n and repeatedly find the sum of the digits of a number till you get a single digit.
# Example: 678 -> 6+7+8 = 21 -> 2+1 = 3

# n=int(input('enter num :'))
# s=0
# while n>0 :
#     i=n%10
#     s=s+i
#     n=n//10
# print(s)
# d=0
# while s>0 :
#     j=s%10
#     d=d+j
#     s=s//10
# print(d)





# 5
# n=int(input('enter num :'))
# b=0
# for i in range(2,n):

#     # for j in range(1,i):
#     j=2
#     c=0
#     while j<=i:
#         if(i%j==0):
#             c=c+1
#         j=j+1
#     if(c>1):
#         print(i)
#         b=b+1
#     else:
#         print(0)
# print('there is a first prime numbers ',b)

# 6
# n=int(input('enter num :'))
# sum=0
# term =0
# for i in range(1,n+1):
#     # for j in range (1,i+1):
#     term=int(input('enter i :'))
#         # print(term)
#     sum = sum+term
# print(sum)


# n=int(input('enter a num :'))
# str=""
# for i in range (1,n):
#     b=1
#     for j in range(1,i+1):
#         str=str,b
#         b=b+1
#     str = str,"\n"
# print(str)


# def print_floyds_triangle(n):
#     num = 1  # Starting number
#     for i in range(1, n + 1):  # For each row
#         row = []  # To collect numbers for the current row
#         for j in range(i):  # Print i numbers in the ith row
#             row.append(num)
#             num += 1
#         print(' '.join(map(str, row)))  # Print all numbers in the row separated by space

# # Input number of rows
# n = int(input('Enter the number of rows for Floyd\'s Triangle: '))
# print_floyds_triangle(n)







# 9


# def find_subarray_with_sum(arr, target_sum):
#     for i in range(len(arr)):
#         current_sum = 0

#         for j in range(i, len(arr)):
#             current_sum += arr[j]
            
#             if current_sum == target_sum:
#                 return f"Sum found between indexes {i} and {j}"

#     return "No subarray with the given sum was found."

# arr = [1, 4, 20, 3, 10, 5]
# target_sum = 33
# result = find_subarray_with_sum(arr, target_sum)
# print(result)




# 10b
# def rearrange_array(arr):
#     negative_numbers = []
#     positive_numbers = []

#     for num in arr:
#         if num < 0:
#             negative_numbers.append(num)
#         else:
#             positive_numbers.append(num)

#     return negative_numbers + positive_numbers

# arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
# result = rearrange_array(arr)
# print(result)
