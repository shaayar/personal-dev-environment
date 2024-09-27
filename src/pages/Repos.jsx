"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

const Repos = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await axios.get(`https://api.github.com/users/shaayar/repos`);
				setRepos(response.data);
				setLoading(false);
			} catch (err) {
				setError(err);
				setLoading(false);
			}
		};

		fetchRepos();
	}, );

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error fetching repositories.</div>;

	return (
		<div>
			<h1>{username} GitHub Repositories</h1>
			<ul>
				{repos.map(repo => (
					<li key={repo.id}>
						<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
							{repo.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Repos;