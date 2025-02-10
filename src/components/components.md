# components 구조

## 공통 component만 작성한다

## 각 component 별로 폴더를 생성하고, 해당 폴더 안에 stories 파일을 작성한다

```
/components                     # 공통 components
  /Buttons                      # components 분류
    /BasicBtn
      ├── BasicBtn.stories.tsx   # BasicBtn storybook 정의
      ├── index.tsx              # BasicBtn 정의
    /EventuIconBtn
      ├── EventuIconBtn.stories.tsx  # EventuIconBtn storybook 정의
      ├── index.tsx                  # EventuIconBtn 정의
    ├── index.ts                    # 한번에 export
```
