class problem:
    def __init__(self,l1,l2):
        self.l1=l1
        self.l2=l2
    def getdata(self):
        self.l1=input("enter 1starray")
        self.l2=input("second array")

    def returndata(self):
        

        ar1=[]
        ar1=[self.l1]
        ar2=[self.l2]
        a=''
        for i in ar1:
            print(a+i)
callfn=problem('','')
callfn.getdata()
callfn.returndata()