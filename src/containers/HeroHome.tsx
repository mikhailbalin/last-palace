import React from 'react';

export const HeroHome = () => {
  return (
    <section className="relative">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-60 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-gray-800"
              data-aos="zoom-y-out"
            >
              Cайт обновляется
            </h1>

            {/* <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Чтобы оставаться в курсе последних новостей, пожалуйста оставьте
                вашу почту.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <form>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full">
                      <label
                        className="block text-sm sr-only"
                        htmlFor="newsletter"
                      >
                        Почта
                      </label>
                      <div className="relative flex items-center max-w-xs">
                        <input
                          id="newsletter"
                          type="email"
                          className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm border border-gray-300 rounded"
                          placeholder="Ваша почта"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute inset-0 left-auto"
                          aria-label="Subscribe"
                        >
                          <span
                            className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                            aria-hidden="true"
                          ></span>
                          <svg
                            className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </button>
                      </div>
      
                      <p className="mt-2 text-blue-600 text-sm">
                        Спасибо за подписку!
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
