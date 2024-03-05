import Image from "next/image"

const ArticleSection = () => {
  return (
    <div className="bg-gray-50">
        <div><h2 className="text-4xl leading-10 tracking-tight font-extrabold text-gray-900 ">
        From The Students</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        <div>
           <section>
            <Image src={"/room 1.jpg"} width={100} height={100}alt="Picture of the article blurb"/>
            </section> 
            <section className="p-6">
                <p>Blog</p><h3>
                Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <div>
                    <Image src={"/cat 2.jpg"} width={100} height={100}alt="Picture of the author"/>
                    <div>
                        <p>John Doe</p>
                        <div><time dateTime="2024-03-06">Mar 06, 2024</time>
                            <span>&middot</span>
                            <span>6 min Read</span>
                        </div>
                    </div>
                </div>
                </section></div></div>
  )
}

export default ArticleSection