create table dbo.List(
ListID int identity(1,1),
ListName varchar(20),
DateAdding datetime,
CreatedUser [nvarchar](50),
CONSTRAINT pkList PRIMARY KEY (ListID)
)