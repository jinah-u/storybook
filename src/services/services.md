# services 구조

## requester(요청자), sitter(돌보미), common(공통)으로 분리한다.

## 각 도메인 폴더는 API, type, store 파일과 query/mutation hook을 포함한 hooks 폴더를 가진다.

```
/services
  /requester
  /sitter
  /common
    /qna
      ├── index.ts                # Qna API 정의
      ├── types.ts                # Qna 관련 타입
      ├── store.ts                # Qna 관련 store
      /stores                     # store 파일 2개 이상일 경우 폴더로 분리
        ├── useQnaStore.ts
        ├── useQnaMetaStore.ts
        ├── index.ts              # 한번에 export
      /hooks
        ├── useQnaQuery.ts        # Qna query hook
        ├── useQnaMutation.ts     # Qna mutation hook
        ├── index.ts              # 한번에 export
```
