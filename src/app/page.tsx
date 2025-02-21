interface IArticles {
	id: number;
	title: string;
	body: string;
	tags: string[];
}

export default async function Home() {
	const posts: IArticles[] = await fetch("https://dummyjson.com/posts")
		.then((res) => res.json())
		.then((res) => res.posts);

	const article: IArticles = posts[0];
	return (
		<div>
			<h2>Judul : {article.title}</h2>
			<p>Body : {article.body}</p>
			<ul>
				{article.tags.map((tag, index) => (
					<li key={index}>{tag}</li>
				))}
			</ul>
		</div>
	);
}
