# testing kwargs
#
#list of kwargs
# kwargs = dictionary
#list all the kwargs

def myKwargs(**kwargs):
    print("kwargs is ",type(kwargs))
    print(kwargs)
    #print (*b is*,kwargs["b"])

#scenario a=23,b=30 =? {a:23,b:30}
# myKwargs(a=23,b=30,c=40)#{}
# kwargs -> {"a":23,"b":30}
# 
# scenario bno 3
# name ="samson" email="samson@gmail.com"
# mykwargs ({"name":"samson"}) 
myKwargs(name="samson",email="sam@sam.com",dict={"a":"a"}) 
def area_rectangle(length,width):
    area=length*width
    print(f"for rectangle with length{length} and width {width} area is {area}")

#option 1 call it directly with args
area_rectangle(5,2)
width=4
length=39
area_rectangle(width,length)#args
area_rectangle(width=width,length=length)#kwargs
#option 3 you with kwargs:<>      
area_rectangle(width=10,length=55)
#you have to macth the parameter names with arguments
area_rectangle(width=10,length=55)
#area_rectangle(40)