# nodejs_express



# 사용 tool

## turbo
- npx create-turbo@latest
  - 최신 버전으로 turborepo 기본 구조를 만들어줌s
- monorepo 빌드 툴
- 각 프로젝트 병렬 실행 가능
- 캐싱. 
- 작업간 의존성 관리. 
- dist/, dev/ 결과물들이 캐싱 됌\
- 공통으로 참조하는 shared/가 존재할 경우 참조하는 부분만 build 됌 


# vite
- bundling
  - 난독화 지원 (내부적으로 esbuild 사용) 
- hot reload
- build 최적화 
  - 변경된 파일만 transfile해준다. (cf: webpack은 하나가 변경되더라도 모든 파일을 다시 빌드)

- vite는 index.html 기준으로 루트경로 잡는다 
- .html은 난독화 x, .ts, .js 난독화 o