import Image from "next/image";

const committeeMembers = [
  {
    name: "Miheso Lemashon",
    title: "Chairperson",
    image: "/Chairperson.jpeg",
  },
  {
    name: "Joan Chumba",
    title: "Vice Chairperson",
    image: "/ViceChair.jpeg",
  },
  {
    name: "Rajiv Yusuf",
    title: "Secretary",
    image: "/Secretary.jpeg",
  },
  {
    name: "Clinton Rugut",
    title: "Treasurer",
    image: "/Treasurer.jpeg",
  },
];

export default function Leaders() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {committeeMembers.map((member) => (
          <div key={member.name} className="overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-1/2 pt-[100%] sm:pt-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={300}
                  width={400}
                  className="brightness-75 transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-100"
                />
              </div>
              <div className="flex flex-col justify-center p-4 sm:w-1/2">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
