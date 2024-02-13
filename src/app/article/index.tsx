import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { fetchPostItem } from '../../store/postItem/actions';
import PostCard from '../../components/post-card';
import PageLayout from '../../components/page-layout';
import postImg from '../../assets/img/1.png';

const Article: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { post } = useTypedSelector((state) => state.postItem);

  useEffect(() => {
    dispatch(fetchPostItem(Number(id)));
  }, []);

  return (
    <PageLayout>
      <PostCard title={post.title} body={post.body} postImg={postImg} />
    </PageLayout>
  );
};

export default Article;
