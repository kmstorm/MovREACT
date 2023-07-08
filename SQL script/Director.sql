create table dbo.Director(
Director varchar(50),
MovieID [nvarchar](50),
CONSTRAINT fk1Director FOREIGN KEY (MovieID) REFERENCES dbo.Movie (MovieID)
)