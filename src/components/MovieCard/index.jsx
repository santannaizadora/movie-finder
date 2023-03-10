import { Button, Card, CardHeader, Text, RatingIndicator } from "@ui5/webcomponents-react";
import "./style.scss";
import "@ui5/webcomponents-icons/dist/AllIcons.js";

export default function MovieCard(props) {
  const { movie } = props;
  const { Title, Actors, Plot, Poster, imdbRating } = movie;
  return (
    <Card
      className="card-style"
      header={<CardHeader titleText={Title} className="movie-title" />}
    >
      <div className="card-content">
        <div className="movie-info">
          <Text>{Plot}</Text>
          <Text>
            <b>Actors:</b> {Actors}
          </Text>

          <div className="rating">
            <Text>
              <b>Review:</b>
            </Text>
            <RatingIndicator value={Number(imdbRating) / 2} readonly />
          </div>

          <Button icon="heart-2" iconEnd className="favorite-button">
            Favorite
          </Button>
        </div>
        <img src={Poster} alt="Movie Poster" />
      </div>
    </Card>
  );
}
