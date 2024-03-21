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
            <a href="/input" className="relative flex h-full items-center hover:text-primary-green">
              #1
            </a>
            <div className="flex h-full gap-[45px] tablet:gap-[30px]">
              <div className="group relative flex h-full cursor-pointer items-center">
                <div className="relative flex h-full items-center justify-center">
                  <div className="">#2</div>
                  <div className="absolute top-[53px] z-50 flex w-[100px] origin-top scale-y-0 items-center justify-center bg-white shadow-sm transition duration-300 ease-in-out group-hover:scale-y-100">
                    <div className="flex gap-[16px] py-5 text-[13px] tablet:gap-[10px] tablet:text-[11px]">
                      <div className="flex flex-col text-center">
                        <a className="py-3 hover:text-primary-green" href="/result">
                          #2-1
                        </a>
                        <a className="py-3 hover:text-primary-green" href="/info?name=GOMAO&date=2024-02-21&preset=0000">
                          #2-2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group relative flex h-full cursor-pointer items-center">
                <div className="relative flex h-full items-center justify-center">
                  <div className="">#3</div>
                  <div className="absolute top-[53px] z-50 flex w-[100px] origin-top scale-y-0 items-center justify-center bg-white shadow-sm transition duration-300 ease-in-out group-hover:scale-y-100">
                    <div className="flex gap-[16px] py-5 text-[13px] tablet:gap-[10px] tablet:text-[11px]">
                      <div className="flex flex-col text-center">
                        <a className="py-3 hover:text-primary-green" href="/optimizer">
                          #3-1
                        </a>
                        <a className="py-3 hover:text-primary-green" href="/hexa">
                          #3-2
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/update" className="relative flex h-full items-center hover:text-primary-green">
              #4
            </a>
            <a href="/donate" className="relative flex h-full items-center hover:text-primary-green">
              #5
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
