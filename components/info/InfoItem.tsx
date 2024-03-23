import { ItemData } from "@/interface/ItemEquipment";
import { itemDataState } from "@/recoil/states";
import { useRecoilState } from "recoil";

interface InfoItemProps {
  setIs_popup: (value: boolean) => void;
  value: ItemData;
}

const InfoItem = (props: InfoItemProps) => {
  const { setIs_popup, value } = props;

  const [itemData, setItemData] = useRecoilState<ItemData>(itemDataState);

  const onClick = () => {
    setIs_popup(true);
    setItemData(value);
  };
  let potential_option_grade;
  let additional_potential_option_grade;
  if (value.potential_option_grade === "레전드리") {
    potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]"> 레전드리 </div>;
  } else if (value.potential_option_grade === "유니크") {
    potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#FFAE34] bg-[#fffac8]">유니크</div>;
  } else if (value.potential_option_grade === "에픽") {
    potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#7479FF] bg-[#E0E1FF]">에픽</div>;
  }

  if (value.additional_potential_option_grade === "레전드리") {
    additional_potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#35A239] bg-[#D5EED6]"> 레전드리 </div>;
  } else if (value.additional_potential_option_grade === "유니크") {
    additional_potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#FFAE34] bg-[#fffac8]">유니크</div>;
  } else if (value.additional_potential_option_grade === "에픽") {
    additional_potential_option_grade = <div className="rounded-sm px-3 text-[9px] font-semibold text-[#7479FF] bg-[#E0E1FF]">에픽</div>;
  }

  return (
    <button onClick={onClick}>
      <div className="flex w-full gap-3 rounded-[4px] bg-white px-3 py-5 shadow-xs hover:bg-hover-gray">
        <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center">
          <img className="min-w-[4rem]" src={value.item_icon} alt="ㅇ" title="무기" />
        </div>
        <div className="flex flex-col items-start gap-1 text-[1.3rem]">
          <div className="flex items-center gap-2 text-[1.5rem]">
            <div className="truncate font-black">{value.item_name}</div>
            {Number(value.starforce) !== 0 && (
              <div className="flex items-center font-bold">
                <img className="mr-1 h-[14px] w-[14px]" src="../img/icon_star_yellow.png" alt="star" /> {value.starforce}
              </div>
            )}

            <div
              className="relative flex items-center font-bold cursor-pointer hover:underline"
              title="클릭하여 무기 추옵 기준을 변경할 수 있습니다.(1추 <=> 2추)"
            >
              <div>
                {/* <img src="/images/reborn_fire.png" className="h-[17px] w-[17px]" /> */}
                {/* 1추&amp;보공5% */}
              </div>
            </div>
          </div>
          <div className="flex h-fit flex-wrap items-center gap-3">
            {potential_option_grade}
            {additional_potential_option_grade}
            {/* <div className="rounded-sm px-3 text-[9px] font-semibold text-[#555] bg-[#eee]">보보공 에디 공21%</div> */}
          </div>
        </div>
      </div>
    </button>
  );
};

export default InfoItem;
