import React, {usecontext} from 'react';
import dummyData from '../dummydata.js';


 const TransactionCard = ({id, name, picture, age , breed , location}) =>{
     return(
    <div className='bg-[#181918] m-4 flex flex-1 flex-col p-3 rounded-md hover:shadow-2xl'>
        <div className='flex flex-col items-center w-full mt-3'>
            <div className=' w-full mb-6 p-2'>
            {/* ${addressFrom} */}
                <a href={`https://ropsten.etherscan.io/address/`} target="_blank" rel="noopener noreferrer">
                    <p className='text-white text-base'> From: {id} </p>
                </a>

                <a href={`https://ropsten.etherscan.io/address/`} target="_blank" rel="noopener noreferrer">
                    <p className='text-white text-base'> To: </p>
                </a>
                <p className='text-white text-base'> Amount: </p>
                <img src= {picture}className='w-full h-64 2x:h-96 rounded-md shadow-lg object-cover'/>
                <button className="bg-[#2595e3] py-2 px-7 mx-4 rounded-full mt-3 cursor-pointer hover:bg-[#2546bd]"> Buy </button>
            </div>
        </div> 
    </div>
     );
 }

const Transactions = () =>{
        
    return(
        <div className='flex w-full justify-center items-center gradient-bg-transactions'>
            <div className='flex flex-col py-12 px-4'>

            {/* {
                currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'> Latest Transactions</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'> Connect your account to explore</h3>
                )
            } */}

                <h3 className='text-white text-3xl text-center my-2'> Latest Transactions</h3>

                <div className='flex flex-wrap justify-center items-center mt-10'>
                        {
                        dummyData.reverse().map((trasactions, i) => (
                            <TransactionCard key={i} {...trasactions} />
                        ))}
                </div>

            </div>
        </div>
    );
}

export default Transactions; 