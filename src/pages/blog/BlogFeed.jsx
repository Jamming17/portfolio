import BlogPost from "../../components/BlogPost";

export default function BlogFeed() {
const dummyBlogs = [
    {
        title: "Test post",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        user: "JammingTEST",
        date: "2025-06-03",
        comments: [
            { text: "Nice post! I was just wondering if meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow?", user: "Tommi", date: "2025-06-03" },
            { text: "Thanks for sharing", user: "Harroldinio", date: "2025-06-03" }
        ]
    },
    {
        title: "Test post 2 electric boogaloo",
        text: "AAAAAA meow meow meow meow meow woof woof woof woof woof",
        user: "JammingTEST",
        date: "2025-06-03",
        comments: [
            { text: "Meow meow meow", user: "lychee", date: "2025-06-03" },
            { text: "Great whickering stallions!", user: "Doctor Whooves", date: "2025-06-03" }
        ]
    }
]

    return (
        <div className="max-w-4xl p-4 mx-auto">
            {dummyBlogs.map((blog, i) => (
                <BlogPost key={i} {...blog} />
            ))}
        </div>
    );
}