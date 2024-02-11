import { FC, useEffect } from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import IndentBox from '../../components/indent-box';
import SearchField from '../../components/search-field';
import PostList from '../../components/post-list';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { fetchPosts } from '../../store/posts/actions';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { posts } = useTypedSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <PageLayout>
      <IndentBox marginBottom="large">
        <Head
          title="Блог"
          description="Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи"
        />
      </IndentBox>
      <IndentBox marginBottom="large">
        <SearchField placeholder="Поиск по названию статьи" value="" />
      </IndentBox>
      <PostList rating={{ like: 2, dislike: 3 }} postList={posts} />
    </PageLayout>
  );
};

export default Main;
