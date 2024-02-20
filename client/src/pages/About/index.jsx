import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Richa from "../../assets/images/Team/richa.jpg";
import Sonika from "../../assets/images/Team/sonika.jpg";
import Shilpam from "../../assets/images/Team/shilpam.jpg";
import Anshita from "../../assets/images/Team/anshita.jpg";
import Ankit from "../../assets/images/Team/ankit.jpg";
import Yash from "../../assets/images/Team/yash.jpg";
import Kaif from "../../assets/images/Team/kaif.jpg";
import Utkarsh from "../../assets/images/Team/utkarsh.jpg";
import Uday from "../../assets/images/Team/uday.jpg";
import Tanay from "../../assets/images/Team/tanay.jpg";
import Deepshikha from "../../assets/images/Team/deepshikhayadav.png";
import kapt from "../../assets/images/Team/director.jpg";
import Sonia from "../../assets/images/Team/soniamalik.png";
import Vaani from "../../assets/images/Team/vaanigarg.png";
import Kavita from "../../assets/images/Team/kavitasheoran.png";
import Sakshi from "../../assets/images/Team/sakshirajput.png";

const index = () => {
  return (
    <div className="font-defaultfont">
      <Navbar />
      <div className=" mx-[8%] top-[80px]  md:mb-[100px] md:top-[120px] relative min-h-screen  py-5">
        <div className="font-Merriweather  ">
          <div className=" w-full md-flex py-6  bg-[#064663]">
            <h1 className="  text-md md:text-3xl mx-14  font-semibold text-white  ml-10 sm-text-md font-Merriweather   py-6 ">
              About Msit Alumni Association
            </h1>

            <p className="text-sm md:text-xl mx-14 mb-3 text-white mt-2 sm-text-sm ml-10">
              Our key objective is to nurture and strengthen the Institute’s
              bond with its alumni community, business corporations and
              philanthropists. . These include setting up world class research
              and academics in emerging areas of science and technology,
              building world class infrastructure, improving faculty value
              proposition, strengthening the entrepreneurship ecosystem, and
              contributing to the society.
            </p>

            <p className="text-sm md:text-xl italic   mx-14 justify-between text-white ml-10 mb-3  sm-text-sm font-Merriweather  mt-3">
              "Staying connected with the place that gave you a chance to learn
              and discover yourself is refreshing !"
            </p>
          </div>

          <div className=" ml-14 my-8  text-sm  md:text-3xl  font-bold font-Merriweather text-[#041C32] ">
            Message From President
          </div>

          <div className="bg=[#F5F5F5] mx-auto md:flex   ">
            <div className="w-[25%]">
              <div className="justify-between pl-8 md:pl-32">
                <div className="pt-12 ">
                  <img src={kapt} className="w-md h-md  rounded-full" alt="" />
                </div>

                <p className=" text-md font-Merriweather font-bold text-[#041C32] mt-8  ">
                  Sh. Kaptan Singh
                </p>
                <p className="text-sm font-Merriweather  text-[#041C32] italic    ">
                  President
                </p>
                <p className="text-sm font-Merriweather text-[#041C32] italic  mt-2  ">
                  Surajmal Memorial Education Society
                </p>
              </div>
            </div>
            <div className="w-[95%] md:w-[75%] mx-auto">
              <div className="w-full mx-auto items-center content-center">
                {/* <p className="text-md text-black font-Merriweather">Mr. Kalpen Shukla informed the House of his Vision Statement for IITDAA activities for the year 2022-23. </p> */}
                <p className="  text-md  md:text-lg text-black mt-2 mb-2 font-Merriweather ">
                  Maharaja Surajmal Institute of Technology is a prestigious
                  institution that has produced 8000+ accomplished graduates in
                  a variety of professions. Founded in 2019, MSIT Alumni
                  Association is an independent, registered organisation that
                  includes more than 4000 alumni working in different countries
                  and works to strengthen relationships. The Alumni Affairs
                  Advisory Committee is comprised of faculty members and
                  students.
                </p>

                <p className="  text-md  md:text-lg text-black  mt-2 mb-2 font-Merriweather ">
                  The strength of our institution rests on its graduates, whose
                  achievements and contributions are a testament to the quality
                  of education and the values, they learnt here. MSIT graduates
                  have achieved remarkable success in a variety of fields,
                  including technology, business, government and academia.
                </p>

                <p className="  text-md  md:text-lg text-black  mt-2 mb-2  font-Merriweather ">
                  {" "}
                  As you continue to make your mark in the world, we encourage
                  you to stay connected with us and with your fellow alumni,
                  share your experiences, and continue to be a part of our
                  institution's growth and development
                </p>

                <h4 className=" text-lg md:text-xl font-semibold text-black mt-2 mb-2 font-Merriweather">
                  The Alumni Affairs Team provides various facilities and
                  services such as:
                </h4>
                <ul>
                  <li className="  text-md  md:text-lg text-black  mt-2 mb-2  font-Merriweather ">
                    • Provide opportunities to stay connected and engaged with
                    your alma mater.
                  </li>
                  <li className="  text-md  md:text-lg text-black  mt-2 mb-2  font-Merriweather ">
                    • Technical and academic collaboration can also be valuable,
                    as alumni have expertise in a variety of areas that can
                    benefit their alma mater.
                  </li>
                  <li className="  text-md  md:text-lg text-black  mt-2 mb-2  font-Merriweather ">
                    • Student interaction and mentoring can be especially
                    valuable, as alumni can offer advice and support to current
                    students.
                  </li>
                  <li className="  text-md  md:text-lg text-black  mt-2 mb-2  font-Merriweather ">
                    • Contributions to the Institute can help ensure the
                    continued success and growth of the institution, through
                    donations, volunteerism, or other forms of support.
                  </li>
                </ul>

                <p className="  text-md  md:text-lg text-black  mt-2 mb-2 font-Merriweather ">
                  We look forward to staying connected with you and hearing
                  about your accomplishments and successes.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-">
            <div className="container bg-[#ECF2FF] mt-24 mb-32 md:my-24 px-6 mx-auto ">
              <div className="h-1 w-full bg-gray-600 "></div>

              <section className=" font-Merriweather">
                <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-4">
                  <div className="mx-auto mb-4 max-w-screen-sm lg:mb-10">
                    <h2 className="mb-4 text-4xl font-semibold text-[#064663]  ">
                      Faculty Team
                    </h2>
                    <div className="h-[2px] mt-4 w-48 rounded m-auto bg-[#112D4E]"></div>
                  </div>
                  <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Richa}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Richa Gupta</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Convener and Associate Prof. (ECE)
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36   rounded-full "
                        src={Sonika}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Sonika Malik</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Asst. Prof.
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Deepshikha}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Deepshikha Yadav</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Asst. Prof. (ECE)
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Sonia}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Ms. Sonia Malik</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Asst. Prof. (ECE)
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Shilpam}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Shilpam Malik</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Asst. Prof. 
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Vaani}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Ms. Vaani Garg</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Asst. Prof.
                      </h2>
                    </div>

                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36  rounded-full"
                        src={Kavita}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Kavita Sheoran</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Associate Prof.
                      </h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36  rounded-full"
                        src={Sakshi}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Sakshi Rajput</span>
                      </h1>
                      <h2 className="text-xl italic ">
                        Team Member and Associate Prof.
                      </h2>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-1 w-full bg-gray-600 "></div>

              <section className=" font-Merriweather">
                <div className="py-4 px-2 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-4">
                  <div className="mx-auto mb-6 max-w-screen-sm lg:mb-12">
                    <h2 className="mb-4 text-4xl font-semibold text-[#064663]  ">
                      {" "}
                      Student Team
                    </h2>
                    <div className="h-[2px] mt-4 w-48 rounded m-auto bg-[#112D4E]"></div>
                  </div>

                  <div className=" py-16 grid gap-6 lg:gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full "
                        src={Tanay}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Tanay Aggarwal</a>
                      </h1>
                      <h2 className="text-xl italic ">Lead Engineer</h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full "
                        src={Ankit}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Ankit Chaudhary</a>
                      </h1>
                      <h2 className="text-xl italic ">Design Engineer</h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full "
                        src={Anshita}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Anshita Chaudhary</a>
                      </h1>
                      <h2 className="text-xl italic ">Design Engineer</h2>
                    </div>
                  </div>

                  <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full "
                        src={Utkarsh}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <span href="#">Utkarsh Ahuja</span>
                      </h1>
                      <h2 className="text-xl italic ">Software Engineer</h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Uday}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Uday Singh Sangwan </a>
                      </h1>
                      <h2 className="text-xl italic ">Backend Engineer</h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full"
                        src={Kaif}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Mohd Kaif </a>
                      </h1>
                      <h2 className="text-xl italic ">Frontend Engineer</h2>
                    </div>
                    <div className="text-center text-gray-500">
                      <img
                        className="mx-auto mb-4 w-36 h-36 object-cover rounded-full "
                        src={Yash}
                        alt="messi"
                      />
                      <h1 className="mb-1 text-xl font-bold  text-gray-900 ">
                        <a href="#">Yash Choudhary</a>
                      </h1>
                      <h2 className="text-xl italic ">Frontend Engineer</h2>
                    </div>
                  </div>

                  <div className="mb-2"></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
