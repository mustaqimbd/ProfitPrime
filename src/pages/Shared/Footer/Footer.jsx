import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#123426] text-white text-center mt-12 rounded-t-sm lg:text-left">
      <div className="mx-6 py-10 text-center lg:text-left">
        <div className="grid-1 grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-3"
                src="../../../../public/profit-up.png"
                alt=""
              />
              <Link
                to="/"
                className=" mb-4 flex items-center justify-center font-bold text-2xl lg:justify-start"
              >
                ProfitPrime
              </Link>
            </div>
            <p className="w-full text-justify">
              Maximize profits effortlessly with our Revenue Generation
              Platform. Harness data-driven insights, optimize strategies, and
              elevate customer engagement for exponential growth.
            </p>
          </div>

          <div className="flex lg:flex-none flex-col items-center">
            <div className="-ml-[70px] lg:-ml-0">
              <h6 className="mb-4 flex font-semibold uppercase lg:justify-start">
                Follow Us
              </h6>
              <div className="flex flex-col gap-5">
                <a href="#" className="mr-6 flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.7 0H4.3C1.9 0 0 1.9 0 4.3v15.3C0 22.1 1.9 24 4.3 24h15.3c2.4 0 4.3-1.9 4.3-4.3V4.3C24 1.9 22.1 0 19.7 0zM8.3 19.7H5V9h3.3v10.7zM6.6 7.7c-1.1 0-1.9-.8-1.9-1.9s.8-1.9 1.9-1.9c1 0 1.8.8 1.8 1.9s-.8 1.9-1.8 1.9zm13.2 12h-3.3v-5c0-1-.4-2-2-2s-2 .4-2 2v5H9V9h3v1c0 .5-.2 1-.6 1 .8-.5 2-.6 2-.6s2-.2 2-.2c2 .5 3 .8 3 .8s1 .5 1 .5v7z" />
                  </svg>
                  LinkedIn
                </a>

                <a href="#!" className="mr-6 flex gap-2 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Facebook
                </a>
                <a href="#!" className="mr-6 flex gap-2 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Twitter
                </a>

                <a href="#!" className="mr-6 flex gap-2 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-none flex-col items-center">
            <div>
              <h6 className="mb-4 flex font-semibold uppercase lg:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex lg:items-center  lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Head Office, Hasina Building (8th Floor). Segunbagicha,.
                Dhaka-1000.
              </p>
              <p className="mb-4 flex lg:items-center  lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                profitprime.info@gmail.com
              </p>
              <p className="mb-4 flex items-center  lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 88 01953392939
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white  p-6 text-center border-t">
        <span>© 2023 Copyright By </span>
        <span className="font-semibold text-white ">ProfitPrime</span>
      </div>
    </footer>
  );
};

export default Footer;
