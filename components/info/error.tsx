"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    window.alert("에러가 발생했습니다. 이전 페이지로 돌아갑니다.");
    router.back();
  }, []);
  return <div></div>;
};

export default ErrorPage;
