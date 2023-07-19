export default function Navbar({ auth, link_name, link_icon }) {
    return (
        <header class="w-full flex flex-row items-center place-content-between">
            <a href="/" class="pl-8 text-2xl font-medium mt-4 group-data-[checked=true]:text-white">
                Yarro
            </a>
            <div class="navTabs flex gap-x-8">

                {auth &&
                    <a href="{{link.link}}" class="hover:cursor-pointer group-data-[checked=true]:text-white">
                        <p class="material-symbols-outlined pt-4 mx-2 text-2xl select-none" id="homebtn">{link_icon}</p>
                        <p class="select-none">{link_name}</p>
                    </a>
                }
            </div>


            <div class="items-center flex">
                <label for="theme">
                    <span id="theme_button"
                        class="material-symbols-outlined pt-4 px-4 text-4xl group-data-[checked=true]:text-white select-none hover:cursor-pointer">
                        dark_mode
                    </span>
                </label>
                <input type="checkbox" id="theme" class="hidden" />
                {auth &&
                    <div class="relative inline-block group/nav ">
                        <div class="profile-container pt-4 pr-8 min-w-[50px] max-w-[50px] min-h-[50px] mr-4">
                            <img id="profile-img" src="" alt="pfp" class="min-w-[50px] h-[50px] rounded-full select-none" />
                        </div>
                        <div
                            class="navs group-hover/nav:block absolute hidden w-36 right-1 z-1 shadow-xl group-data-[checked=true]:text-white">
                            <p class="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300 group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:hover:bg-black"
                                id="profile-btn">
                                Profile
                            </p>
                            <p class="py-2 hover:cursor-pointer pl-2 bg-white hover:bg-gray-300 group-data-[checked=true]:bg-gray-900 group-data-[checked=true]:hover:bg-black"
                                id="logout-btn">
                                Logout
                            </p>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}