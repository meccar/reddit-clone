import { useState } from "react";

import Button from "../../ui/Button";
import {
  CardOutline,
  CardFill,
  ClassicOutline,
  ClassicFill,
} from "../../ui/RedditIcons";
import HomePost from "./HomePost";
import usePosts from "./usePosts";
import Spinner from "../../ui/Spinner";

function Feed() {
  const [view, setView] = useState("card");

  const { data: postsDb, status } = usePosts();

  return (
    <div className="px-6">
      <div className="border-b-[1px] border-border h-12 flex justify-end items-center gap-2">
        <h3>View:</h3>
        <Button
          light={`${view === "card" ? "true" : ""}`}
          className="gap-2"
          onClick={() => {
            setView("card");
          }}
        >
          {view === "card" ? <CardFill /> : <CardOutline />}
          Card
        </Button>
        <Button
          light={`${view === "classic" ? "true" : ""}`}
          className="gap-2"
          onClick={() => {
            setView("classic");
          }}
        >
          {view === "classic" ? <ClassicFill /> : <ClassicOutline />}
          Classic
        </Button>
      </div>

      {status === "pending" ? (
        <Spinner />
      ) : (
        postsDb.map((post) => {
          return <HomePost post={post} key={post.id} view={view} />;
        })
      )}
    </div>
  );
}

export default Feed;
