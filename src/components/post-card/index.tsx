import { FC } from 'react';
import styles from './PostCard.module.scss';

interface PostCardProps {
  title: string;
  body: string;
  postImg: string;
}

const PostCard: FC<PostCardProps> = ({ title, body, postImg }) => {
  return (
    <section className={styles.PostCard}>
      <h1 className={styles.title}>{title}</h1>
      <img src={postImg} />
      <p className={styles.description}>{body}</p>
    </section>
  );
};

export default PostCard;
