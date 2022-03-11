import React from "react";
const img = require('./../../images/IMG_9412.jpg');

const Contacts = () => {
    return (
        <section className="content-section contacts mb-lg-5">
            <div className="container">
                <article className="article">
                    <h2 id="contacts" className="article-title"><span>Contacts</span></h2>
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
                            <img className="w-50" src={img} alt=""/>
                        </div>
                        <div
                            className="my-3 mt-lg-0 col-12 col-lg-6 d-flex align-items-lg-center justify-content-center justify-content-lg-start">
                            <div className="row">
                                <div className="col-2">
                                    <a href="mailto: mtsalapova@yandex.ru"
                                       className="email-link d-flex justify-content-center">
                                        <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512">
                                            <g>
                                                <circle cx="255.999" cy="256" r="251.408"/>
                                            </g>
                                            <path
                                                d="M313.475,105.366h-45.648c-44.854,0-82.892,34.142-82.892,100.427  c0,39.765,18.42,69.084,51.25,83.547l-61.262,110.869c-2.005,3.619,0,6.426,3.202,6.426h28.433c2.4,0,4.01-0.801,4.81-2.807  l55.659-108.863h20.021v108.863c0,1.197,1.197,2.807,2.799,2.807h24.832c2.4,0,3.203-1.205,3.203-3.205V109.383  C317.881,106.571,316.279,105.366,313.475,105.366z M287.047,269.26h-16.818c-26.427,0-52.053-19.281-52.053-67.483  c0-50.22,24.024-70.705,48.448-70.705h20.424V269.26z"
                                                fill="#FFFFFF"/>
                                        </svg>
                                    </a>
                                    <a href="http://vk.com/mtsalapova/" className="vk-link">
                                        <svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512">
                                            <g>
                                                <path
                                                    d="M437.012,74.982C390.66,28.641,326.733,0,255.997,0S121.334,28.641,74.982,74.982C28.636,121.339,0,185.407,0,255.997   c0,70.737,28.636,134.663,74.982,181.02C121.334,483.363,185.261,512,255.997,512s134.663-28.637,181.015-74.983   C483.358,390.66,512,326.734,512,255.997C512,185.407,483.358,121.339,437.012,74.982z"/>
                                                <path clip-rule="evenodd"
                                                      d="M397.602,184.7c-3.826-2.832-17.574-2.832-31.181-2.832   c-13.894,0.283-27.787,0.283-31.049,1.56c-2.969,1.131-9.633,17.292-18.276,33.871c-9.931,18.721-21.972,36.86-29.631,36.567   c-10.062,0-7.648-30.756-6.941-53.571c0.137-14.888-2.271-19.71-4.397-20.977c-5.245-3.69-19.7-7.225-19.7-7.225   s-43.383-3.267-49.472,15.444c8.36,1.136,22.537-1.424,17.009,56.55c-0.424,2.842-6.664,26.652-26.793-5.528   c-5.104-8.073-24.375-56.409-31.181-56.691c-22.264-0.429-44.367-1.419-52.016,2.832c-7.235,4.256,9.633,37.421,38.127,81.935   c23.098,36.567,47.624,64.92,90.149,72.004c8.077,0.857,28.777,1.696,35.441-1.414c4.387-2.131-1.142-33.594,14.03-36.719   c6.664-1.271,32.594,32.893,42.373,36.719c5.968,2.408,19.003,3.398,32.326,2.828c14.46-0.42,30.894,1.424,32.453-8.498   c3.55-21.688-43.787-50.047-45.069-63.365c-1.136-9.638,17.297-27.354,26.646-40.965C392.068,210.781,404.837,190.94,397.602,184.7   L397.602,184.7z"
                                                      fill="#FFFFFF" fill-rule="evenodd"/>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="http://instagram.com/tsalapova.m/" className="inst-link">
                                        {/*<svg style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" viewBox="0 0 512 512">*/}
                                        {/*    <path*/}
                                        {/*        d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"/>*/}
                                        {/*</svg>*/}
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCEPlRpFHwSozdIvlH28UvyA"
                                       className="telegram-link">
                                        {/*<svg*/}
                                        {/*    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"*/}
                                        {/*    viewBox="0 0 512 512">*/}
                                        {/*    <path*/}
                                        {/*        d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm153.315,178.978c-3.68,-13.769 -14.522,-24.61 -28.29,-28.29c-24.958,-6.688 -125.025,-6.688 -125.025,-6.688c0,0 -100.067,0 -125.025,6.688c-13.765,3.68 -24.61,14.521 -28.29,28.29c-6.685,24.955 -6.685,77.024 -6.685,77.024c0,0 0,52.067 6.685,77.02c3.68,13.769 14.525,24.614 28.29,28.293c24.958,6.685 125.025,6.685 125.025,6.685c0,0 100.067,0 125.025,-6.685c13.768,-3.679 24.61,-14.524 28.29,-28.293c6.685,-24.953 6.685,-77.02 6.685,-77.02c0,0 0,-52.069 -6.685,-77.024Zm-185.316,125.025l0,-96.002l83.137,48.001l-83.137,48.001Z"/>*/}
                                        {/*</svg>*/}
                                    </a>
                                </div>
                                <div className="col-10">
                                    <p className="contacts-content text-left"><a href="mailto: mtsalapova@yandex.ru">tsalapovam@yandex.ru</a></p>
                                    <p className="contacts-content text-left"><a href="http://vk.com/mtsalapova/">Maria Tsalapova</a></p>
                                    <p className="contacts-content text-left"><a href="http://instagram.com/tsalapova.m/">@tsalapova.m</a></p>
                                    <p className="contacts-content text-left"><a href="https://www.youtube.com/channel/UCEPlRpFHwSozdIvlH28UvyA">Marie TS</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contacts