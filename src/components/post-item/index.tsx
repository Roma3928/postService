import { FC, memo } from 'react';
import styles from './PostItem.module.scss';
import Rating, { RatingProps } from '../rating';
import Button from '../ui/button/button';
import { Link } from 'react-router-dom';

interface PostItemProps extends RatingProps {
  isFirst?: boolean;
  id: number | null;
  postImg: string;
  title: string;
  description?: string;
}

const PostItem: FC<PostItemProps> = ({ isFirst, id, postImg, title, description, rating }) => {
  return (
    <div className={`${styles.PostItem} ${isFirst && styles['PostItem--first']}`}>
      <img
        className={`${styles.PostItem__img} ${isFirst && styles['PostItem__img--first']}`}
        src={postImg}
      />
      <div className={styles.PostItem__footer}>
        <div className={styles.title}>
          <h2>{title}</h2>
          {isFirst && <Rating rating={rating} />}
        </div>
        {isFirst && <p className={styles.description}>{description}</p>}
        <div className={`${styles.btns__box} ${isFirst && styles['btns__box--first']}`}>
          {!isFirst && <Rating rating={rating} />}
          <Link to={`/post/${id}`}>
            <Button>Читать далее</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(PostItem);
