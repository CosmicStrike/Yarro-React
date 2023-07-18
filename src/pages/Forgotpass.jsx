const Forgotpass = () => {
  return (
    <div class="root flex flex-row justify-center lg:place-content-evenly mt-[150px]">
        <div
            class="form-container border rounded-[3rem] flex flex-col px-[50px] py-[70px] border-white bg-white group-data-[checked=true]:bg-black group-data-[checked=true]:border-black group-data-[checked=true]:text-white">
            <form id="forgot_form" class="flex flex-col w-[360px] lg:w-[400px] group-data-[checked=true]:bg-black"
                onsubmit="return false;">
                <div class="phrase-container flex flex-col pl-1 ">
                    <p class="phrase text-2xl font-bold text-left pb-2 ">
                        Reset Password
                    </p>
                    <p>
                        Enter your email address, we will send you a link to reset your password.
                    </p>
                </div>
                <input
                    class="mt-4 rounded-lg h-12 pl-[15px] border-2 group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white"
                    type="email" name="email" placeholder="email" id="email" />
                <input
                    class="mt-[20px] rounded-full h-[40px] text-white text-m bg-[#7034E4] hover:cursor-pointer disabled:bg-gray-900 "
                    type="submit" name="reset" id="resetButton" value="Request reset link" />
                <a href="/" class="flex justify-center mt-[30px] hover:underline underline-offset-1">
                    Login instead?
                </a>
            </form>
        </div>

        <div class="image-container hidden lg:block">
            <img src="/static/static_images/forgot.png" alt="Forgot Pass" class="w-[600px] " />
        </div>
    </div>
  )
}

export default Forgotpass
