import { ItemData, ItemEquipment } from "@/interface/ItemEquipment";
import { PreSet } from "@/interface/PreSet";
import { categoryState, itemDetailPopupState, preSetState } from "@/recoil/states";
import { Button, Flex, Popover, Segmented } from "antd";
import classNames from "classnames";
import { useRecoilState } from "recoil";
import InfoItem from "./InfoItem";
import InfoItemDetail from "./InfoItemDetail";

interface RightInfoProps {
  itemPreSet: ItemData[] | undefined;
}

const RightInfo = (props: RightInfoProps) => {
  const { itemPreSet } = props;

  const [itemDetailPopup, setItemDetailPopup] = useRecoilState<boolean>(itemDetailPopupState);
  const [preSet, setPreSet] = useRecoilState<PreSet>(preSetState);
  const [category, setCategory] = useRecoilState<number>(categoryState);

  const handleCategory = (value: number) => {
    setCategory(value);
  };

  const handlePreSet = (key: string, value: string) => {
    setPreSet({ ...preSet, [key]: value });
    setCategory(0);
  };

  const text = <span>Title</span>;
  const content = (
    <div className="flex flex-col gap-3">
      <div className="mb-3 grid grid-cols-[80px_auto] gap-y-3 text-[13px]">
        <div>장비</div>
        <Segmented
          options={["0", "1", "2", "3"]}
          onChange={(value: string) => {
            handlePreSet("item", value);
          }}
        />
        <div>하이퍼스탯</div>
        <Segmented
          options={["0", "1", "2", "3"]}
          onChange={(value: string) => {
            handlePreSet("hyper", value);
          }}
        />
        <div>어빌리티</div>
        <Segmented
          options={["0", "1", "2", "3"]}
          onChange={(value: string) => {
            handlePreSet("ability", value);
          }}
        />
        <div>유니온</div>
        <Segmented
          options={["0", "1", "2", "3"]}
          onChange={(value: string) => {
            handlePreSet("union", value);
          }}
        />
        <div>링크</div>
        <Segmented
          options={["0", "1", "2", "3"]}
          onChange={(value: string) => {
            handlePreSet("link", value);
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex h-fit w-[90rem] flex-col rounded-[10px] bg-white p-[23px] mo:max-w-full">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex gap-[5px]">
            <button
              className={classNames(
                "rounded-[20px]",
                "border",
                "p-[5px_15px]",
                "text-[14px]",
                "font-bold",
                "text-[#5C5C5C]",
                "hover:bg-hover-gray",
                { "bg-hover-gray": category === 0 },
                "mo:text-[11px]"
              )}
              onClick={() => handleCategory(0)}
            >
              ALL
            </button>
            <button
              className={classNames(
                "rounded-[20px]",
                "border",
                "p-[5px_15px]",
                "text-[14px]",
                "font-bold",
                "text-[#5C5C5C]",
                "hover:bg-hover-gray",
                { "bg-hover-gray": category === 1 },
                "mo:text-[11px]"
              )}
              onClick={() => handleCategory(1)}
            >
              무보엠
            </button>
            <button
              className={classNames(
                "rounded-[20px]",
                "border",
                "p-[5px_15px]",
                "text-[14px]",
                "font-bold",
                "text-[#5C5C5C]",
                "hover:bg-hover-gray",
                { "bg-hover-gray": category === 2 },
                "mo:text-[11px]"
              )}
              onClick={() => handleCategory(2)}
            >
              방어구
            </button>
            <button
              className={classNames(
                "rounded-[20px]",
                "border",
                "p-[5px_15px]",
                "text-[14px]",
                "font-bold",
                "text-[#5C5C5C]",
                "hover:bg-hover-gray",
                { "bg-hover-gray": category === 3 },
                "mo:text-[11px]"
              )}
              onClick={() => handleCategory(3)}
            >
              장신구
            </button>
          </div>
          <div>
            <Popover placement="bottom" title={text} content={content}>
              <button className="rounded-[2px] bg-[#fff2e0] px-3 py-2 text-[13px] font-bold text-[#ff8d47]">
                프리셋 변경
              </button>
            </Popover>
          </div>
        </div>
        <div className="mt-[10px] grid grid-cols-2 gap-5 mo:grid-cols-1">
          {itemPreSet?.map((value, idx) => {
            return <InfoItem value={value} key={idx} />;
          })}
        </div>

        {itemDetailPopup && <InfoItemDetail />}
      </div>
    </div>
  );
};

export default RightInfo;
