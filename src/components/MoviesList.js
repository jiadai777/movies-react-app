import React from 'react';
import ReactDOM from 'react-dom';
import {inTheatre} from '../in_theatre';

export default class MoviesList extends React.Component {

	state = {
		movies: inTheatre
	}

	changeMovie = (i) => {
		var movies = this.state.movies;

		var movie = (
			<React.Fragment>
			<div className="col-6">
				<div id="video-modal">
					<iframe width="500" height="320" src={"https://www.youtube.com/embed/" + movies[i].trailer} frameBorder="0" allowFullScreen></iframe>
				</div>
			</div>
			<div className="col-6">
				<h2>{movies[i].title}</h2>
				<p>
				{"Year: " + movies[i].year}
				</p>
				<h3>Story line:</h3>
				<p>
				{movies[i].storyline}
				</p>
			</div>
			</React.Fragment>
		);

		ReactDOM.render(movie, document.getElementById('movie-info'));
	}

	render() {
		var movies = this.state.movies;

		var slides1 = [];
		var slides2 = [];

		for(var i = 0; i < 12; i++) {
			slides1.push(<li key={i} onClick={this.changeMovie.bind(this, i)}><img src={"img/" + movies[i].poster} className="img-fluid" /></li>);
		}
		for(var i = 12; i < 24; i++) {
			slides2.push(<li key={i} onClick={this.changeMovie.bind(this, i)}><img src={"img/" + movies[i].poster} className="img-fluid" /></li>);
		}

		console.log(movies);

		return (
			<React.Fragment>
			<div className="container">
				<div className="row" id="movie-info">
					<div className="col-6">
						<div id="video-modal">
							<iframe width="500" height="320" src={"https://www.youtube.com/embed/" + movies[0].trailer} frameBorder="0" allowFullScreen></iframe>
						</div>
					</div>
					<div className="col-6">
						<h2>{movies[0].title}</h2>
						<p>
						{"Year: " + movies[0].year}
						</p>
						<h3>Story line:</h3>
						<p>
						{movies[0].storyline}
						</p>
					</div>
				</div>
			</div>

			<div className="container-fluid">
				<h2 className="py-3">Featured Movies 1</h2>
				<ul id="light-slider1">
					{slides1}
				</ul>
				<h2 className="py-3">Featured Movies 2</h2>
				<ul id="light-slider2">
					{slides2}
				</ul>
			</div>

			</React.Fragment>
		);
	}
}
