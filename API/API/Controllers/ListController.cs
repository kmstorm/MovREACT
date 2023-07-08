using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using API.Models;

namespace WebAppSql.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListController: ControllerBase
    {

        private readonly IConfiguration _configuration;
        public ListController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        //Get method to Select for List of List
        public JsonResult Get()
        {
            string query = @"
                            SELECT * FROM [Wikimdb].[dbo].[List]
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
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
        public JsonResult Post(ListClass licla)
        {
            string query = @"
                           insert into dbo.List
                    values (@ListName,GETDATE(),@CreatedUser)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ListName",licla.ListName);
                    myCommand.Parameters.AddWithValue("@CreatedUser", licla.CreatedUser);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            try
            {
                string query = @"
                            delete from dbo.AddList where ListID = @ListID
                           delete from dbo.List where ListID =@ListID 
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@ListID", id);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Deleted Successfully");
            }
            catch(System.Data.SqlClient.SqlException)
            {
                string Message = "There is nothing to delete !";
                return new JsonResult(Message);
            }

        }


        [HttpGet("GetInfoListID/{id}")]
        //Get method to search title
        public JsonResult Get(int id)
        {
            
            string query = @"
                        SELECT DISTINCT [Wikimdb].[dbo].[Movie].[MovieID], [Title], [FilmURL],[TitleType] [IMDBRating], [Runtime], [ReleasedYear], [GenreTotal],[PosterLink], [Wikimdb].[dbo].[Director].[Director]
                        FROM [Wikimdb].[dbo].[Movie] inner join [Wikimdb].[dbo].[AddList]
                        ON [Wikimdb].[dbo].[Movie].[MovieID] = [Wikimdb].[dbo].[AddList].[MovieID]
                        inner join [Wikimdb].[dbo].[Director] on [Wikimdb].[dbo].[Director].[MovieID] = [Wikimdb].[dbo].[Movie].[MovieID]
                        WHERE [Wikimdb].[dbo].[AddList].[ListID] = @ListID
                        ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ListID", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
            
        }

        [HttpPost("AddFilmToList")]
        public JsonResult Post(AddListClass licla)
        {
            try
            {
                string query = @"
                insert into dbo.AddList
                values (CONVERT(INT, @ListID),@MovieID)
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@ListID", licla.ListID);
                        myCommand.Parameters.AddWithValue("@MovieID", licla.MovieID);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Added Successfully");
            }
            catch (System.Data.SqlClient.SqlException)
            {
                string Message = "This MovieID is invalid !";
                return new JsonResult(Message);
            }
        }
        [HttpDelete("DeleteFilmFromList")]
        public JsonResult Delete(AddListClass licla)
        {
            try
            {
                string query = @"
                            delete from dbo.AddList where MovieID = @MovieID and ListID = CONVERT(INT, @ListID)
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@ListID", licla.ListID);

                        myCommand.Parameters.AddWithValue("@MovieID", licla.MovieID);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return new JsonResult("Deleting is done");
            }
            catch (System.Data.SqlClient.SqlException)
            {
                string Message = "Invalid MovieID or this list don't have that film!";
                return new JsonResult(Message);
            }

        }
    }
}
