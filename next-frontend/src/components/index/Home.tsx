import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { get_all_books } from "../../allApi";
import ProductAddToCard from "./Card";
import Middle from "./Middle";
import { ReadingBoy } from "./ReadingBoy";

interface IData {
  _id: string;
  imageURL: string;
  name: string;
  author: string;
}

export const Home = () => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await get_all_books();
      setData(response.data as unknown as IData[]);
    }

    fetchMyAPI();
  }, []);

  return (
    <Box>
      {console.log(data)}
      <ReadingBoy />
      <Middle />
      <Box
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"space-around"}
        flexDirection={"row"}
        flexWrap={"wrap"}
      >
        {data.map((each_book) => (
          <Box mb="20px" key={each_book.author + each_book.name}>
            {data ? <ProductAddToCard data={each_book} /> : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
