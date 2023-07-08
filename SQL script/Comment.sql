create table dbo.Comment(
CommentID int identity(1,1),
Username varchar(20),
Comment varchar(2000),
MovieID [nvarchar](50),
CommentDate datetime,
CONSTRAINT pkComment PRIMARY KEY (CommentID),
CONSTRAINT fk1Comment FOREIGN KEY (MovieID) REFERENCES dbo.Movie (MovieID)
)