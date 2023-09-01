"use client";

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Saransh",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sUFrbV6K1c7bu7UkltWelGpQCbKrfWQHPPBLWRUUzTfjea27sXLmdicv80gVKzzDkU&usqp=CAU",
    title: "CEO Nova benefits",
    description: "This app is super useful!",
  },
  {
    name: "Amitabh",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2BcXuX6SwvoU3prhWK-E_2OZ7qaC_93MmkokSYUzQZIDV3swR8lQ7dvXSeEtrC2urJ4&usqp=CAU",
    title: "CTO at TechSolutions",
    description:
      "Your AI web app is a game-changer! It has boosted our productivity tremendously.",
  },
  {
    name: "Neha",
    avatar:
      "https://img.freepik.com/premium-photo/cute-cheerful-girl-isolated-white-background-generative-ai_58409-46624.jpg?w=2000",
    title: "Product Manager at InnovateTech",
    description:
      "I'm impressed with the AI web app you created. It's incredibly intuitive and user-friendly.",
  },
  {
    name: "Rajesh",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUKts7SkNHYkjoraT1fZwBGkFXpkttI0o4nQrAjh8oTcHIDp1Y463wm9LZJWDTt5Im2k&usqp=CAU",
    title: "Data Analyst at DataInsights",
    description:
      "Your AI web app simplifies data analysis like never before. Kudos!",
  },
  {
    name: "Priya",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAXOlKALG-AQnpzmFBX3vnl_cTw5FB06PwwDYOTh8HP8WlJq5y-Fo3n45Zq-Xx8gMM1s&usqp=CAU",
    title: "Marketing Director at MarketPro",
    description:
      "The AI web app is a marketing genius! It has transformed the way we target our audience.",
  },
  {
    name: "Vivek",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2BcXuX6SwvoU3prhWK-E_2OZ7qaC_93MmkokSYUzQZIDV3swR8lQ7dvXSeEtrC2urJ4&usqp=CAU",
    title: "HR Manager at TalentHub",
    description:
      "Your AI web app streamlines our recruitment process and saves us valuable time.",
  },
  {
    name: "Anjali",
    avatar:
      "https://img.freepik.com/premium-photo/cute-cheerful-girl-isolated-white-background-generative-ai_58409-46624.jpg?w=2000",
    title: "UX Designer at DesignCraft",
    description:
      "The AI web app's user experience is top-notch. It's a pleasure to work with.",
  },
  {
    name: "Manish",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_sUFrbV6K1c7bu7UkltWelGpQCbKrfWQHPPBLWRUUzTfjea27sXLmdicv80gVKzzDkU&usqp=CAU",
    title: "Finance Controller at MoneyMatters",
    description:
      "Your AI web app has made financial management a breeze. It's a financial wizard!",
  },
  {
    name: "Pooja",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAXOlKALG-AQnpzmFBX3vnl_cTw5FB06PwwDYOTh8HP8WlJq5y-Fo3n45Zq-Xx8gMM1s&usqp=CAU",
    title: "Content Writer at ContentCraze",
    description:
      "I love using your AI web app for content research. It's a content creator's dream.",
  },
  {
    name: "Rahul",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUKts7SkNHYkjoraT1fZwBGkFXpkttI0o4nQrAjh8oTcHIDp1Y463wm9LZJWDTt5Im2k&usqp=CAU",
    title: "Sales Manager at SalesPro",
    description:
      "The AI web app has boosted our sales performance. It's a salesperson's best friend.",
  },
  {
    name: "Sneha",
    avatar:
      "https://img.freepik.com/premium-photo/cute-cheerful-girl-isolated-white-background-generative-ai_58409-46624.jpg?w=2000",
    title: "Customer Support Lead at SupportHub",
    description:
      "Our customers are thrilled with the quick support provided by your AI web app.",
  },
];

export const LandingContent = () => {
  return (
    <div className=" px-10 pb-20">
      <h2 className=" text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className=" flex items-center justify-start gap-4">
                <Avatar>
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className=" text-lg">{item.name}</p>
                  <p className=" text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className=" pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
