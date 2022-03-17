import { createContext } from "react";

export const StoryInfoContext = createContext();

export const StoryInfoProvider = (props) => {
  const story = [
    {
      id: "1",
      image: "https://i.ytimg.com/vi/-JR8ofaJuAc/hqdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/-JR8ofaJuAc/hqdefault.jpg",
      title: "The fox and the mama bird",
      youtube:
        "https://www.youtube.com/watch?v=-JR8ofaJuAc",
    },
    {
      id: "2",
      image: "https://i.ytimg.com/vi/n8tDU7RTro0/hqdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/n8tDU7RTro0/hqdefault.jpg",
      title: "Selfish gaint",
      youtube:
        "https://www.youtube.com/watch?v=n8tDU7RTro0",
    },
    {
      id: "3",
      image: "https://i.ytimg.com/vi/ITdkZEMXQbU/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/ITdkZEMXQbU/maxresdefault.jpg",
      title: "The ant and grasshopper",
      youtube:
        "https://www.youtube.com/watch?v=ITdkZEMXQbU",
    },
    {
      id: "4",
      image: "https://i.ytimg.com/vi/bdbDHOOmdAo/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/bdbDHOOmdAo/maxresdefault.jpg",
      title: "The mouses mirror",
      youtube:
        "https://www.youtube.com/watch?v=bdbDHOOmdAo",
    },
    {
      id: "5",
      image: "https://i.ytimg.com/vi/v_E-aiPJvaU/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/v_E-aiPJvaU/maxresdefault.jpg",
      title: "The three ants and their beautiful car",
      youtube:
        "https://www.youtube.com/watch?v=v_E-aiPJvaU",
    },
    {
      id: "6",
      image: "https://i.ytimg.com/vi/h2Xj-A7HsYE/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/h2Xj-A7HsYE/maxresdefault.jpg",
      title: "The elephant and the ant",
      youtube:
        "https://www.youtube.com/watch?v=h2Xj-A7HsYE",
    },
    {
      id: "7",
      image: "https://i.ytimg.com/vi/ymVWNdGxdHQ/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/ymVWNdGxdHQ/maxresdefault.jpg",
      title: "The stubborn baby elephant",
      youtube:
        "https://www.youtube.com/watch?v=ymVWNdGxdHQ",
    },
    {
      id: "8",
      image: "https://i.ytimg.com/vi/tUjOL_Nk6uo/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/tUjOL_Nk6uo/maxresdefault.jpg",
      title: "The lion, mouse and the sleepy bear ",
      youtube:
        "https://www.youtube.com/watch?v=tUjOL_Nk6uo",
    },
    {
      id: "9",
      image: "https://i.ytimg.com/vi/ouSSzWAacnY/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/ouSSzWAacnY/maxresdefault.jpg",
      title: "Fairy tale",
      youtube:
        "https://www.youtube.com/watch?v=ouSSzWAacnY",
    },
    {
      id: "10",
      image: "https://i.ytimg.com/vi/SAPfI9qsOF8/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/SAPfI9qsOF8/maxresdefault.jpg",
      title: "The lazy girl",
      youtube:
        "https://www.youtube.com/watch?v=SAPfI9qsOF8",
    },
    {
      id: "11",
      image: "https://i.ytimg.com/vi/r06dX99Q6lQ/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/r06dX99Q6lQ/maxresdefault.jpg",
      title: "Jesper Who Herded The Hares",
      youtube:
        "https://www.youtube.com/watch?v=r06dX99Q6lQ",
    },
    {
      id: "12",
      image: "https://i.ytimg.com/vi/IniqxAS5b40/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/IniqxAS5b40/maxresdefault.jpg",
      title: "Chaalaak bandhar",
      youtube:
        "https://www.youtube.com/watch?v=IniqxAS5b40",
    },
    {
      id: "13",
      image: "https://i.ytimg.com/vi/6bD3x8-AqdU/maxresdefault.jpg",
      imageCredit: "https://i.ytimg.com/vi/6bD3x8-AqdU/maxresdefault.jpg",
      title: "Bakri ke saath bache",
      youtube:
        "https://www.youtube.com/watch?v=6bD3x8-AqdU",
    },
  ];

  return (
    <StoryInfoContext.Provider value={story}>
      {props.children}
    </StoryInfoContext.Provider>
  );
};