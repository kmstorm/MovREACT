import pandas as pd
from numpy import nan

data = pd.read_csv("UsedDataset/Movie.csv")
data["Runtime (mins)"] = (data["Runtime (mins)"].fillna(-1)).astype(int)
dataDict = data.to_dict()
# print(dataDict["Runtime (mins)"])
with open("UsedDataset/Movie.txt", "w") as file:
    for i in range(710):
        MovieID = dataDict["MovieID"][i]
        Title = dataDict["Title"][i]
        url = dataDict["URL"][i]
        Type = dataDict["Title Type"][i]
        Rate = dataDict["IMDb Rating"][i]
        Time = int(dataDict["Runtime (mins)"][i])
        Year = dataDict["Year"][i]
        Genres = dataDict["Genres"][i]
        Poster = dataDict["Poster"][i]
        string = f"insert into dbo.Movie values('{MovieID}','{Title}','{url}','{Type}',{Rate},{Time if (Time!=-1) else 'null'},{Year},'{Genres}','{Poster}')"
        file.write(string+"\n")
 
