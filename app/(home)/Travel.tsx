import { Post } from "@prisma/client";
import Card from "../(share)/Card";

interface TravelProps {
  travelPosts: Array<Post>;
}
export default function Travel({ travelPosts }: TravelProps) {
  return (
    <section className="mt-10">
      <hr className="border-1" />

      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold">
          Travel
        </h4>
        <p className="font-bold text-2xl">New Travel Experiences</p>
      </div>

      {/* CARDS ROW */}
      <div className="sm:flex justify-between gap-8">
        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[0]}
          isLongForm
        ></Card>

        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[1]}
          isLongForm
        ></Card>

        <Card
          className="basis-1/3 mt-5 sm:mt-0"
          imageHeight="h-80"
          post={travelPosts[2]}
          isLongForm
        ></Card>
      </div>

      <Card
        className="sm:flex justify-between items-center gap-3 mt-7 mb-5"
        imageHeight="h-80"
        post={travelPosts[3]}
        isLongForm
      ></Card>
    </section>
  );
}
