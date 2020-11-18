//Import Images
import feather from "./img/emb-Feather.jpg"
import leaves from "./img/emb-02.jpg"
import mesh from "./img/emb-Net.jpg"
import feather2 from "./img/emb-Feather-02.jpg"
import leaves2 from "./img/emb-Leaves-02.jpg"
import mesh2 from "./img/emb-Mesh-02.jpg"

export const MovieState = () => {
  return [
    {
      title: "The Feather Works",
      mainImg: feather,
      secondaryImg: feather2,
      url: "/work/the-feather",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Leaves Works",
      mainImg: leaves,
      url: "/work/the-leaves",
      secondaryImg: leaves2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Mesh Works",
      mainImg: mesh,
      url: "/work/the-mesh",
      secondaryImg: mesh2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};