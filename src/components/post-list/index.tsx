import { FC, memo } from 'react';
import styles from './PostList.module.scss';
import PostItem from '../post-item';
import postImg from '../../assets/img/1.png';
import todoImg from '../../assets/img/todo.jpeg';
import { RatingProps } from '../rating';
import { PostInitalState } from '../../store/posts/interface';

interface PostListProps extends RatingProps {
  postList: PostInitalState[];
}

const PostList: FC<PostListProps> = ({ rating, postList }) => {
  return (
    <div className={styles.PostList}>
      {postList.length > 0 && (
        <PostItem
          isFirst
          postImg={postImg}
          title={postList[0].title}
          description={postList[0].body}
          rating={rating}
        />
      )}
      <div className={styles.smallPost__wrapper}>
        {postList.slice(1).map((item) => (
          <PostItem postImg={todoImg} title={item.title} rating={rating} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default memo(PostList);
