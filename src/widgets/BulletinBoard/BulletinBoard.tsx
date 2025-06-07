import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { getAllPosts } from "@shared/Apis/board";
import { useNavigate } from "react-router-dom";
import pencil from "@shared/assets/icon/pencil.png"

// 타입 정의
interface Post {
    id: string;
    role: string;
    title: string;
    date?: string;
    author?: string;
}


const BulletinBoard: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [allPage, setAllPage] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async() => {
          const result = await getAllPosts(page)
          if(result.data.success){
            setPosts(result.data.content)
            setAllPage(result.data.totalPages)
          }else{
            alert("페이지 가져오는데 실패했습니다: "+result.data.error.message);
          }
        }

        fetchPosts();
    }, [page]);

  const onClickRow = (postId: string) => {
    navigate(`/boardDetail/${postId}`)
  }

  const onClickWrite = () => {
    navigate("/write")
  }

  return (
    <Container>
      <Title>게시판</Title>
      <EditIcon onClick={onClickWrite}>
        <img src={pencil} alt="edit" />
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
            <Tr key={post.id} onClick={() => onClickRow(post.id)} highlighted={post.author !== undefined}>
              <Td>{post.role}</Td>
              <Td>{post.title}</Td>
              <Td>{post.date || ''}</Td>
              <Td>{post.author || ''}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <PaginationWrapper>
        <ReactPaginate
          pageCount={allPage}
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
    background-color: ${({ highlighted }) =>
        highlighted ? "#fef3c7" : "white"};
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;

    &:hover {
        background-color: #fef08a; /* hover 효과 추가 (선택사항) */
    }
`;

const Td = styled.td`
    padding: 12px;
`;

const EditIcon = styled.div`
    float: right;
    width: 36px;
    height: 36px;
    background-color: #ffbcb9;
    margin-bottom: 20px;
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

                &:hover {
                    background-color: #f59e0b;
                }
            }
            &.selected a {
                background-color: #f59e0b;
            }
        }
    }
`;

export default BulletinBoard;
