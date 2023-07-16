using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using API.Models;
using System;
namespace WebAppSql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public MovieController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        //Get method to Select for filmBox
        public JsonResult Get()
        {
            string query = @"
                            SELECT [MovREACT].[dbo].[Movie].[MovieID], [Title], [FilmURL], [IMDBRating], [Runtime], [ReleasedYear], [GenreTotal],[PosterLink], [Director]
                            FROM [MovREACT].[dbo].[Movie] inner join [MovREACT].[dbo].[Director]
                            ON [MovREACT].[dbo].[Movie].[MovieID] = [MovREACT].[dbo].[Director].[MovieID]
                            ORDER BY NEWID()
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("MovREACTCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                 myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        public JsonResult Post(Movie mov)
        {
            try
            {
                string query = @"
                           insert into [MovREACT].[dbo].[Movie]
                            (MovieID,Title,FilmURL,TitleType,IMDBRating,Runtime,ReleasedYear,GenreTotal,PosterLink)
                            values(@MovieID,@Title,@FilmURL,@TitleType,@IMDBRating,@Runtime,@ReleasedYear,@GenreTotal,@PosterLink);
                            insert into [MovREACT].[dbo].[Director] 
                            (Director,MovieID)
                            values (@Director,@MovieID);
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("MovREACTCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@MovieID", mov.MovieID);
                        myCommand.Parameters.AddWithValue("@Title", mov.Title);
                        myCommand.Parameters.AddWithValue("@FilmURL", mov.FilmURL);
                        myCommand.Parameters.AddWithValue("@TitleType", mov.TitleType);
                        myCommand.Parameters.AddWithValue("@IMDBRating", mov.IMDBRating);
                        myCommand.Parameters.AddWithValue("@Runtime", mov.Runtime);
                        myCommand.Parameters.AddWithValue("@ReleasedYear", mov.ReleasedYear);
                        myCommand.Parameters.AddWithValue("@PosterLink", mov.PosterLink);
                        myCommand.Parameters.AddWithValue("@Director", mov.Director);
                        myCommand.Parameters.AddWithValue("@GenreTotal", mov.GenreTotal);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                string[] GenreSplit = mov.GenreTotal.Trim().Split(',');
                foreach (string i in GenreSplit)
                {
                    string query2 = @"
                           insert into [MovREACT].[dbo].[Genres] values
                            (@Genre,@MovieID)
                            ";
                    DataTable table2 = new DataTable();
                    string sqlDataSource2 = _configuration.GetConnectionString("MovREACTCon");
                    SqlDataReader myReader2;
                    using (SqlConnection myCon2 = new SqlConnection(sqlDataSource2))
                    {
                        myCon2.Open();
                        using (SqlCommand myCommand2 = new SqlCommand(query2, myCon2))
                        {
                            myCommand2.Parameters.AddWithValue("@MovieID", mov.MovieID);
                            myCommand2.Parameters.AddWithValue("@Genre", i);
                            myReader2 = myCommand2.ExecuteReader();
                            table2.Load(myReader2);
                            myReader2.Close();
                            myCon2.Close();
                        }
                    }
                }

                return new JsonResult("Added Successfully");
            }
            catch (System.Data.SqlClient.SqlException)
            {
                Put(mov);
                string Message = "This MovieID is in list so we update it!";
                return new JsonResult(Message);
            }
        }


        [HttpPut]
        public JsonResult Put(Movie mov)
        {
            try
            {
                string query = @"
                        update [MovREACT].[dbo].[Movie] set
                        Title = @Title,FilmURL = @FilmURL,TitleType = @TitleType,IMDBRating = @IMDBRating,Runtime=@Runtime,
                        ReleasedYear = @ReleasedYear,GenreTotal = @GenreTotal,PosterLink = @PosterLink
                        where MovieID = @MovieID;
                        update [MovREACT].[dbo].[Director] set 
                        Director = @Director
                        where MovieID = @MovieID;
                        ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("MovREACTCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@MovieID", mov.MovieID);
                        myCommand.Parameters.AddWithValue("@Title", mov.Title);
                        myCommand.Parameters.AddWithValue("@FilmURL", mov.FilmURL);
                        myCommand.Parameters.AddWithValue("@TitleType", mov.TitleType);
                        myCommand.Parameters.AddWithValue("@IMDBRating", mov.IMDBRating);
                        myCommand.Parameters.AddWithValue("@Runtime", mov.Runtime);
                        myCommand.Parameters.AddWithValue("@ReleasedYear", mov.ReleasedYear);
                        myCommand.Parameters.AddWithValue("@PosterLink", mov.PosterLink);
                        myCommand.Parameters.AddWithValue("@Director", mov.Director);
                        myCommand.Parameters.AddWithValue("@GenreTotal", mov.GenreTotal);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                Delete(mov);
                string[] GenreSplit = mov.GenreTotal.Trim().Split(',');
                foreach (string i in GenreSplit)
                {
                    string query2 = @"
                        insert into [MovREACT].[dbo].[Genres] values
                        (@Genre, @MovieID)
                        ";
                    DataTable table2 = new DataTable();
                    string sqlDataSource2 = _configuration.GetConnectionString("MovREACTCon");
                    SqlDataReader myReader2;
                    using (SqlConnection myCon2 = new SqlConnection(sqlDataSource2))
                    {
                        myCon2.Open();
                        using (SqlCommand myCommand2 = new SqlCommand(query2, myCon2))
                        {
                            myCommand2.Parameters.AddWithValue("@MovieID", mov.MovieID);
                            myCommand2.Parameters.AddWithValue("@Genre", i);
                            myReader2 = myCommand2.ExecuteReader();
                            table2.Load(myReader2);
                            myReader2.Close();
                            myCon2.Close();
                        }
                    }
                }
                return new JsonResult("Done");
            }
            catch (System.Data.SqlClient.SqlException)
            {

                string Message = "SqlException";
                return new JsonResult(Message);
            }
        }
        [HttpDelete]
        public JsonResult Delete(Movie mov)
        {
            try
            {
                string query = @"
                            delete from dbo.Genres where MovieID = @MovieID
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("MovREACTCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@MovieID", mov.MovieID);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Deleted Successfully");
            }
            catch (System.Data.SqlClient.SqlException)
            {
                string Message = "There is nothing to delete !";
                return new JsonResult(Message);
            }

        }
    } 
}
