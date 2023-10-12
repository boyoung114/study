import React, { useState } from 'react';
import { useLogin } from '../hook/useLogin';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from '../apis/api';
import CardElement from '../components/Card';
import InfiniteScroll from 'react-infinite-scroller';
import { IResultType } from '../types/type';
import { CircularProgress } from '@mui/material';

function PageScroll() {
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
        <InfiniteScroll
          hasMore={hasNextPage}
          loadMore={() => fetchNextPage()}
          useWindow={false}
        >
          <div>{loginInfo?.id}님 환영합니다</div>

          {data?.pages.map((p) => {
            return p.results.map((r: IResultType) => {
              return (
                <CardElement
                  key={r.id}
                  id={r.id}
                  title={r.original_title}
                  overview={r.overview}
                  release_date={r.release_date}
                  src={r.poster_path}
                  vote_average={r.vote_average}
                />
              );
            });
          })}
        </InfiniteScroll>
      )}
    </>
  );
}

export default PageScroll;
