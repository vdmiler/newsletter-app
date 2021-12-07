import React, { useEffect } from 'react';
import { Route } from 'react-router';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewsList from './components/NewsList/NewsList';
import NewsDetail from './components/NewsDetail/NewsDetail';
import { fetchNewsList } from './store/slices/newsListSlice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsList());
  }, [])
  const { newsList, loadingList, errorList } = useSelector(state => state.newsList);
  return (
    <div className="App">
      <Header />
      <Route
        path="/"
        exact
        render={() => <NewsList news={newsList} newsCount={6} title="Всегда свежие новости" loader={loadingList} error={errorList} />}
      />
      <Route
        path="/news"
        exact
        render={() => <NewsList news={newsList} title="Быть в курсе событий" loader={loadingList} error={errorList} />}
      />
      <Route
        path="/contacts"
        exact
        component={Contacts}
      />
      <Route
        path="/news/:id"
        exact
        component={NewsDetail}
      />
      <Footer />
    </div>
  );
}

export default App;
