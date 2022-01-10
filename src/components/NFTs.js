import { FaReact  } from "react-icons/fa";
import {SiIpfs} from 'react-icons/si';
import {SiWeb3Dotjs} from 'react-icons/si';
import {FaEthereum} from 'react-icons/fa';



// we will use cards to tell what techs our marketplace is using

const ServiceCard = ({color, title, icon , subtitle}) =>(
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
            {icon}
        </div>
        
        <div className="ml-5 flex flex-col flex-1">
            <h1 className="mt-2 text-white text-lg">{title}</h1>
            <h1 className="mt-2 text-white text-sm w-9/12">{subtitle}</h1>
        </div>
    </div>
)

const NFTs = () =>{
    return(
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex flex-col items-center justify-between py-12 px-4">
                <div className="flex-1 flex flex-col justify-start items-start">
                    <h1 className="text-white text-3xl">
                        This website has
                    <br/>
                     been made with: 
                    </h1>        
                </div>
            </div>

                {/* Using Card components */}

                <div className=" flex-col static justify-start items-center">
                    <ServiceCard
                    color="bg-[#757B93]"
                    title="Ethereum"
                    icon={<FaEthereum fontSize={21} className="text-white"/>}
                    subtitle="The core of the website are smart contracts. "
                    />
 
                    <ServiceCard
                    color="bg-[#E4820D]"
                    title="Web3.js"
                    icon={<SiWeb3Dotjs fontSize={21} className="text-white"/>}
                    subtitle="Web3.0 helps with the interaction with blockchain."
                    />  

                    <ServiceCard
                    color="bg-[#8945F8]"
                    title="IPFS"
                    icon={<SiIpfs fontSize={21} className="text-white"/>}
                    subtitle="IPFS is used for dumping of digital assets. "
                    />

                    <ServiceCard
                    color="bg-[#2952E3]"
                    title="React.js"
                    icon={<FaReact fontSize={21} className="text-white"/>}
                    subtitle="The website you are seeing is made with it. "
                    />

                </div>
        </div>
    );
}

export default NFTs;