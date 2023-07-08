import "./App.css";
import Footers from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./css/font-awesome.min.css";
// import "./css/tooplate-gymso-style.css";
import "./css/bootstrap.css";

function Home() {
  return (
    <div>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center mt-4"
        id="home"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mb-3 mt-6 text-center">
                <h6 className="text-black">
                  Start your dream through exicting films!
                </h6>

                <h1 className="text-black">
                  Discover your imagination with MovREACT
                </h1>

                <a
                  href="films"
                  className="btn custom-btn btn-dark text-black m-3"
                >
                  Get started
                </a>

                <a
                  href="#about"
                  className="btn custom-btn btn-danger bordered m-3"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-black">New to MovREACT?</h2>

              <h6 className="mb-4 text-black">
                Your membership is up to 2 months FREE ($62.50 per month)
              </h6>

              <p>Do not hesitate because the promotion will not last long.</p>

              <a
                href="user"
                className="btn custom-btn btn-danger bordered bg-color mt-3"
              >
                Sign up now
              </a>
            </div>

            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2 className="mb-4 text-black">Hotline </h2>

                  <strong className="d-block text-dark">Sunday : Closed</strong>

                  <strong className="mt-3 d-block text-dark">
                    Monday - Friday
                  </strong>

                  <p>7:00 AM - 10:00 PM</p>

                  <strong className="mt-3 d-block text-dark">Saturday</strong>

                  <p>6:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="mt-lg-4 mb-lg-4 mb-4 12 col-md-12 mx-auto col-12">
              <h2 className="mb-4">Hello, we are MovREACT</h2>

              <p>
                With an aim of providing a website where you can easily keep
                track of any newest films all around the world.
              </p>

              <p>
                If you have any question regarding of the website or our source
                code, please feel free to contact us through the link on your
                right. Thank you.
              </p>
            </div>

            <div className="mr-lg-auto mt-5 col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
              <img
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/322161418_1524796088027873_5798399063040496831_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=NUd7t2M3DioAX95XQz5&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAqO6cxmAUI2tGYNgUYIs-bGDzvXcXhkpgn5vk3mQG1Aw&oe=64AD5125"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Minh Bao</h3>
                  <span>Front-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="https://www.facebook.com/MinhBao.1708" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kmb.1708/" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mr-lg-auto mt-5 col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
              <img
                  src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/182086838_865016151088417_4651466497571276428_n.jpg?_nc_cat=102&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hWH1g2pub5YAX9PLydq&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDkr3UjxIjDAJMDuHTFwilX4ayTBw6RUDJN0elAZ5rzIQ&oe=64AD57B1"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Trung Duc</h3>
                  <span>Front-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="https://www.facebook.com/100027401203564/" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kmb.1708/" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mr-lg-auto mt-5 col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
              <img
                  src="https://scontent.fhan2-3.fna.fbcdn.net/v/t31.18172-1/11782156_480450482110728_7585510817783515539_o.jpg?stp=dst-jpg_p320x320&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Te31NaHMQKAAX-nFGw2&_nc_oc=AQkSLcKN_v8H8pNL-qEnQEqDtCIGLql5Lobvre68KTEnKpREUuzvQz7K1Mv_V8gh1eY&_nc_ht=scontent.fhan2-3.fna&oh=00_AfChBa2Xc5NlD1FCUNfrRrk8TtdVDWZzcgbc9Oe9Z0JEBg&oe=64D0A467"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Tung Duong</h3>
                  <span>Front-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="https://www.facebook.com/duowng.ng/" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kmb.1708/" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mr-lg-auto mt-5 col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
              <img
                  src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/349928875_1099106501045671_1637119059613411744_n.jpg?stp=c207.452.529.529a_dst-jpg_s320x320&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_ohc=fOyvj8cWnhsAX9Du2lv&_nc_ht=scontent.fhan2-5.fna&oh=00_AfB5zpmR0xn0-8tqkQkFTM6llutTmEe_DZ72ZhOeC5mQEg&oe=64AF04C5"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Van Gioi</h3>
                  <span>Back-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="https://www.facebook.com/gioi.duong.21" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kmb.1708/" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="class section" id="class">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center mb-5">
              <h6>We recommend</h6>

              <h2>Our mostly viewed films</h2>
            </div>

            <div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://m.media-amazon.com/images/M/MV5BMTUwNjcxNzAwOF5BMl5BanBnXkFtZTgwNzEzMzIzNDE@._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                  width="255"
                  height="404"
                />

                <div class="class-info" style={{ height: 350 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt2293640/">Minions</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Pierre Coffin, Kyle Balda
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 6.4
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Animation, Adventure, Comedy, Crime, Family, Sci-Fi
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 91
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 2015
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt2293640
                  </span>
                  <br />
                </div>
              </div>
            </div>

            <div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://m.media-amazon.com/images/M/MV5BNDM3YWEwYTMtNmY3ZS00YzJiLWFlNWItOWFmNjY0YzA4ZDE3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                  width="255"
                  height="404"
                />

                <div class="class-info" style={{ height: 375 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt5113044/">Minions: The Rise of Gru</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Brad Ableson, Kyle Balda, Jonathan del Val
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 6.9
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Animation, Adventure, Comedy, Crime, Family, Sci-Fi
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 87
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 2022
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt5113044
                  </span>
                  <br />
                </div>
              </div>
            </div><div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                  width="255"
                  height="377"
                />

                <div class="class-info" style={{ height: 375 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt1323594/">Despicable Me</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Chris Renaud, Pierre Coffin
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 7.6
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Animation, Adventure, Comedy, Crime, Family, Sci-Fi
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 95
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 2010
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt1323594
                  </span>
                  <br />
                </div>
              </div>
            </div><div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://m.media-amazon.com/images/M/MV5BMTQxNzY1MjI5NF5BMl5BanBnXkFtZTcwNTI0MDY1OQ@@._V1_FMjpg_UX1000_.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                  width="255"
                  height="377"
                />

                <div class="class-info" style={{ height: 350 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt1690953/">Despicable Me 2</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Chris Renaud, Pierre Coffin
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 7.3
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Animation, Adventure, Comedy, Crime, Family, Sci-Fi
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 98
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 2013
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt1690953
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </div>
  );
}

export default Home;
