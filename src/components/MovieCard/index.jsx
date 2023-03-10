import {
  Button,
  Card,
  CardHeader,
  Text,
  RatingIndicator,
} from "@ui5/webcomponents-react";
import "./style.scss";

export default function MovieCard() {
  return (
    <Card
      className="card-style"
      header={<CardHeader titleText="Movie Title" className="movie-title" />}
    >
      <div className="card-content">
        <div className="movie-info">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Text>
            <b>Actors:</b> abc, def, ghi, jkl
          </Text>

          <div className="rating">
            <Text>
              <b>Review: </b>
            </Text>
            <RatingIndicator value={4} readonly />
          </div>

          <Button icon="heart-2" iconEnd className="favorite-button">
            Button Text
          </Button>
        </div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMTc5YjQ0MGQtOTdjZS00OGZhLTk1ZGItMThjOGFiZmMxYWRjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
          alt="poster"
        />
      </div>
    </Card>
  );
}
