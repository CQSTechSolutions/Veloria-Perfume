import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Veloria Perfume</h1>
      <Image
        src="https://rukminim2.flixcart.com/image/750/900/xif0q/shopsy-perfume/e/d/r/50-black-panton-1pc-spray-perfume-50-ml-unisex-premium-quality-original-imagqwuwzajvfq3t.jpeg?q=20&crop=false"
        alt="Veloria Perfume"
        width={500}
        height={500}
      />

      <p className="text-4xl text-center">
        Veloria Perfume is a perfume brand that offers a wide range of perfumes
        for
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <li
            style={{
              padding: "10px",
              border: "1px solid black",
              margin: "10px",
            }}
          >


            <Image  src="https://maherolfactive.com/cdn/shop/files/Velouriawhite_530x@2x.jpg?v=1685406879" alt="Perfume 1" width={100} height={100} />


          </li>
          <li
            style={{
              padding: "10px",
              border: "1px solid black",
              margin: "10px",
            }}
          >
            <Image  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpeW6eqNGjCtBtMXIiY-ydyW9BSyf3ULKLQ&s" alt="Perfume 2" width={100} height={100} />
          </li>
      
        </ul>
      </p>
    </div>
  );
}
