namespace API.Models
{
    public class Movie
    {
        public string MovieID { get; set; }
        public string Title { get; set; }
        public string FilmURL { get; set; }

        public string TitleType { get; set; }
        public float IMDBRating { get; set; }
        public int Runtime { get; set; }
        public int ReleasedYear { get; set; }
        public string GenreTotal { get; set; }
        public string PosterLink { get; set; }

        public string Director { get; set; }
    }
}
