"use client";

import { useState, useEffect } from "react";
import styles from "./CourseList.module.css";
import course from "@/app/course.json";

export default function CourseList() {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCourses = async () => {
			setLoading(true);
			await new Promise((resolve) => setTimeout(resolve, 500));
			setCourses(course.lessons);
			setLoading(false);
		};
		fetchCourses();
	}, []);

	return (
		<>
			{loading ? (
				<p>Завантаження курсів...</p>
			) : (
				<ul className={styles.ul}>
					{courses.map((l) => (
						<li className={styles.li} key={l.id}>
							<h3 className={styles.h3}>{l.title}</h3>
							<p className={styles.p}>{l.description}</p>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
