"use client";
import WalletBar from "@/components/WalletBar";
import {
  DiscordIcon,
  LearnmoreIcon,
  LikeIcon,
  MenuIcon,
  SaveIcon,
  ScanIcon,
  ScanIcon2,
  StarIcon,
  StarIcon2,
  TelegramIcon,
  TwitterIcon,
} from "../assets/icons";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Modal from "./Modal";
import { useContractWrite, useWaitForTransaction } from "@starknet-react/core";
import ConnectModal from "./components/ConnectModal";
import { useAccount } from "@starknet-react/core";

export default function Home() {

  const {address} = useAccount();
  const [open, setOpen] = useState<boolean>(false);

  const CONTRACT_ADDR =
    "0x5b730d673a76d083cf4863fe37468a92c83066b2e3cdb2374904c954fb0c4ec";

  const calls = useMemo(() => {
    const tx = {
      contractAddress: CONTRACT_ADDR,
      entrypoint: "verify",
      calldata: [
        {
          product_id: 1,
          ipfs_hash: "QmVqyWcuoBpHvt5tT5Gw9eJz2qYJyGKw4NY4yEdFcopK69",
        },
      ],
    };
    return [tx];
  }, []);

  const { writeAsync, data: txHash } = useContractWrite({ calls });

  useEffect(() => {
    writeAsync();
  }, [address]);


  const transaction = "0x1059391b8c4fba9743b531ba371908195ccb5dcf2a9532fac247256fb48912f"


  const { isLoading, isError, error, data } = useWaitForTransaction({hash: transaction, watch: true})


  console.log(data, error, isLoading, "wait transaction");

  console.log(txHash, "tx hash")

  const [openConnectedModal, setOpenConnectedModal] = useState(false);


  const toggleUserModal = () => {
    setOpenConnectedModal((prev) => !prev);
  };

  return (
    <main className="">
      <header className="lg:bg-hero bg-hero-2  bg-no-repeat bg-cover">
        <nav className="flex px-5 md:px-20 py-5  items-center justify-between lg:backdrop-brightness-50 ">
          <Link
            href="/"
            className="text-white font-lato hidden lg:block  font-extrabold text-2xl"
          >
            ScanGaurd
          </Link>
          <div className="lg:hidden block">
            <MenuIcon />
          </div>
          <div className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-white font-lato  text-sm  font-normal"
            >
              Home
            </Link>
            <a href="#" className="text-white font-lato  text-sm font-normal ">
              About
            </a>
            <a href="#" className="text-white font-lato  text-sm font-normal">
              Producers
            </a>
          </div>

          <div className=" flex gap-5">
            <div className="" onClick={() => setOpen(true)}>
              <ScanIcon />
            </div>

            <button
              onClick={toggleUserModal}
              className="bg-white px-3 py-2 font-lato  rounded-full text-black text-sm border border-white"
            >
              Launch App
            </button>
          </div>
        </nav>

        <div className="grid md:py-40  md:px-20 ">
          <div className="flex flex-col px-5  lg:px-0 py-10 lg:py-0 md:w-[445px] mt-60 rounded-r-2xl rounded-l-2xl lg:pt-0 justify-center bg-[#2323217A] lg:bg-transparent">
            <p className=" text-[40px] lg:text-[54px] pr-[45px] lg:pr-0  text-textSecondary font-bold font-lato  md:leading-[64px] capitalize">
              get only the best of the best with one scan
            </p>
            <p className="text-base text-textSecondary leading-[24px] pt-8 font-lato ">
              This is a shared liquidity market smart contract which is used by
              multiple website to provide the users the best possible
              experience.
            </p>

            <div className="flex items-center gap-10 pt-10">
              <button className="bg-white px-5 py-3 font-bold rounded-full font-lato  text-black text-sm border border-white">
                Scan Product
              </button>
              <div className="flex  gap-2 items-center">
                <button className="bg-transparent  rounded-full font-lato  text-textSecondary text-sm ">
                  Learn More
                </button>

                <LearnmoreIcon color="#fff" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col justify-between items-center bg-[#2323217A]">
          <div className="flex items-center gap-40  py-10 lg:py-5">
            <div className="flex flex-col md:flex-row gap-10 ">
              <div className="flex flex-col items-center">
                <p className="text-[14px] font-[500] leading-[16.8px] font-lato  capitalize text-textSecondary">
                  products
                </p>
                <p className="text-[50px] md:text-[64px] font-bold text-textSecondary font-lato  ">
                  10+
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[14px] font-[500] leading-[16.8px] capitalize font-lato  text-textSecondary">
                  Scans
                </p>
                <p className="text-[50px] md:text-[64px]  font-bold text-textSecondary font-lato  ">
                  300k+
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[14px] font-[500] leading-[16.8px] capitalize font-lato  text-textSecondary">
                  Producers
                </p>
                <p className="text-[50px] md:text-[64px]  font-bold text-textSecondary font-lato ">
                  20k+
                </p>
              </div>
            </div>
            <div className="hidden lg:flex">
              <img
                src="/user-1.png"
                alt="user-1"
                className="w-[48px] h-[48px]"
              />
              <img
                src="/user-2.png"
                alt="user-2"
                className="w-[48px] h-[48px]"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex lg:hidden items-center justify-center   py-10 lg:py-5">
        <div className="flex items-center justify-center gap-2 ">
          <div className="flex flex-col bg-[#17212D1F] w-[112px] h-[112px] justify-center rounded-full items-center">
            <p className="text-[12px] font-[500] leading-[16.8px] font-lato  capitalize text-textPrimary">
              products
            </p>
            <p className="text-[20px]  font-bold text-textPrimary font-lato  ">
              10+
            </p>
          </div>

          <div className="flex flex-col bg-[#17212D1F] w-[112px] h-[112px] justify-center rounded-full items-center">
            <p className="text-[12px] font-[500] leading-[16.8px] capitalize font-lato  text-textPrimary">
              Scans
            </p>
            <p className="text-[20px] md:text-[64px]  font-bold text-textPrimary font-lato  ">
              300k+
            </p>
          </div>

          <div className="flex flex-col bg-[#17212D1F] w-[112px] h-[112px] justify-center rounded-full items-center">
            <p className="text-[12px] font-[500] leading-[16.8px] capitalize font-lato  text-textPrimary">
              Producers
            </p>
            <p className="text-[20px] md:text-[64px]  font-bold text-textPrimary font-lato ">
              20k+
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5  md:px-[112px] py-20 bg-secondary">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/bottles.png"
            alt="bottles"
          />
        </div>

        <div>
          <p className="text-[32px]  text-textPrimary font-lato">About Us</p>
          <p className="text-textPrimary font-[18px] leading-[24px] py-10 font-lato ">
            ScanGuard is a platform that allows you to buy products with more
            trust in it’s authenticity before you consume it. With the ease of
            scanning products and seeing all the necessary details, and the
            number of thumbs up given to the product for being authentic, or the
            number of thumbs down showing the poor rating of the product, you
            can make a quick decision to purchase the product or run away from
            it with your two slippers in hand.
          </p>

          <div className="flex gap-2 items-center">
            <a href="#" className="text-textPrimary">
              Learn more
            </a>

            <LearnmoreIcon color="#000" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5  md:px-[112px] py-10 bg-textSecondary">
        <div>
          <p className="text-[32px]  text-textPrimary font-lato">
            Your products can be here too
          </p>
          <p className="text-textPrimary font-[18px] leading-[24px] py-10 font-lato ">
            If you are a producer and you have a product you will like to
            register with ScanGuard, this is for you. With ScanGuard, you are in
            control of the information of the production, distribution, and
            sales of your products. You products will be recognized as
            explicitly yours and any counterfeit will be flagged as dangerous
            and unfit to be used.
          </p>

          <div className="space-y-2">
            <p className="font-lato text-[16px] text-textPrimary">
              Step 1: Connect your wallet address
            </p>
            <p className="font-lato text-[16px] text-textPrimary">
              Step 2: Input all required information of your product
            </p>
            <p className="font-lato text-[16px] text-textPrimary">
              Step 3: Submit for recording
            </p>
            <p className="font-lato text-[16px] text-textPrimary">
              Step 4: Save the product token
            </p>
          </div>

          <div className="flex gap-2 items-center pt-5">
            <a href="#" className="text-textPrimary">
              Learn more
            </a>

            <LearnmoreIcon color="#000" />
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/bottle.png"
            alt="bottles"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-[#090606] px-5  md:px-[112px] py-10  bg-cover">
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/footer.png"
            alt="footer-bottles"
          />
        </div>

        <div>
          <p className="text-[32px]  text-textSecondary  font-lato">
            Why ScanGaurd?
          </p>
          <p className="text-textSecondary font-[18px] leading-[24px] py-10 font-lato ">
            ScanGuard runs on the blockchain technology allowing relevant data
            about products used on a daily basis; production date, distribution,
            and expiration date, to be immutable and safely stored.
          </p>

          <div className="flex gap-2 items-center">
            <a href="#" className="text-textSecondary">
              Learn more
            </a>

            <LearnmoreIcon color="#fff" />
          </div>
        </div>
      </div>
      <footer className="bg-[#090606] py-10 px-10 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex gap-6">
            <a href="#" className="text-white font-lato  text-sm  font-normal">
              Home
            </a>
            <a href="#" className="text-white font-lato  text-sm font-normal ">
              About
            </a>
            <a href="#" className="text-white font-lato  text-sm font-normal">
              Producers
            </a>
          </div>

          <div className="flex gap-5">
            <a href="#" className="text-white font-lato  text-sm  font-normal">
              Privacy
            </a>
            <a href="#" className="text-white font-lato  text-sm  font-normal">
              Terms & Conditions
            </a>
          </div>

          <div className="flex items-center justify-between gap-5">
            <DiscordIcon />
            <TelegramIcon />
            <TwitterIcon />
          </div>
        </div>
      </footer>

      <Modal title="" open={open} close={() => setOpen(false)}>
        <div className="hidden lg:grid  grid-cols-5 py-5 items-center gap-10">
          <div className="col-span-2">
            <p className="text-[48px] text-textPrimary font-semibold font-lato leading-[57.9px]">
              Ginger Drink
            </p>
            <div className="flex  items-center gap-2 pt-10 ">
              <p className="text-base   text-textPrimary font-normal font-lato">
                Price:
              </p>
              <p>
                NGN{" "}
                <span className="font-extrabold text-textPrimary text-[20px]  ">
                  690.
                </span>
                00
              </p>
            </div>
            <p className="text-[20px] py-5 text-[#40403E] font-semibold font-lato leading-[24px]">
              About the Company/Producer
            </p>
            <p className="text-[16px] text-[#40403E] font-normal font-lato leading-[24px]">
              XYZ started the production of XY some years ago and has multiple
              variations of the product.
            </p>
          </div>
          <div className="col-span-1">
            <img src="/product.png" alt="product-image" />
            <div className="flex items-center justify-between pt-5">
              <div className="space-y-2 flex items-center justify-center flex-col">
                <ScanIcon2 />
                <p className="text-xs text-center font-lato leading-[9.6px]">
                  Scan Again
                </p>
              </div>

              <div className="space-y-2 flex items-center justify-center flex-col">
                <SaveIcon />
                <p className="text-xs text-center font-lato leading-[9.6px]">
                  Save
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-[20px] py-5 text-textPrimary font-semibold font-lato leading-[24px]">
              Product Data
            </p>

            <div className="grid grid-cols-3 items-center pt-10 gap-2 justify-between">
              <div className="space-y-2  col-span-2">
                <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                  Manu. Date (DD.MM.YY):
                </p>
                <p className="text-[#40403E] text-[40px] font-bold font-lato leading-[52.2px]">
                  15. 05. 2024
                </p>
              </div>

              <div className="space-y-2 col-span-1">
                <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                  No. Of Scans
                </p>
                <p className="text-[#40403E] text-[40px] font-bold font-lato leading-[52.2px]">
                  42
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 items-center justify-between pt-10">
              <div className="space-y-2 col-span-2">
                <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                  Exp Date (DD.MM.YY):
                </p>
                <p className="text-[#EE5D55] text-[40px] font-bold font-lato leading-[52.2px]">
                  15. 07. 2024
                </p>
              </div>

              <div className="space-y-2 col-span-1">
                <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                  Rating
                </p>
                <div className="flex  items-center gap-2">
                  <p className="text-[#40403E] text-[40px] font-bold font-lato leading-[52.2px]">
                    4.0
                  </p>
                  <StarIcon width={36} height={53} />
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-10">
              <p>Ingredients:</p>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center justify-center bg-[#17212D1F] rounded-md px-5 py-2">
                  <p className="text-[#506480] font-lato">Ginger</p>
                </div>

                <div className="flex items-center justify-center bg-[#17212D1F] rounded-md px-5 py-2">
                  <p className="text-[#506480] font-lato">Ginger</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-10">
              <button className="shadow-lg bg-white px-10 py-2 flex items-center gap-2 rounded-full">
                <LikeIcon /> <p>97%</p>
              </button>

              <button className="shadow-lg bg-white px-10 py-2 flex items-center gap-2 rounded-full">
                <LikeIcon /> <p>97%</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden  py-5 items-center gap-10">
          <p className="text-[38px] text-textPrimary font-semibold font-lato leading-[57.9px]">
            Ginger Drink
          </p>

          <div className="">
            <img src="/product.png" alt="product-image" />
            <div className="flex items-center justify-between pt-5">
              <div className="space-y-2 flex items-center justify-center flex-col">
                <ScanIcon2 />
                <p className="text-xs text-center font-lato leading-[9.6px]">
                  Scan Again
                </p>
              </div>

              <div className="space-y-2 flex items-center justify-center flex-col">
                <SaveIcon />
                <p className="text-xs text-center font-lato leading-[9.6px]">
                  Save
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-[20px] py-5 text-textPrimary font-semibold font-lato leading-[24px]">
              Product Data
            </p>

            <div className="bg-white shadow-lg rounded-xl px-2 py-2">
              <div className="grid grid-cols-3  items-center pt-10 gap-2 justify-between">
                <div className="space-y-2 col-span-2  ">
                  <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                    Manu. Date (DD.MM.YY):
                  </p>
                  <p className="text-[#40403E] text-[24px] lg:text-[40px] font-bold font-lato leading-[31.2px] lg:leading-[52.2px]">
                    15. 05. 2024
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                    No. Of Scans
                  </p>
                  <p className="text-[#40403E] text-[24px] lg:text-[40px] font-bold font-lato leading-[31.2px] lg:leading-[52.2px]">
                    42
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 items-center  justify-between pt-10">
                <div className="space-y-2 col-span-2">
                  <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                    Exp Date (DD.MM.YY):
                  </p>
                  <p className="text-[#EE5D55]  text-[24px] lg:text-[40px] font-bold font-lato leading-[31.2px] lg:leading-[52.2px]">
                    15. 07. 2024
                  </p>
                </div>

                <div className="space-y-2 col-span-1">
                  <p className="text-[#40403E] text-[16px] font-normal font-lato leading-[19.2px]">
                    Rating
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-[#40403E] text-[24px] lg:text-[40px] font-bold font-lato leading-[31.2px] lg:leading-[52.2px]">
                      4.0
                    </p>
                    <StarIcon2 />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-10">
              <p>Ingredients:</p>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center justify-center bg-[#17212D1F] rounded-md px-5 py-2">
                  <p className="text-[#506480] font-lato">Ginger</p>
                </div>

                <div className="flex items-center justify-center bg-[#17212D1F] rounded-md px-5 py-2">
                  <p className="text-[#506480] font-lato">Ginger</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-10">
              <button className="shadow-lg bg-white px-10 py-2 flex items-center gap-2 rounded-full">
                <LikeIcon /> <p>97%</p>
              </button>

              <button className="shadow-lg bg-white px-10 py-2 flex items-center gap-2 rounded-full">
                <LikeIcon /> <p>97%</p>
              </button>
            </div>
          </div>

          <div className="">
            <div className="flex  items-center gap-2 pt-10 ">
              <p className="text-base   text-textPrimary font-normal font-lato">
                Price:
              </p>
              <p>
                NGN{" "}
                <span className="font-extrabold text-textPrimary text-[20px]  ">
                  690.
                </span>
                00
              </p>
            </div>
            <p className="text-[20px] py-5 text-[#40403E] font-semibold font-lato leading-[24px]">
              About the Company/Producer
            </p>
            <p className="text-[16px] text-[#40403E] font-normal font-lato leading-[24px]">
              XYZ started the production of XY some years ago and has multiple
              variations of the product.
            </p>
          </div>
        </div>
      </Modal>

      <ConnectModal isOpen={openConnectedModal} onClose={toggleUserModal} />

    </main>
  );
}
