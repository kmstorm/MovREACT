create table dbo.Genres(
Genre varchar(10),
MovieID [nvarchar](50),
CONSTRAINT fk1Genres FOREIGN KEY (MovieID) REFERENCES dbo.Movie (MovieID)
)