import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//import "./styleBox.css";
import "../Home/css/font-awesome.min.css";
import "../Home/css/tooplate-gymso-style.css";
//import "../Home/css/bootstrap.css";

function FilmBox(props) {
  const {
    MovieID,
    Title,
    FilmURL,
    IMDBRating,
    Runtime,
    ReleasedYear,
    PosterLink,
    Director,
    GenreTotal,
  } = props;
  return (
    <React.Fragment>
      {/* Các phim được list ra (hiện tại có 8 thẻ phim) */}
      <div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
        <div class="class-thumb">
          <picture>
            <source srcSet={PosterLink} />
            <source srcSet="https://m.media-amazon.com/images/I/71Fzm85rLfL._AC_SY741_.jpg" />
            <img
              // Poster film, sau thay link poster của từng phim là được
              src={PosterLink}
              alt="No poster"
              className="img-fluid"
              id="poster"
              style={{ height: 400 }}
            />
          </picture>

          {/* Thẻ thông tin phim */}
          <div class="class-info" style={{ height: 400 }}>
            {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
            <button className="btn btn-lg active btn-danger mt-3 mb-3">
              <a href={FilmURL}>{Title}</a>
            </button>
            <br />
            {/*  Tác giả */}
            <span>
              <strong>Directed by</strong> - {Director}
            </span>
            <br />
            {/* Imdb Rate */}
            <span>
              <strong>Imdb Rate:</strong> {IMDBRating}
            </span>
            <br />
            <span>
              <strong>Genre:</strong> {GenreTotal}
            </span>
            <br />
            <span>
              <strong>Runtime:</strong> {Runtime}
            </span>
            <br />
            <span>
              <strong>Release Year:</strong> {ReleasedYear}
            </span>
            <br/>
            <span>
              <strong> Movie ID: </strong>  {MovieID}
            </span>
            <br />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FilmBox;
