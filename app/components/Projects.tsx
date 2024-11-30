// import Blogify from "@/public/images/Blogify.jpeg";
// import WheelchairDoctor from "@/public/images/Wheelchair-doctor-project.png";
// import BookMarked from "@/public/images/BookMarkedImage.png";
// import ClimateClever from "@/public/images/climate-clever.png";
// import Image from "next/image";
// import Link from "next/link";

// const Projects = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24" id="projects">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          
//           {/* Project 1 */}
//           <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
//             <Link href={"https://blogify-3-val1.onrender.com/"} target="_blank">
//               <Image src={Blogify} alt="Blogify project" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//                 <p className="text-white text-lg px-4">Blogify- A blogging platform where users can create, edit, and share posts.</p>
//               </div>
//             </Link>
//           </div>

//           {/* Project 2 */}
//           <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
//             <Link href={"https://icarus9maximus.github.io/Wheelchair-doctor/"} target="_blank">
//               <Image src={WheelchairDoctor} alt="Wheelchair-doctor project" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//                 <p className="text-white text-lg px-4">Wheelchair Doctor - A website to support wheelchair users with maintenance and service resources.</p>
//               </div>
//             </Link>
//           </div>

//           {/* Project 3 */}
//           <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
//             <Link href={"https://climateclever-1.onrender.com"} target="_blank">
//               <Image src={ClimateClever} alt="ClimateClever project" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//                 <p className="text-white text-lg px-4">ClimateClever - An app that displays the weather conditions of a specific location</p>
//               </div>
//             </Link>
//           </div>

//           {/* Project 4 */}
//           {/* <div className="group relative bg-white p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//               <p className="text-white text-lg px-4">Details about Project 4 will go here.</p>
//             </div>
//             <p className="text-gray-700">Project 4</p>
//           </div> */}
//                     <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
//             <Link href={"https://climateclever-1.onrender.com"} target="_blank">
//               <Image src={BookMarked} alt="BookMarked project" className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
//                 <p className="text-white text-lg px-4">BookMarked- An app that summarizes books for users.</p>
//               </div>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import Blogify from "@/public/images/Blogify.jpeg";
import WheelchairDoctor from "@/public/images/Wheelchair-doctor-project.png";
// import BookMarked from "@/public/images/BookMarkedImage.png";
import PromptShare from "@/public/images/Prompt.png";
import ClimateClever from "@/public/images/climate-clever.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24" id="projects">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {/* Project 1 */}
          <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
            <Image
              src={Blogify}
              alt="Blogify project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <p className="text-white text-lg px-4 mb-4">
                Blogify - A blogging platform where users can create, edit, and
                share posts.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://blogify-2-wh2k.onrender.com"
                  target="_blank"
                >
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Live Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/Icarus9Maximus/Blogify"
                  target="_blank"
                >
                  <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    GitHub Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
            <Image
              src={WheelchairDoctor}
              alt="Wheelchair-doctor project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <p className="text-white text-lg px-4 mb-4">
                Wheelchair Doctor - A website to support wheelchair users with
                maintenance and service resources.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://icarus9maximus.github.io/Wheelchair-doctor/"
                  target="_blank"
                >
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Live Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/Icarus9Maximus/Wheelchair-doctor"
                  target="_blank"
                >
                  <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    GitHub Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
            <Image
              src={ClimateClever}
              alt="ClimateClever project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <p className="text-white text-lg px-4 mb-4">
                ClimateClever - An app that displays the weather conditions of a
                specific location.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://climateclever-1.onrender.com"
                  target="_blank"
                >
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Live Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/Icarus9Maximus/climateclever"
                  target="_blank"
                >
                  <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    GitHub Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative bg-success p-4 shadow-lg rounded-md min-h-[250px] overflow-hidden">
            <Image
              src={PromptShare}
              alt="PromptShare project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <p className="text-white text-lg px-4 mb-4">
                PromptShare - An app that enables users to share AI prompts.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://promptshare-geg1.onrender.com"
                  target="_blank"
                >
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                    Live Preview
                  </button>
                </Link>
                <Link
                  href="https://github.com/Icarus9Maximus/PromptShare"
                  target="_blank"
                >
                  <button className="border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
                    GitHub Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
