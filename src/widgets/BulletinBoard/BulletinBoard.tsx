import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

// 타입 정의
interface Post {
  number: number;
  category: string;
  title: string;
  date?: string;
  author?: string;
}



// 서버 데이터 불러오기 함수
const fetchPosts = async (page: number): Promise<Post[]> => {
  // 예: return await axios.get(`/api/posts?page=${page}`)
  return [];
};

const BulletinBoard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPosts(page).then(data => setPosts(data));
  }, [page]);

  return (
    <Container>
      <Title>게시판</Title>
      <EditIcon>
        <img src="/edit-icon.svg" alt="edit" />
      </EditIcon>
      <Table>
        <Thead>
          <tr>
            <Th>번호</Th>
            <Th>구분</Th>
            <Th>제목</Th>
            <Th>날짜</Th>
            <Th>작성자</Th>
          </tr>
        </Thead>
        <tbody>
          {posts.map(post => (
            <Tr key={post.number} highlighted={post.author !== undefined}>
              <Td>{post.number}</Td>
              <Td>{post.category}</Td>
              <Td>{post.title}</Td>
              <Td>{post.date || ''}</Td>
              <Td>{post.author || ''}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <ReactPaginate
          pageCount={68}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={({ selected }) => setPage(selected)}
          containerClassName={'pagination'}
          activeClassName={'selected'}
        />
      </PaginationWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #fbbf24;
`;

const Th = styled.th`
  padding: 12px;
  text-align: left;
`;

const Tr = styled.tr<{ highlighted?: boolean }>`
  background-color: ${({ highlighted }) => (highlighted ? '#fef3c7' : 'white')};
  border-bottom: 1px solid #e5e5e5;
`;

const Td = styled.td`
  padding: 12px;
`;

const EditIcon = styled.div`
  float: right;
  width: 36px;
  height: 36px;
  background-color: #fbbf24;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
`;

// 페이지네이션 스타일
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin: 0 4px;
      a {
        padding: 6px 10px;
        background-color: #fbbf24;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        text-decoration: none;
      }
      &.selected a {
        background-color: #f59e0b;
      }
    }
  }
`;

export default BulletinBoard;
