# testing kwargs
#
#list of kwargs
#The list of kwargs
def myKwargs(**kwargs):
    print("kwargs is ",type(kwargs))
    print(kwargs)
    #print("b is ", kwargs ["b"])


#scenario a=23,b=30 =? {a:23,b:30}
myKwargs(a=23,b=30)

#scenario bn0 3
#name ="samson" emaol ="sam@sam.com"
#mykwargs({"name":"samson"})
myKwargs(name="samson",email="sam@sam.com",dict={"a":"a"})