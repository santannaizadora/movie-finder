import { Button, Card, CardHeader, Text, RatingIndicator, FlexBox } from "@ui5/webcomponents-react";
import "./style.scss";

export default function MovieCard(props) {
  const { movie } = props;
  const { Title, Actors, Plot, Poster, imdbRating } = movie;
  return (
    <Card
      className="card-style"
      header={<CardHeader titleText={Title} className="movie-title" />}
    >
      <FlexBox className="card-content">
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
      </FlexBox>
    </Card>
  );
}
