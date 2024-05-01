import Link from "next/link";

const Header = () => {
  return (
    <header className="my-2 h-[50px] w-full bg-white">
      <div className="flex h-full items-center justify-between">
        <div className="flex h-full items-center">
          <Link href="/">
            <div className="my-2 ml-3 flex w-fit cursor-pointer justify-center px-9 text-[3rem]">
              <img src="../img/maple-header.png" className="h-[44px] w-[44px] self-center" alt="메이플" />
              <div className="flex items-center">
                <div className="font-bold">MapleStory</div>
              </div>
            </div>
          </Link>
          <div className="ml-16 flex h-full items-center gap-[45px] text-[15px] tablet:ml-0 tablet:gap-[20px]">
            <Link href="/update">API KEY 생성 방법</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
