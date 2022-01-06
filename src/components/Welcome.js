import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const connectWallet = ()=>{
    // return(

    // );
}

const Welcome = () =>{
    return(
        <div className="w-full flex justify-center items-center"> 
          <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex flex-1 justify-start flex-col md:mr-10"> 
                <h1 className="text-3xl text-white text-gradient py-1">
                    Send Crypto
                    <br/>
                    Across the World
                </h1> 

                <p className="text-left text-white font-light py-3">
                    Explore the Crypto World.
                    Buy and Sell easily on Krypto. 
                </p>

                <button type="button" oncClick={connectWallet} className="flex flex-row justify-center my-5 bg-[#2595e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"> 
                    <p className="text-white text-base font-semibold">
                    Connect Wallet
                    </p>
                </button>
            </div>

            <div className="flex flex-col flex-1 item-center justify-start w-full mt-10">

                <div className="p-3 justify-end items-start flex-col rounded xl h-40 w-full my-5 eth-card white-glassmorphism "> 
                    <div className="flex justify-between flex-col w-full h-full ">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#fff" />
                            </div>
                            <BsInfoCircle font={17} color="#fff"/>
                        </div>
                    <div>
                        
                    </div>
                        <p className="text-white font-light text-sm">
                            Address
                        </p>

                        <p className="text-white font-semibold text-lg mt-1">
                           Ethereum
                        </p>
                    </div>
                    
                </div>


                {/* <div className="p-5 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
                </div> */}

                    <p></p>
            </div>
          </div>
        </div>
    );
}

export default Welcome;