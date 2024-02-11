import { FC } from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import IndentBox from '../../components/indent-box';
import SearchField from '../../components/search-field';
import PostList from '../../components/post-list';

const Main: FC = () => {
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
      <PostList />
    </PageLayout>
  );
};

export default Main;
