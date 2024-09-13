# def createlist():
#     n=int(input('enter'))

#     arr=[]
#     for i in range(0,n):
#         arr.append(int(input('enter')))
#     return arr


# arr=createlist()
# print(arr)

# def sum(brr):
#     sum=0

#     for i in range(len(brr)):
#         sum = sum + arr[i]
#     print(sum)
#     return(sum)
# print(sum(arr))

# def greet(name):
#     return "hello!" + name
# name="divya"
# print(greet(name))

# a=int(input('enter'))
# def sum(a):
#     b=8
#     sum=b+a
#     print(sum)
# sum(a)


# d = {1:35, 2:-12, 3:47, 4: -22, 5: -13}
# s=0
# for i in d:
#     s=s+d[i]
# print(s)


# dic1={1:10, 2:20}
# dic2={3:30, 4:40}
# dic3={5:50,6:60}

# dic4={}

# for i in (dic1,dic2,dic3):
#     dic4.update(i)
# print(dic4)




class Car:
    def __init__(self,color,year):
        self.col=color
        self.ye=year
a=Car("Pink",2021)
print(a.col)