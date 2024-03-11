import { Link } from "react-router-dom";

function RecentPost({ post }) {
  return (
    <Link
      to={`r/${post.community.title}/${post.id}`}
      className="px-4 pb-2 border-b-[1px] border-border block hover:bg-background-light"
    >
      <Link
        to={`r/${post.community.title}`}
        className="flex items-center gap-2 py-2"
      >
        <img
          src={post.community.photo}
          className="h-6 w-6 rounded-xl border-[1px] border-neutral-500"
        />
        <span className="text-xs text-text-secondary font-semibold  hover:underline">
          r/{post.community.title}
        </span>
      </Link>
      <span className="text-text-neutral font-bold hover:underline">
        {post.title}
      </span>
      <div className="text-xs text-text-secondary py-2">
        <span className="mr-2">{post.upvotes} upvotes</span>
        &#x2022;
        <span className="ml-2">
          {post.comments.length} comment
          {`${post.comments.length > 1 ? "s" : ""}`}
        </span>
      </div>
    </Link>
  );
}

export default RecentPost;
