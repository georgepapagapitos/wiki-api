import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``

const List = styled.div.attrs({
  className: 'navbar-nav mr-auto'
})``

const Item = styled.div.attrs({
  className: 'collapse navbar-collapse'
})``

export default function Links() {
  return (
    <>
      <Link to="/" className="'navbar-brand">
        Wiki API
      </Link>
      <Collapse>
        <List>
          <Item>
            <Link to="/articles/list" className="nav-link">
              Articles
            </Link>
          </Item>
          <Item>
            <Link to="/articles/create" className="nav-link">
              Write an Article
            </Link>
          </Item>
        </List>
      </Collapse>
    </>
  )
}