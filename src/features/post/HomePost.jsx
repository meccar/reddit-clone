import { Link } from "react-router-dom";
import { PiArrowFatDown, PiArrowFatUp } from "react-icons/pi";
import { MdOutlineInsertComment } from "react-icons/md";

import Button from "../../ui/Button";

function HomePost({ post, view }) {
  let previewText;
  let wordArray = post.text.split(" ");
  if (wordArray.length > 70) {
    wordArray = wordArray.slice(0, 70);
    previewText = wordArray.join(" ") + "...";
  } else {
    previewText = post.text;
  }

  return (
    <div className="border-b-[1px] border-border">
      <Link to={`r/${post.community.title}/${post.id}`}>
        <div className="hover:bg-post-hover px-4 py-2 rounded-2xl">
          <div className="flex items-center gap-2 text-text-secondary text-xs">
            <img
              src={post.community.photo}
              className="h-6 w-6 rounded-xl border-[1px] border-neutral-500"
            />
            <Link
              to={"/" + post.community.link}
              className="font-bold text-text-neutral hover:underline"
            >
              r/{post.community.title}
            </Link>
            &#x2022; {post.date}
          </div>
          <div className="text-lg font-bold py-2">{post.title}</div>
          {view === "card" && <p className="mb-4 font-light ">{previewText}</p>}
          <div className="flex gap-4">
            <div className="flex items-center bg-background-light rounded-full font-bold">
              <Button rounded>
                <PiArrowFatUp className="text-xl hover:text-orange" />
              </Button>
              {post.upvotes}
              <Button rounded>
                <PiArrowFatDown className="text-xl hover:text-blue" />
              </Button>
            </div>
            <Button light>
              <MdOutlineInsertComment className="text-xl mr-2" />
              {post.comments?.length}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePost;
