const Update = () => {
  return (
    <div className="flex-1 bg-body-green">
      <div className="flex justify-between lg:justify-center">
        <div className="mx-auto my-[25px] max-w-[100vw] mo:my-[10px] mo:max-w-full">
          <div>
            <div className="flex gap-5 md:flex-col">
              <div className="h-[550px] w-[400px]">
                <div className="h-full w-full max-w-[100vw] rounded-xl border-none bg-white p-5">
                  <div className="flex items-center justify-center border-b-[5px] pb-2 text-[20px]">
                    사이트 이용 안내 <span className="ml-5 flex h-fit rounded-xl border px-4 py-1 text-[10px]">자주 묻는 질문</span>
                  </div>
                  <div className="flex h-[90%] flex-col gap-4 overflow-y-scroll px-5">
                    <div className="flex flex-col gap-7 pt-3">
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q1. </span>
                          <span>환산 스탯이 낮게 나오는 것 같아요.</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A1. </span>
                          <span>
                            {" "}
                            info 페이지의 ? 버튼과 장착 장비를 잘 살펴보세요. 세팅이 다르거나, API에서 누락된 정보가 있을 수 있습니다. (특히 시드링을
                            장착하지 않은 경우 시드링 0레벨로 적용됩니다.)
                          </span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q2. </span>
                          <span>세팅 다 제대로인데 환산 스탯이 낮게 나오는 것 같아요.</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A2. </span>
                          <span> 넥슨 openAPI에서 현재 기간제 버프(드림 메신저) 옵션을 안 줍니다. 해당 수치만큼 낮게 나올 수 있습니다.</span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q3. </span>
                          <span>환산 수치는 언제를 기준으로 계산되나요?</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A3. </span>
                          <span> 이젠 날짜를 선택할 수 있습니다. 선택된 날짜에 넥슨 openAPI에서 제공하는 데이터를 기준으로 합니다.</span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q4. </span>
                          <span>그럼 API에 데이터는 몇 시쯤 저장되나요?</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A4. </span>
                          <span> 캐릭터마다 다르고, 캐릭터 내부에서도 항목마다 다른 것으로 보여 정확히 알 수 없습니다.</span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q5. </span>
                          <span>환산 검색 시 오늘 날짜가 선택이 안 됩니다.</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A5. </span>
                          <span>
                            {" "}
                            넥슨 openAPI는 최대 "1일 전"의 데이터를 제공하기 때문입니다. 받을 수 있는 최신 데이터가 있는 날짜를 선택할 수 있게 되어
                            있습니다.
                          </span>
                        </div>
                      </div>
                      <div className="ml-3 flex flex-col gap-2 text-[13px]">
                        <div className="flex gap-1 border-b font-black">
                          <span>Q6. </span>
                          <span>수동 입력 시 최종데미지 수치가 다른 것 같습니다.</span>
                        </div>
                        <div className="flex gap-1 text-[13px]">
                          <span className="font-black">A6. </span>
                          <span>
                            {" "}
                            1 이내 차이는시스템 반올림 때문이므로 무시하셔도 됩니다. 그 이상 차이나는 경우는 해방/리부트 체크유무와 쓸컴뱃 사용 유무를
                            확인해주세요.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[550px] w-[400px] flex-col gap-4">
                <div className="h-full w-full max-w-[100vw] rounded-xl border-none bg-white p-5">
                  <div className="flex justify-center border-b-[5px] pb-2 text-[20px]">최근 업데이트 내역 안내</div>
                  <div className="flex h-[90%] flex-col gap-4 overflow-y-scroll px-5">
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 2. 11.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>프로필 사진 저장 기능(beta)이 업데이트 되었습니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>프로필 사진에 포함할 항목을 직접 선택할 수 있습니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 2. 3.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>유니온 배치가 사냥 세팅으로 추정될 경우, 1주일 내로 보스 세팅을 자동으로 추적해주도록 변경됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 31.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>프리셋을 사용자가 직접 선택할 수 있게 변경됩니다.(장비/어빌리티/링크/하이퍼스탯)</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 28.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>메인 페이지의 북마크에서 x버튼을 눌러 삭제할 수 있도록 변경됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 25.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>"헥사코어" 페이지가 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>누적 솔 에르다 소모 갯수를 기준으로 내 위치를 찾아줍니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>3.</div>
                          <div>각 코어별 풀강 대비 진행도(전체 대비 %)와 추천 대비 강화 정도(과다/적정/부족) 데이터를 출력합니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>4.</div>
                          <div>목표 레벨까지 필요한 솔 에르다와 조각 갯수를 출력합니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>5.</div>
                          <div>상단 네비게이션 바가 개선됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 20.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>이제 프리셋을 분석하여 보스 세팅을 자동으로 찾아서 계산해줍니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>
                            하이퍼/링크는 현재 세팅이 보스 세팅이 아닌 경우 '1번 프리셋'을 기준으로 계산합니다. (1번 프리셋에 보스용 세팅을 두시길
                            권장합니다.)
                          </div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>3.</div>
                          <div>
                            어빌리티, 유니온은 현재 세팅 기준으로만 출력됩니다 (어빌리티 : 모든 경우의 수 최적화 불가능, 유니온 : 제공하지 않음)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 16.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>뱃지 시스템이 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>아이템 세팅이 특정 조건을 만족하는 경우, 뱃지가 수여됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>3.</div>
                          <div>뱃지 단계는 최대 6단계로 나뉘며, 단계별로 이미지가 다르게 제공됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 13.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>무릉도장 예측 서비스를 제공합니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>이제 환산이 낮게 나올 수 있는 이유를 경고문으로 출력합니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 10.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>GMS 전용 입력 버튼과 스탯 간이 계산기가 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>추가 스펙 시뮬레이터에서 현재 적용중인 포스/레벨 수치를 확인할 수 있도록 변경됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2024. 1. 5.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>닉네임 검색 기준 날짜를 선택 가능하도록 변경됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>스펙 시뮬레이터의 효율표에서 최종뎀% 외에 주스탯, 공격력% 등을 선택할 수 있도록 변경됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>3.</div>
                          <div>스펙 시뮬레이터의 공격력, 주스탯, 주스탯% 항목에 미니 계산기가 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>4.</div>
                          <div>무기 추옵 기준치를 1추/2추를 선택할 수 있게 변경됩니다(나머지 옵션은 보공으로 환산).</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2023. 12. 31.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>즐겨찾기 기능이 추가됩니다.</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="pt-3">
                        <div className="w-fit rounded-xl border bg-slate-50 px-5 py-1 text-[15px]">2023. 12. 30.</div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>1.</div>
                          <div>링크 효율 순위표가 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>2.</div>
                          <div>방어구 에디셔널 잠재능력 순위표가 추가됩니다.</div>
                        </div>
                        <div className="ml-3 flex gap-3 text-[13px]">
                          <div>3.</div>
                          <div>무기류 잠재능력 순위표가 추가됩니다.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
