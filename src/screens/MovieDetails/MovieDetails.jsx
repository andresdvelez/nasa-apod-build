import "./MovieDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { checkImage } from "../../utils/validatorIfEmpty";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=77e65c0891516ee117c6954c49c2997e`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="app">
          <div className="left-container">
            <img src={checkImage(movie.poster_path)} alt={movie.title} />
          </div>
          <div className="right-container">
            <div className="movie-title">
              <h2>{movie.title}</h2>
            </div>
            <div className="about">
              <h4>What's the movie about?</h4>
              <div className="info">
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="info-table">
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Released</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{movie.release_date}</TableCell>
                      <TableCell>{movie.status}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <div className="back">
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
