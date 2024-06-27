"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import Description from "./components/description";
import Content from "./components/content";

// Define the Asset type
type Asset = {
  code: string;
  name: string;
  last_trade: number;
  change_24h_percent: number;
  change_24h_value: number;
  image_path: string;
};

// Initial assets data
const initialAssets: Asset[] = [
  {
    code: "BTC",
    name: "Bitcoin",
    last_trade: 63000.0,
    change_24h_percent: -2.21,
    change_24h_value: -1426.18,
    image_path: "cryptocurrency-color_btc.png",
  },
  {
    code: "ETH",
    name: "Ethereum",
    last_trade: 3408.9,
    change_24h_percent: -0.33,
    change_24h_value: -11.2,
    image_path: "cryptocurrency-color_eth.png",
  },
  {
    code: "DOGE",
    name: "Dogecoin",
    last_trade: 0.15,
    change_24h_percent: 15.75,
    change_24h_value: 0.02,
    image_path: "cryptocurrency-color_doge.png",
  },
  {
    code: "ALGO",
    name: "Algorand",
    last_trade: 0.15,
    change_24h_percent: 0.0,
    change_24h_value: 0.0,
    image_path: "cryptocurrency-color_algo.png",
  },
  {
    code: "DOT",
    name: "Polkadot",
    last_trade: 5.64,
    change_24h_percent: 0.0,
    change_24h_value: 0.0,
    image_path: "cryptocurrency-color_dot.png",
  },
  {
    code: "UNI",
    name: "Uniswap",
    last_trade: 9.79,
    change_24h_percent: 0.0,
    change_24h_value: 0.0,
    image_path: "token-branded_uni.png",
  },
  {
    code: "COMP",
    name: "Compound",
    last_trade: 45.67,
    change_24h_percent: -0.95,
    change_24h_value: -0.44,
    image_path: "cryptocurrency-color_comp.png",
  },
];

export default function Home() {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const fetchData = async () => {
    const res = await fetch("/api/assets");
    const data = await res.json();
    setAssets(data.data);
  };

  const syncData = async () => {
    const res = await fetch("/api/sync-assets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(initialAssets),
    });
    if (res.ok) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    syncData();
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col p-4 bg-[#000] bg-contain bg-no-repeat bg-top gap-8"
      style={{ backgroundImage: 'url("/BG.png")' }}
    >
      <Header />
      <Description />
      <Content assets={assets} />
    </main>
  );
}
