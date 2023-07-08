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
    public class ForumController : ControllerBase
    {

        private readonly IConfiguration _configuration;
        public ForumController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        //Get method to Select for filmBox
        public JsonResult Get()
        {
            string query = @"
                            SELECT [Wikimdb].[dbo].[Movie].[MovieID], [Wikimdb].[dbo].[Movie].[Title],
                            [Wikimdb].[dbo].[Comment].[Username], [Wikimdb].[dbo].[Comment].[Comment], convert(varchar(10),[Wikimdb].[dbo].[Comment].[CommentDate],120)
                            from [Wikimdb].[dbo].[Comment] inner join [Wikimdb].[dbo].[Movie]
                            on [Wikimdb].[dbo].[Movie].[MovieID] = [Wikimdb].[dbo].[Comment].[MovieID]
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
        public JsonResult Post(ForumClass foru)
        {
            try
            {
                string query = @"
                           insert into [Wikimdb].[dbo].[Comment] values
                            (@Username,@Comment,@MovieID,GETDATE())
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WikimdbCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Username", foru.Username);
                        myCommand.Parameters.AddWithValue("@Comment", foru.Comment);
                        myCommand.Parameters.AddWithValue("@MovieID", foru.MovieID);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                return new JsonResult("Add comment successfully");
            }
            catch (System.Data.SqlClient.SqlException)
            {
                string Message = "This MovieID is invalid !";
                return new JsonResult(Message);
            }
        }
    }
}
