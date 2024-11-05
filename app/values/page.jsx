// import { Lightbulb, Target, Heart } from "lucide-react";

// export default function Values() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <a className="flex items-center justify-center" href="#">
//           <span className="sr-only">Research Club Uon</span>
//           <Lightbulb className="h-6 w-6" />
//           <span className="ml-2 text-lg font-semibold">RC UON</span>
//         </a>
//       </header>
//       <main className="flex-1">
//         {/* Hero of Mission, Vision and Values */}
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
//           <div className="container px-4 md:px-6">
//             <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//               Our Mission, Vision, and Values
//             </h1>
//             <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
//               Who We Are.
//             </p>
//           </div>
//         </section>

//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//               {/* Mission */}
//               <div className="p-6 bg-white shadow rounded">
//                 <div className="mb-4">
//                   <Target className="w-8 h-8 mb-4" />
//                   <h2 className="text-lg font-semibold">Our Mission</h2>
//                 </div>
//                 <div>
//                   <p>
//                     To empower individuals and businesses through innovative
//                     technology solutions, fostering growth and positive change
//                     in the digital landscape.
//                   </p>
//                 </div>
//               </div>
//               {/* Vision */}
//               <div className="p-6 bg-white shadow rounded">
//                 <div className="mb-4">
//                   <Lightbulb className="w-8 h-8 mb-4" />
//                   <h2 className="text-lg font-semibold">Our Vision</h2>
//                 </div>
//                 <div>
//                   <p>
//                     To be the leading force in shaping a connected world where
//                     technology enhances human potential and creates sustainable
//                     value for society.
//                   </p>
//                 </div>
//               </div>
//               {/* Values */}
//               <div className="p-6 bg-white shadow rounded">
//                 <div className="mb-4">
//                   <Heart className="w-8 h-8 mb-4" />
//                   <h2 className="text-lg font-semibold">Our Values</h2>
//                 </div>
//                 <div>
//                   <ul className="list-disc list-inside space-y-2">
//                     <li>
//                       Innovation: Constantly pushing boundaries and embracing
//                       new ideas.
//                     </li>
//                     <li>
//                       Integrity: Upholding the highest ethical standards in all
//                       we do.
//                     </li>
//                     <li>
//                       Collaboration: Fostering teamwork and partnerships for
//                       collective success.
//                     </li>
//                     <li>
//                       Excellence: Striving for the highest quality in our
//                       products and services.
//                     </li>
//                     <li>
//                       Customer-Centric: Putting our customers' needs at the
//                       heart of our decisions.
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//     </div>
//   );
// }

import { Lightbulb, Target, Heart } from "lucide-react";

export default function Values() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Research Club Uon</span>
          <Lightbulb className="h-6 w-6 text-primary-dark" />
          <span className="ml-2 text-lg font-semibold text-primary-dark">
            RC UON
          </span>
        </a>
      </header>
      <main className="flex-1">
        {/* Hero of Mission, Vision and Values */}
        <section className="w-full py-12 md:py-20 lg:py-24 xl:py-30 bg-primary-light opacity-85">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary-dark">
              Our Mission, Vision, and Values
            </h1>
            <p className="mx-auto max-w-[700px] text-primary-dark text-sm md:text-xl mt-4">
              Who We Are.
            </p>
            <div className="flex justify-center items-center">
              <p className="text-white px-5 py-4 text-center max-w-lg">
                The Research Club of the University of Nairobi (UoNRC) is a
                student-led organization dedicated to building a community of
                aspiring researchers. We connect students with medical
                professionals, fostering curiosity and practical skills to
                bridge classroom learning with real-world research.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {/* Mission */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Target className="w-8 h-8 mb-4 text-secondary" />
                  <h2 className="text-lg font-semibold text-primary-dark">
                    Our Mission
                  </h2>
                </div>
                <div>
                  <p className="text-primary-dark">
                    Our mission is to empower students with essential research
                    skills, ethical foundations, and mentorship opportunities.
                    Through hands-on learning and collaboration, we prepare
                    members to conduct, present, and publish impactful research,
                    shaping the future of medical science.
                  </p>
                </div>
              </div>
              {/* Vision */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Lightbulb className="w-8 h-8 mb-4 text-secondary" />
                  <h2 className="text-lg font-semibold text-primary-dark">
                    Our Vision
                  </h2>
                </div>
                <div>
                  <p className="text-primary-dark">
                    To create a vibrant community of student researchers who
                    advance medical knowledge and contribute meaningfully to
                    healthcare innovation on both local and global scales.
                  </p>
                </div>
              </div>
              {/* Values */}
              <div className="p-6 bg-white shadow rounded">
                <div className="mb-4">
                  <Heart className="w-8 h-8 mb-4 text-secondary" />
                  <h2 className="text-lg font-semibold text-primary-dark">
                    Our Values
                  </h2>
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2 text-primary-dark">
                    <li>
                      Innovation: Constantly pushing boundaries and embracing
                      new ideas.
                    </li>
                    <li>
                      Integrity: Upholding the highest ethical standards in all
                      we do.
                    </li>
                    <li>
                      Collaboration: Fostering teamwork and partnerships for
                      collective success.
                    </li>
                    <li>
                      Excellence: Striving for the highest quality in our
                      products and services.
                    </li>
                    <li>
                      Customer-Centric: Putting our customers' needs at the
                      heart of our decisions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
