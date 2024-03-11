interface InfoItemProps {
  setIs_popup: (value: boolean) => void;
}

const InfoItem = (props: InfoItemProps) => {
  const { setIs_popup } = props;

  const onClick = () => {
    setIs_popup(true);
  };
  return (
    <button onClick={onClick}>
      <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
          <img className="min-w-[4rem]" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEKBJGLG.png" alt="ㅇ" title="무기" />
        </div>
        <div className="flex flex-col items-start gap-1 text-[1.3rem]">
          <div className="flex items-center gap-2 text-[1.5rem]">
            <div className="truncate font-black">제네시스 시즈건</div>
            <div className="flex items-center font-bold">
              <img className="mr-1 h-[14px] w-[14px]" src="../img/icon_star_yellow.png" alt="star" /> 22
            </div>
            <div
              className="relative flex items-center font-bold cursor-pointer hover:underline"
              title="클릭하여 무기 추옵 기준을 변경할 수 있습니다.(1추 <=> 2추)"
            >
              <div>
                <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" />
                1추&amp;보공5%
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-wrap items-center gap-3">
            <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
            <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]">레전</div>
            <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">보보공 에디 공21%</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default InfoItem;
