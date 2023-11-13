import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter(); // router 객체 만들기
  const { q } = router.query; // router.query 객체에서 q 라는 이름으로 가져오겠다.

  return (
    <div>
      <h1>Search 페이지</h1>
      <SearchForm initialValue={q} />
      <h2>{q} 검색 결과</h2>
    </div>
  );
}
