import {
  Button,
  Card,
  CardHeader,
  Text,
  RatingIndicator,
  FlexBox,
} from "@ui5/webcomponents-react";
import "./style.scss";
import { useState } from "react";

export default function MovieCard(props) {
  const { movie } = props;
  const { Title, Actors, Plot, Poster, imdbRating } = movie;

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="card-style" header={<CardHeader titleText={Title} />}>
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

          <Button
            icon={isFavorite ? "heart" : "heart-2"}
            design="Positive"
            iconEnd
            className="favorite-button"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            Favorite
          </Button>
        </div>
        <img src={Poster} alt="Movie Poster" />
      </FlexBox>
    </Card>
  );
}
