import {GenresListProps} from '../components/genres-list/genres-list';
import {Genre} from "../types/genre";

const genres: GenresListProps =
  {
    genres: [Genre.All, Genre.Comedy, Genre.Crime, Genre.Documentary, Genre.Drama, Genre.Horror, Genre.KidsFamily, Genre.Romance,Genre.SciFi,Genre.Thriller],
    currentActive: Genre.All
  };

export {genres};
