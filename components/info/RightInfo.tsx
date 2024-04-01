import { ItemEquipment } from "@/interface/ItemEquipment";
import { itemDetailPopupState } from "@/recoil/states";
import { useRecoilState } from "recoil";
import InfoItem from "./InfoItem";
import InfoItemDetail from "./InfoItemDetail";

interface RightInfoProps {
  item: ItemEquipment | undefined;
}

const RightInfo = (props: RightInfoProps) => {
  const { item } = props;

  const [itemDetailPopup, setItemDetailPopup] = useRecoilState<boolean>(itemDetailPopupState);

  return (
    <div className="flex h-fit w-[90rem] flex-col rounded-[10px] bg-white p-[23px] mo:max-w-full">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5px]">
            <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray bg-hover-gray mo:text-[11px]">
              ALL
            </button>
            <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
              무보엠
            </button>
            <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
              방어구
            </button>
            <button className="rounded-[20px] border p-[5px_15px] text-[14px] font-bold text-[#5C5C5C] hover:bg-hover-gray mo:text-[11px]">
              장신구
            </button>
          </div>
          <div>
            <button className="rounded-[2px] bg-[#fff2e0] px-3 py-2 text-[13px] font-bold text-[#ff8d47]">프리셋 변경</button>
          </div>
        </div>
        <div className="mt-[10px] grid grid-cols-2 gap-5 mo:grid-cols-1">
          {item &&
            item.item_equipment.map((value, idx) => {
              return <InfoItem value={value} key={idx} />;
            })}
        </div>

        {itemDetailPopup && <InfoItemDetail />}
      </div>
    </div>
  );
};

export default RightInfo;
