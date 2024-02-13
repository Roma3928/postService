import Article from '../app/article';
import Main from '../app/main';
import MainLayout from '../components/main-layout';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/post/:id',
        element: <Article />,
      },
      {
        path: '*',
        element: <h1>Нет страницы</h1>,
      },
    ],
  },
];
