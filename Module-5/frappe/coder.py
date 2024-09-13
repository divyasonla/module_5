# import re  # Import regular expressions module

# def CodelandUsernameValidation(username):
#     # Check if the length is between 4 and 25 characters
#     if len(username) < 4 or len(username) > 25:
#         return "false"
    
#     # Check if the username starts with a letter
#     if not username[0].isalpha():
#         return "false"
    
#     # Check if the username ends with an underscore
#     if username[-1] == '_':
#         return "false"
    
#     # Check if the username contains only letters, numbers, or underscores
#     if not re.match("^[a-zA-Z0-9_]*$", username):
#         return "false"
    
#     # If all checks pass, the username is valid
#     return "true"

# # Example usage:
# print(CodelandUsernameValidation("valid_"))  # Output: "true"
# print(CodelandUsernameValidation("invalid_username"))  # Output: "false"
# print(CodelandUsernameValidation("invalid_"))  # Output: "false"


# def LongestWord(sen):
#  cleaned_sen = ""
#     for char in sen:
#         if char.isalnum() or char == ' ':
#             cleaned_sen += char
#   v = cleanned_sen.split()
#   maxs=v[0]
#   for i in range(1,len(v)):

#     if len(maxs) < len(v[i]):
#       maxs = v[i]

#     elif len(maxs) == len(v[i]):
#       return maxs
    
#   return maxs
     
  
# #   return v
   

# sen = "i amertyud divya sdfgh awertyuj"

# print(LongestWord(sen))



# Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

# def FirstFactorial(num):
#   sum_num=1
#   for i in range(1,num+1):
#     sum_num = sum_num * i
  
#   return sum_num

# print(FirstFactorial(int(input())))



# Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
# 

# def FirstReverse(strParam):

#   reverse = strParam[::-1]
#   return reverse

# print(FirstReverse(input()))


# def FindIntersection(strArr):
#   arr=list(strArr[0].split(','))
#   arr1=list(strArr[1].split(','))
#   brr=[]
# #   arr=[]
# #   for i in range(strArr):
# #     arr=strArr[i]
#   for i in arr:
#     for i in arr1:
#       if i not in brr:
#         brr.append(i)
      


 

#   return brr



# Bracket Combinations
# Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.

# def BracketCombinations(num):
#   c = [0] * (num+1)
#   c[0] =1 
#   c[1]=1

#   for n in range(2,num+1):
#    c[n]=0
#    for i in range(n):
#      c[n]+= c[i]*c[n-1-i]
#   return c[n]
  


#   # code goes here
#   # return num

# # keep this function call here 
# print(BracketCombinations(input()))




# def QuestionsMarks(words):
#     solve=False
#     for i in range(len(words)):
#         if words[i].isdigit():
#             for j in range(i+1,len(words)):
#                 if words[j].isdigit():
#                     if int(words[i])+int(words[j]) == 10:
#                         solve= True
#                         substring=words[i+1:j]
#                         if substring.count('?') !=3:
#                             return False
#     return solve


# words = "acc?7??sss?3rr1??????5"
# print(QuestionsMarks(words))

# i = 1

# while True:
#     if i%3 == 0:
#         break

#     print(i)



# i + = 1

# a=2**(3**2)

# b=(2**3)**2

# c=2**3**2

# print(a,b,c)


# class tester:

#    def __init__(self, id):

#       self.id = str(id)

# id="224"

# temp = tester(12)

# print(temp.id)