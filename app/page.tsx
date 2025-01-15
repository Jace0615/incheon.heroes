import React from "react";
import ellipse11 from "/public/ellipse-11.svg";
import icnConnect from "/public/icn-connect.svg";
import logoBlack from "/public/logo-black.svg";

export const Element = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col h-[1336px] items-center gap-[100px] relative bg-variable-collection-iu-key-green1">
      <div className="relative w-[1920px] flex-[0_0_auto] bg-white">
        <div className="flex w-[1200px] items-center justify-between relative top-0.5 left-[381px]">
          <img
            className="relative w-[145px] h-10 object-cover"
            alt="Logo black"
            src={logoBlack}
          />

          <div className="inline-flex items-center justify-end gap-10 relative flex-[0_0_auto]">
            <div className="items-center justify-end gap-2.5 px-3 py-[15px] inline-flex relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                LEADERBOARD
              </div>
            </div>

            <div className="items-center justify-center gap-2 px-3 py-2 border-0 border-none inline-flex relative flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-[#000000] text-base tracking-[0] leading-4 whitespace-nowrap">
                STORY
              </div>
            </div>

            <div className="items-center justify-center gap-2 px-3 py-2 inline-flex relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                MICROVERSE
              </div>
            </div>

            <div className="h-[30px] items-center justify-end gap-2.5 px-3 py-[15px] border-b [border-bottom-style:solid] border-[#000000] inline-flex relative flex-[0_0_auto]">
              <div className="relative w-[68px] mt-[-9.00px] mb-[-7.00px] [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#16775d] text-base tracking-[0] leading-4">
                MY NFTS
              </div>
            </div>

            <div className="items-center justify-center gap-2 px-3 py-2 inline-flex relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                Authorization
              </div>
            </div>

            <div className="items-center justify-center gap-2 px-3 py-2 inline-flex relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                FAQ
              </div>
            </div>
          </div>

          <div className="items-center gap-2.5 inline-flex relative flex-[0_0_auto]">
            <img
              className="relative w-[19.06px] h-[11.83px]"
              alt="Icn connect"
              src={icnConnect}
            />

            <div className="items-start gap-2 p-2 inline-flex relative flex-[0_0_auto]">
              <div className="relative w-4 h-4 bg-[url(/vector.svg)] bg-[100%_100%]" />

              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-base tracking-[0] leading-4 whitespace-nowrap">
                KOR
              </div>
            </div>

            <img
              className="relative w-7 h-7 object-cover"
              alt="Ellipse"
              src={ellipse11}
            />
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col h-[916px] items-center gap-[100px] relative">
        <TitleWithImage
          className="!flex-[0_0_auto]"
          divClassName="!text-variable-collection-iu-key-black"
          divClassNameOverride="!text-variable-collection-iu-key-black"
          image="image.png"
        />
      </div>
    </div>
  );
};
