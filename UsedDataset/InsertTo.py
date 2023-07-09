import pandas as pd

data = pd.read_csv("UsedDataset/Movie.csv")
dataDict = data.to_dict()
# print(dataDict)
with open("UsedDataset/Movie.txt", "w") as file:
    for i in range(710):
        MovieID = dataDict["MovieID"][i]
        Title = dataDict["Title"][i]
        url = dataDict["URL"][i]
        Type = dataDict["Title Type"][i]
        Rate = dataDict["IMDb Rating"][i]
        Time = dataDict["Runtime (mins)"][i]
        Year = dataDict["Year"][i]
        Genres = dataDict["Genres"][i]
        Poster = dataDict["Poster"][i]
        string = f"insert into dbo.Movie values('{MovieID}','{Title}','{url}','{Type}',{Rate},{Time},{Year},'{Genres}','{Poster}')"
        file.write(string+"\n")
 
