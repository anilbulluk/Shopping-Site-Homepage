import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-black text-gray-300 py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-1">Documentation</li>
                        <li className="py-1">Guides</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1">About</li>
                        <li className="py-1">Blog</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li className="py-1">Claims</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Terms</li>
                        <li className="py-1">Polices</li>
                        <li className="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Lorem ipsum dolor sit amet.</p>
                    <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <form className="flex flex-col">
                       <div className="flex items-center gap-5 mb-4">
                       <div class="flex items-center">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Man</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                                <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Woman</label>
                        </div>
                       </div>
                        <div className="flex">
                        <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
                        <button className="p-2 mb-4">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 items-center m-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2022. All rights reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl text-white">
                    <a target="blank" href="https://www.twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a target="blank" href="https://www.facebook.com/"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a target="blank" href="https://www.instagram.com/"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a target="blank" href=""><ion-icon name="logo-whatsapp"></ion-icon></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;