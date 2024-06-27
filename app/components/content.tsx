import Image from "next/image";
import React from "react";

// Define the Asset type
type Asset = {
  code: string;
  name: string;
  last_trade: number;
  change_24h_percent: number;
  change_24h_value: number;
  image_path: string;
};

interface ContentProps {
  assets: Asset[];
}

const Content: React.FC<ContentProps> = ({ assets }) => {
  const currency = "USD";
  return (
    <div className="flex flex-col gap-5 text-[#FAFAFA]">
      <div className="flex w-full p-5 border border-[#464646] bg-black/80 rounded-lg">
        <table className="table-auto w-full">
          <thead className="border-b border-[#4F4F4F]">
            <tr className="text-left">
              <th>ASSETS</th>
              <th>LAST TRADE</th>
              <th>24H %</th>
              <th>24H CHANGE</th>
              <th className="text-[#3980FF] hover:underline">
                <a href="/more">MORE {">"}</a>
              </th>
            </tr>
          </thead>
          <br />
          <tbody>
            {assets &&
              assets.map((asset, key) => (
                <tr key={key} className="py-2 items-center">
                  <td className="h-16 w-64 flex gap-3 items-center">
                    <Image
                      src={`/${asset.image_path}`}
                      alt={asset.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                    <span className="font-medium text-lg text-[#FAFAFA]">
                      {asset.code}/
                      <span className="text-[#666666]">{currency}</span>
                    </span>
                  </td>
                  <td className="text-[#FAFAFA] font-medium text-lg">
                    ${asset.last_trade.toFixed(2)}
                  </td>
                  <td
                    className={`${
                      asset.change_24h_percent < 0
                        ? "text-[#FF5454]"
                        : "text-[#6DFF8B]"
                    } font-medium text-lg`}
                  >
                    {asset.change_24h_percent}%
                  </td>
                  <td
                    className={`${
                      asset.change_24h_value < 0
                        ? "text-[#FF5454]"
                        : "text-[#6DFF8B]"
                    } font-medium text-lg`}
                  >
                    ${asset.change_24h_value.toFixed(2)}
                  </td>
                  <td>
                    <button className="bg-[#6DFF8B] text-[#00554B] font-medium text-lg p-2">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col border border-[#464646] rounded-lg text-[#FAFAFA] bg-black/80 p-5 gap-7">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">SWAP TOKENS</h2>
          <button>
            <Image
              src="/gear.svg"
              alt="Settings icon"
              width={32}
              height={32}
              className="w-auto h-auto"
            />
          </button>
        </div>
        <div className="flex w-full relative gap-1">
          <div className="rounded-l flex justify-between py-5 px-12 grow bg-[#1E1E1E]">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-5xl">0.00</h2>
              <span className="font-medium text-sm text-[#666666]">0.00</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 bg-black px-3 py-2">
                <Image
                  src="/ph_currency-btc-bold.svg"
                  alt="Bitcoin logo"
                  width={32}
                  height={32}
                />
                <span className="text-[#868686] font-medium text-xl">
                  BTC {">"}
                </span>
              </div>
              <span className="font-normal text-sm">
                Balance:{" "}
                <span className="font-medium text-sm text-[#3980FF]">
                  24,240
                </span>
              </span>
            </div>
          </div>
          <Image
            src="/iconoir_coins-swap.svg"
            alt="alt"
            width={50}
            height={50}
            className="bg-black mx-auto rounded-full p-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div className="rounded-r flex justify-between py-5 px-12 grow bg-[#1E1E1E]">
            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-5xl">0.00</h2>
              <span className="font-medium text-sm text-[#666666]">0.00</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 bg-black px-3 py-2">
                <Image
                  src="/mingcute_bnb-line.svg"
                  alt="BNB logo"
                  width={32}
                  height={32}
                />
                <span className="text-[#868686] font-medium text-xl">
                  BNB {">"}
                </span>
              </div>
              <span className="font-normal text-sm">
                Balance:{" "}
                <span className="font-medium text-sm text-[#3980FF]">
                  63,790
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#9945FF] py-4 px-8 rounded-tl-lg rounded-br-lg text-base font-medium">
            SWAP TOKENS
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="font-normal text-sm">1 BTC = 32.4039 ETH</h4>
            <span className="font-normal text-sm text-[#3980FF]">
              Free exchange
            </span>
          </div>
          <span className="font-normal text-sm text-[#666666]">
            Updates in 4s
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
