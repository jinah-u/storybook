# pages 구조

## 각 페이지에서만 사용하는 components, hooks가 있을 경우 해당 페이지 내부에 폴더 생성한다.

```
/pages
    /qna
      ├── index.tsx               # Qna 페이지 정의
      /components                 # Qna 페이지 전용 component
        ├── QnaButton.tsx
        ├── QnaItem.tsx
        ├── index.ts              # 한번에 export
      /hooks                      # Qna 페이지 전용 hooks
        ├── useQnaFilter.ts
        ├── index.ts              # 한번에 export
```
