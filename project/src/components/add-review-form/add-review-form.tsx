import {useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {postReview} from '../../api/api-actions';


export function AddReviewForm({filmId}: {filmId: number}): JSX.Element {
  const [formData, setFormData] = useState({
    ratingStars: -1,
    reviewText: '',
  });
  const dispatch = useAppDispatch();
  const generateKey = (pre: string) => `${ pre }_${ new Date().getTime() }`;

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({filmId: filmId, comment: formData.reviewText, rating: formData.ratingStars}));
  };
  return (
    <form className="add-review__form" onSubmit={onSubmit}>
      <div className="rating">
        <div className="rating__stars">

          {[...Array(10)].map((_, index) => (
            <div key={generateKey('star')}>
              <input className="rating__input" id={`star-${10 - index}`} type="radio" name="rating" value={10 - index}
                checked={formData.ratingStars === (10 - index)} onChange={() => {setFormData(
                  {...formData, ratingStars : (10 - index)});}}
              />
              <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          minLength={50}
          maxLength={400}
          onChange={(evt) =>
          {
            setFormData({...formData, reviewText : evt.target.value});}}
        />
        <div className="add-review__submit">
          {
            formData.ratingStars !== -1 && formData.reviewText.length >= 50 ?
              <button className="add-review__btn" type="submit">Post</button> :
              <button className="add-review__btn" type="submit" disabled>Post</button>
          }
        </div>

      </div>
    </form>);
}
