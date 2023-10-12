import React, { useState } from 'react';
import { useLogin } from '../hook/useLogin';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from '../apis/api';
import CardElement from '../components/Card';
import InfiniteScroll from 'react-infinite-scroller';
import { useRecoilValue, useRecoilState } from 'recoil';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { cartAtom } from '../atoms/cart';

function PageScroll() {
  const [mbtiScore, setMbtiScore] = useRecoilState(cartAtom);

  const { isLogin, loginInfo } = useLogin();

  const { data, fetchNextPage, hasNextPage, isError, isLoading } =
    useInfiniteQuery(
      ['movieList'],
      ({ pageParam = 1 }) => {
        return getMovies(pageParam);
      },
      {
        enabled: !!isLogin,
        suspense: true,
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPosts) => {
          return lastPage.page != allPosts[0].total_pages
            ? lastPage.page + 1
            : undefined;
        }
      }
    );

  //if (isLoading && isLogin) return <CircularProgress />;
  if (isError && isLogin) return <h3>잘못된 데이터 입니다.</h3>;

  return (
    <>
      {!isLogin ? (
        '로그인 한 후 이용해주십시오.'
      ) : (
        <>
          {/*<InfiniteScroll*/}
          {/*  hasMore={hasNextPage}*/}
          {/*  loadMore={() => fetchNextPage()}*/}
          {/*  useWindow={false}*/}
          {/*>*/}
          {/*  <div>{loginInfo?.id}님 환영합니다</div>*/}

          {/*  {data?.pages.map((p) => {*/}
          {/*    return p.results.map((r: IResultType) => {*/}
          {/*      return (*/}
          {/*        <CardElement*/}
          {/*          key={r.id}*/}
          {/*          id={r.id}*/}
          {/*          title={r.original_title}*/}
          {/*          overview={r.overview}*/}
          {/*          release_date={r.release_date}*/}
          {/*          src={r.poster_path}*/}
          {/*          vote_average={r.vote_average}*/}
          {/*        />*/}
          {/*      );*/}
          {/*    });*/}
          {/*  })}*/}
          {/*</InfiniteScroll>*/}

          <div>
            <div>
              <h2>{loginInfo?.id}님의 장바구니입니다</h2>
              <List sx={{ border: '1px solid black', width: 300 }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Inbox' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='Drafts' />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PageScroll;
