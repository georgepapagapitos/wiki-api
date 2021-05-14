import { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import api from '../api';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`

export default function ArticlesList() {

  const [articles, setArticles] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    await api.getAllArticles().then(articles => {
      console.log(articles);
    });
  }, []);

  return (
    <div>
      <p>Movie List Page</p>
    </div>
  )
}
