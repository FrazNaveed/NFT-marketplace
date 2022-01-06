import { BsShieldFillCheck  } from "react-icons/bs";
import {BiSearchAlt} from 'react-icons/bi';
import {RiHeart2Fill} from 'react-icons/ri';

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
                        Services that we
                    <br/>
                     continue to imporve 
                    </h1>        
                </div>
            </div>

                {/* Using Card components */}

                <div className="flex-1 flex flex-col justify-start items-center">
                    <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
                    subtitle="Security is Guaranteed. We always mainting the quality blah blah blah "
                    />

                     <ServiceCard
                    color="bg-[#8945F8]"
                    title="Security Guaranteed"
                    icon={<BiSearchAlt fontSize={21} className="text-white"/>}
                    subtitle="Security is Guaranteed. We always mainting the quality blah blah blah "
                    />

                     <ServiceCard
                    color="bg-[#dc2626]"
                    title="Security Guaranteed"
                    icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
                    subtitle="Security is Guaranteed. We always mainting the quality blah blah blah "
                    />
                </div>
        </div>
    );
}

export default NFTs;