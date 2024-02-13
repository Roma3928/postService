import { FC, useCallback, useEffect } from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import IndentBox from '../../components/indent-box';
import SearchField from '../../components/search-field';
import PostList from '../../components/post-list';
import { useAppDispatch, useTypedSelector } from '../../store/store';
import { fetchPosts, findPost } from '../../store/posts/actions';
import Loader from '../../components/ui/loader';
import { setQuery } from '../../store/posts/slice';

const Main: FC = () => {
  const dispatch = useAppDispatch();
  const { posts, query, isLoading } = useTypedSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const callbacks = {
    searchPost: useCallback(
      (title: string) => {
        dispatch(findPost(title));
      },
      [dispatch],
    ),
    setQueryParams: useCallback(
      (value: string) => {
        dispatch(setQuery(value));
      },
      [dispatch],
    ),
  };

  return (
    <PageLayout>
      <IndentBox marginBottom="large">
        <Head
          title="Блог"
          description="Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи"
        />
      </IndentBox>
      <IndentBox marginBottom="large">
        <SearchField
          placeholder="Поиск по названию статьи"
          value={query}
          searchPost={callbacks.searchPost}
          setQuery={callbacks.setQueryParams}
        />
      </IndentBox>
      {isLoading && <Loader />}
      <PostList rating={{ like: 2, dislike: 3 }} postList={posts} />
    </PageLayout>
  );
};

export default Main;
