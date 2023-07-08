import pandas as pd


data = pd.read_csv("Director.csv")
dataDict = data.to_dict()
print(dataDict)
with open("Director.txt", "w") as file:
    for i in range(710):
        MovieID = dataDict["MovieID"][i]
        Director = dataDict["Director"][i]
        string = f"insert into dbo.Director values ('{Director}','{MovieID}')"
        file.write(string+"\n")
 
