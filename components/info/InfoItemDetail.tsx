interface InfoItemDetailProps {
  setIs_popup: (value: boolean) => void;
}

const InfoItemDetail = (props: InfoItemDetailProps) => {
  const { setIs_popup } = props;

  const onClick = () => {
    setIs_popup(false);
  };

  return (
    <div id="ModalContainer" className="fixed bottom-0 left-0 right-0 top-0 z-[500] h-screen min-h-screen w-full bg-[rgba(0,0,0,0)]" onClick={onClick}>
      <div className="z-15 fixed left-[50%] top-[50%] min-w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-[5px] bg-[#000000de] text-[12px] text-white">
        <div className="flex h-full w-full flex-col divide-y divide-dashed divide-[#454545] p-[15px] [&>div]:py-[7px]">
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <div className="flex w-[200px] flex-wrap items-center justify-center gap-x-[5px]">
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
              </div>
              <div className="flex">
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_yellow.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
                <img className="my-2 h-[12px]" src="../img/icon_star_white.png" alt="star" />
              </div>
            </div>
            <div className="text-[16px]  text-[rgb(204,255,0)]">위대한 시그너스의 </div>
            <div className="text-[15px] font-bold">제네시스 시즈건 (+8)</div>
            <div>(레전드리 아이템)</div>
          </div>
          <div className="flex items-center gap-[10px] !py-[20px]">
            <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[10px] border-2 border-[rgb(119,238,0)] bg-white py-[10px]">
              <img className="h-[50px] w-auto" src="https://open.api.nexon.com/static/maplestory/ItemIcon/KEKBJGLG.png" alt="img" />
            </div>
            <div className="flex gap-3" />
          </div>
          <div>
            <div>장비분류 : 무기</div>
            <ul>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">STR : </div>
                <div className="text-[rgb(102,255,255)]">+327</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>150</div>
                  <div className="text-[rgb(170,170,255)]">+32</div>
                  <div className="text-[rgb(255,204,0)]">+145</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">DEX : </div>
                <div className="text-[rgb(102,255,255)]">+325</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>150</div>
                  <div className="text-[rgb(204,255,0)]">+30</div>
                  <div className="text-[rgb(255,204,0)]">+145</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">INT : </div>
                <div className="text-[rgb(102,255,255)]">+60</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>0</div>
                  <div className="text-[rgb(204,255,0)]">+60</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">LUK : </div>
                <div className="text-[rgb(102,255,255)]">+30</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>0</div>
                  <div className="text-[rgb(204,255,0)]">+30</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">최대 HP : </div>
                <div className="text-[rgb(102,255,255)]">+255</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>0</div>
                  <div className="text-[rgb(255,204,0)]">+255</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">공격력 : </div>
                <div className="text-[rgb(102,255,255)]">+890</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>348</div>
                  <div className="text-[rgb(204,255,0)]">+214</div>
                  <div className="text-[rgb(170,170,255)]">+72</div>
                  <div className="text-[rgb(255,204,0)]">+256</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-[rgb(102,255,255)]">올스탯 : </div>
                <div className="text-[rgb(102,255,255)]">+6%</div>
                <div className="flex gap-1">
                  <div>(</div>
                  <div>0%</div>
                  <div className="text-[rgb(204,255,0)]">+6%</div>
                  <div>)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="">보스 몬스터 공격 시 데미지 : </div>
                <div className="">+30%</div>
                <div className="flex gap-1" />
              </div>
              <div className="flex gap-3">
                <div className="">몬스터 방어율 무시 : </div>
                <div className="">+20%</div>
                <div className="flex gap-1" />
              </div>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[5px] text-[rgb(119,238,0)]">
              <div
                className="mt-[2px] h-[12px] w-[12px] rounded-[2px] border-[1px] bg-[rgb(119,238,0)] text-center text-[9px] font-semibold leading-[9px] text-white"
                style={{
                  textShadow:
                    "rgb(68, 68, 68) -1px -1px 0px, rgb(68, 68, 68) 1px -1px 0px, rgb(68, 68, 68) -1px 1px 0px, rgb(68, 68, 68) 1px 1px 0px",
                }}
              >
                L
              </div>
              <div>잠재옵션</div>
            </div>
            <ul>
              <div>공격력 : +12%</div>
              <div>보스 몬스터 공격 시 데미지 : +30%</div>
              <div>보스 몬스터 공격 시 데미지 : +30%</div>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[5px] text-[rgb(119,238,0)]">
              <div
                className="mt-[2px] h-[12px] w-[12px] rounded-[2px] border-[1px] bg-[rgb(119,238,0)] text-center text-[9px] font-semibold leading-[9px] text-white"
                style={{
                  textShadow:
                    "rgb(68, 68, 68) -1px -1px 0px, rgb(68, 68, 68) 1px -1px 0px, rgb(68, 68, 68) -1px 1px 0px, rgb(68, 68, 68) 1px 1px 0px",
                }}
              >
                L
              </div>
              <div>에디셔널 잠재옵션</div>
            </div>
            <ul>
              <div>공격력 : +12%</div>
              <div>DEX : +9%</div>
              <div>공격력 : +9%</div>
            </ul>
          </div>
          <div>
            <div className="flex flex-col items-start gap-[5px]">
              <div className="flex items-center text-yellow-300">위대한 시그너스의 소울 적용</div>
              <div className="flex items-center">공격력 : +3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoItemDetail;
