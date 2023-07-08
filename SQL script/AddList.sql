create table dbo.AddList(
ListID int,
MovieID [nvarchar](50),
CONSTRAINT fkAddList1 FOREIGN KEY (MovieID) REFERENCES dbo.Movie (MovieID),
CONSTRAINT fkAddList2 FOREIGN KEY (ListID) REFERENCES dbo.List (ListID)
)