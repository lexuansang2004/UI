export default function  Body(){
    return(
        <>
        <div className="flex w-full bg-white h-auto">
            <div className="basis-1/3 flex-grow p-4">
                <div className="flex flex-col rounded-lg border border-gray-300">
                    <div className="flex p-2">
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505100/list_filter_bsehsw.png" alt="" />
                        <h2 className="font-bold">FILTERS</h2>
                    </div>
                    <div className="flex justify-between p-2">
                        <h2 className="font-bold">Type</h2>
                        <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                    </div>
                    <div className="flex w-full">
                        <div className="basis-1/2 px-6 p-4 flex flex-col">
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Pan-fried</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                                <p>Grilled</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Sauteed</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Steamed</p>
                            </div>
                        </div>
                        <div className="basis-1/2 px-6 p-4 flex flex-col">
                        <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Stir-fried</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                                <p>Roasted</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Baked</p>
                            </div>
                            <div className="flex m-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                                <p>Stewed</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300">
                        <div className="flex justify-between p-2 ">
                            <h2 className="font-bold">Time</h2>
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                        </div>
                        <div className="flex justify-center"> 
                            <p className="mr-2.5">30 minutes</p>
                            <p className="ml-2.5">50 minutes</p>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/slider_hxpbi2.png" alt="" />
                        </div>        
                    </div>
                    <div className="w-full border-t border-gray-300">
                        <div className="flex justify-between p-2">
                            <h2 className="font-bold">Rating</h2>
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Chevron_up_large_1_r3cbbv.png" alt="" />
                        </div>
                        <div className="flex px-6 p-4 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_5_v18c7m.png" alt="" />
                        </div>
                        <div className="flex px-6 p-4 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505098/checkbox_qpprtn.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_4_ijq176.png" alt="" />
                        </div>
                        <div className="flex px-6 p-4 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_3_npohab.png" alt="" />
                        </div>
                        <div className="flex px-6 p-4 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505095/rating_2_mornon.png" alt="" />
                        </div>
                        <div className="flex px-6 p-4 justify-start">
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505099/checkboxpink_apf6vq.png" alt="" />
                            <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504528/Rating_11_qvo2mq.png" alt="" />
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300 p-4">
                        <div className="w-full">
                            <button className="w-full h-10 rounded-xl border-0 bg-[#f34e88] text-white">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/3 flex-grow p-10">
                <div className="flex justify-between">
                    <h1 className="font-bold">Salad(32)</h1>
                    <div className="relative inline-block w-[150px]">
                    <select className="appearance-none w-[150px] border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" name="select" id="select">
                        <option value="all">A-Z</option>
                    </select>
                    <div class="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <img className="rotate-90" src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504523/Arrow_forward_ios_2_injmzc.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                    <div className="max-w-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 m-2">
                        <img className="w-full h-48 object-cover" src="./src/assets/Salad with Cabbage.png" alt="Cucumber salad" />
                    
                        <div className="p-4">
                            <div className="flex justify-between items-center">
                            <h3 className="font-bold text-lg">Cucumber salad, <br /> cherry tomatoes</h3>
                            <div className="p-2">
                                <img src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504524/Icon_Button_73_slliwm.png">
                                </img>
                            </div>
                            </div>
                            <div className="rounded-xl bg-[#ffeaf4] w-fit p-2 mt-2">
                                <p className="text-pink-500 text-sm font-medium">32 minutes</p>
                            </div>               
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex items-center space-x-2">
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
                        &lt;
                    </button>

                    <button className="px-3 py-2 border rounded-md !bg-pink-500 text-white">1</button>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">2</button>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">3</button>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">4</button>
                    <span className="px-3 py-2 text-gray-500">...</span>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">10</button>
                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">11</button>

                    <button className="px-3 py-2 border rounded-md text-gray-500 hover:bg-gray-100">
                        &gt;
                    </button>
                    </div>
                </div>
                

            </div>
        </div>
        </>
    )
}