import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { useSnackbar } from "notistack";
const Login = () => {

    const { setAuth } = useContext(AuthContext);
    const { enqueueSnackbar } = useSnackbar();

    const LoginForm = async function (e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());
        console.log(data);
        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                mode: "cors",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Basic " + btoa(data["uname"] + ":" + data["passwd"]),
                },
            });

            const responseData = await response.json();

            const status = responseData.status;
            console.log(responseData);
            if (status === "success") {
                setAuth({
                    login: true,
                    uid: responseData.uid,
                    uname: responseData.uname,
                });
                window.location.reload();
            } else {
                console.log(status);
                enqueueSnackbar(status, {
                    variant: "error",
                    sx: {
                        "& .SnackbarContent-root": {
                            width: 100,
                            fontSize: 16,
                        },
                    },
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        document.getElementById("passwd").addEventListener("focusin", (e) => {
            document.getElementById("pass").style.outlineWidth = "2px";
        });

        document.getElementById("passwd").addEventListener("focusout", (e) => {
            document.getElementById("pass").style.outlineWidth = "0px";
        });

        document.getElementById("vis").addEventListener("click", (e) => {
            if (document.getElementById("vis").innerText === "visibility") {
                document.getElementById("vis").innerHTML = "visibility_off";
                document.getElementById("passwd").type = "text";
            } else {
                document.getElementById("vis").innerHTML = "visibility";
                document.getElementById("passwd").type = "password";
            }
        });
    }, []);

    return (
        <>
            <div
                id="form-container"
                className="className= full lg:h-[40rem] rounded-[3rem] flex items-center justify-center px-8 py-[70px] border-black group-data-[checked=true]:bg-black group-data-[checked=true]:border-gray-900"
            >
                <form
                    id="login_form"
                    className=" shadow-2xl bg-white rounded-[1.5rem] flex gap-y-2 flex-col w-[30rem] lg:w-[32rem] lg:h-[30rem] p-6 transition-[width] duration-500 group-data-[checked=true]:bg-black"
                    onSubmit={LoginForm}
                >
                    <div className="phrase-container flex justify-center">
                        <p className="phrase text-3xl font-semibold text-center py-4 group-data-[checked=true]:text-white">
                            Login to access your account
                        </p>
                    </div>

                    <input
                        className="m-[8px] border-2 rounded-lg h-12 pl-3 className= group-data-[checked=true]:bg-[#3b4148] group-data-[checked=true]:text-white outline-none"
                        type="text"
                        name="uname"
                        placeholder="username"
                        id="uname"
                    />
                    <div
                        id="pass"
                        className="outline-none border-2 m-[8px] rounded-lg h-12 pl-3 pr-2 className= flex justify-between items-center group-data-[checked=true]:bg-[#3b4148]"
                    >
                        <input
                            className="h-10 border-none w-full outline-none group-data-[checked=true]:text-white group-data-[checked=true]:bg-[#3b4148]"
                            type="password"
                            name="passwd"
                            placeholder="Password"
                            id="passwd"
                        />
                        <input type="checkbox" id="pw" className="hidden" />
                        <label
                            id="vis"
                            className="material-symbols-outlined select-none hover:cursor-pointer"
                        >
                            visibility
                        </label>
                    </div>
                    <a
                        href="/password/reset"
                        className="forgot-text w-full flex text-sm px-4 justify-end hover:underline underline-offset-1 group-data-[checked=true]:text-white"
                    >
                        Forgot password
                    </a>
                    <input
                        className="mt-[20px] mx-2 rounded-full h-[40px] text-white text-m bg-purple-600 hover:bg-purple-700 duration-200 hover:cursor-pointer "
                        type="submit"
                        name="login_btn"
                        id="login_btn"
                        value="Login"
                    />
                    <a
                        href="/register"
                        className="register-text flex justify-center mt-[3rem] hover:underline underline-offset-1 group-data-[checked=true]:text-white"
                    >
                        Sign up instead?
                    </a>
                </form>
            </div>
        </>
    )
}

export default Login
