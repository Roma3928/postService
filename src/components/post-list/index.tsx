import { FC, memo } from 'react';
import styles from './PostList.module.scss';
import PostItem from '../post-item';
import postImg from '../../assets/img/1.png';
import todoImg from '../../assets/img/todo.jpeg';
import { RatingProps } from '../rating';

interface PostListProps extends RatingProps {}

const PostList: FC<PostListProps> = ({ rating }) => {
  return (
    <div className={styles.PostList}>
      <PostItem
        isFirst
        postImg={postImg}
        title="Что нужно знать об эффективной интернет-рекламе?"
        description="Интернет - огромный ресурс, позволяющий продвигать свои услуги практически на любую
        аудиторию. Ежедневно в сеть выходит более 5 миллиардов людей - каждый из них может
        увидеть вашу рекламу и стать вашим потенциальным клиентом. Рассказываем, как правильно
        настраивать рекламу в интернете."
        rating={rating}
      />
      <div className={styles.smallPost__wrapper}>
        <PostItem postImg={todoImg} title="Проектируем TODO-сервис с нуля" rating={rating} />
        <PostItem
          postImg={todoImg}
          title="Расчитываем сроки реализации проекта. WBS и прочие премудрости"
          rating={rating}
        />
        <PostItem
          postImg={todoImg}
          title="PDP - что это, и как он может помочь в развитии команды"
          rating={rating}
        />
        <PostItem
          postImg={todoImg}
          title="Строим процессы между командами, или как Лебедь, Рак 
и Щука повозку тянули"
          rating={rating}
        />
      </div>
    </div>
  );
};

export default memo(PostList);
