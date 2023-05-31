import React from "react";

const NpoCard = () => {
  /*const {npoItem, npoCard} = props;*/
  const NpoCards = [
    /** ID = 1 + 2 + 3 = Water. ID = 4 + 5 + 6 = Knowledge**/
    {
      id: 1,
      imageSrc: "/images/Save the ocean.png",
      name: "Save the Ocean",
      text: "Save the Ocean is a non-profit organization in Brazil that works with cleaning the sea from plastic.",
    },
    {
      id: 2,
      imageSrc: "/images/Forestation PRJCT.png",
      name: "Forestation PRJCT",
      text: "Forestation PRJCT is a non-profit organization in Thailand that works with mangrove planting.",
    },
    {
      id: 3,
      imageSrc: "/images/SaveAralSea.png",
      name: "#SaveAralSea",
      text: "#Save Aral Sea is a local initative to plant trees in the deserted area of Aral Sea region.",
    },
    {
      id: 4,
      imageSrc: "/images/Girls-Edu.png",
      name: "Girls Edu.",
      text: "Girls Edu. is small non-profit organization that provides education to girls in the S.W.A.T region in Pakistan.",
    },
    {
      id: 5,
      imageSrc: "/images/Bright future.png",
      name: "Bright future",
      text: "Bright future is a non-profit organization that provides education for refugee children.",
    },
    {
      id: 6,
      imageSrc: "/images/Education for all.png",
      name: "Education for All",
      text: "Education for all, is working towards providing caring support for children in different situations.",
    },
  ];

  return (
    <div>
      {" "}
      test
      {NpoCards.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
};
export default NpoCard;
