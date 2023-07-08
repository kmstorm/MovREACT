CREATE TABLE [dbo].[Movie](
	[MovieID] [nvarchar](50) NOT NULL,
	[Title] [nvarchar](100) NOT NULL,
	[FilmURL] [nvarchar](50) NOT NULL,
	[TitleType] [nvarchar](50) NOT NULL,
	[IMDBRating] [float] NULL,
	[Runtime] [smallint] NULL,
	[ReleasedYear] [smallint] NOT NULL,
	[GenreTotal] [nvarchar](100) NOT NULL,
	[PosterLink] [nvarchar](100) NULL,
	CONSTRAINT pkMovie PRIMARY KEY (MovieID)
)

