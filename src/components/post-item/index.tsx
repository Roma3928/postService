import { FC, memo } from 'react';
import styles from './PostItem.module.scss';
import Rating, { RatingProps } from '../rating';

interface PostItemProps extends RatingProps {
  isFirst?: boolean;
  postImg: string;
  title: string;
  description?: string;
}

const PostItem: FC<PostItemProps> = ({ isFirst, postImg, title, description, rating }) => {
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
        <div className={styles.btns__box}>
          {!isFirst && <Rating rating={rating} />}
          <button className={styles.button}>Читать далее</button>
        </div>
      </div>
    </div>
  );
};

export default memo(PostItem);
