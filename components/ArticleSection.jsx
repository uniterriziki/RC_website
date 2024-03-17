//this component describes or displays the data relating to the article in the website

import Image from "next/image"

const ArticleSection = () => {
  return (
    <div className="bg-gray-50 py-4">
        <div><h2 className="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 ">
        From The Students</h2>
        <p className="mt-4 text-xl leading-7 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        <div className="mt-4">
           <section className="flex items-center ml-20">
            <Image src={"/room 1.jpg"} width={500} height={300}alt="Picture of the article blurb"/>
            </section> 
            <section className="p-6">
                <p className="text-sm leading-5 font-medium text-indigo-600">Blog</p><h3 className="mt-2 text-xl leading-7 font-semibold text-gray-500">
                Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <div className="mt-6 flex">
                    <div className="flex-shrink-0">
                    <Image src={"/cat 2.jpg"} width={35} height={35}alt="Picture of the author" className="rounded-full"/></div>
                    <div className="ml-3">
                        <p className="flex text-sm leading-5 font-medium text-gray-900">John Doe</p>
                        <div className="text-sm leading-5 text-gray-500"><time dateTime="2024-03-06">Mar 06, 2024</time>
                            <span className="mx-1">&middot;</span>
                            <span>6 min Read</span>
                        </div>
                    </div>
                </div>
                </section></div></div>
  )
}

export default ArticleSection