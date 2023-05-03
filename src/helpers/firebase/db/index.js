import { app } from "services/firebase";
import {
	getFirestore,
	doc, setDoc, getDoc, addDoc, updateDoc, getDocs,
	arrayUnion,
	collection, query, orderBy, limit
} from "firebase/firestore";

const db = getFirestore(app);

export const setNewDataUser = async (uid, userInfo, userRole) => {
	await setDoc(doc(db, "users", uid), {
		uid: uid,
		email: userInfo.email,
		fullName: userInfo.fullName,
		phone: userInfo.phone,
		address: userInfo.address,
		listFriends: [],
		listPosts: [],
		photoUrl: null,
		role: userRole === "cá nhân" ? "customer" : "business"
	});
};

export const getUserData = async (uid) => {
	const docSnap = await getDoc(doc(db, "users", uid));
	if (docSnap.exists()) {
		return docSnap.data();
	}
	else {
		return null;
	}
};

export const getPost = async (pid) => {
	const docSnap = await getDoc(doc(db, "posts", pid));
	if (docSnap.exists()) {
		return docSnap.data();
	}
	else {
		return null;
	}
}

export const getNewfeed = async () => {
	const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"), limit(3));
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => doc.data());
}

export const setPost = async (uid, post) => {
	const docRef = await addDoc(collection(db, "posts"), {
		urlImage: post.urlImage,
		title: post.title,
		content: post.content,
		hashtags: post.hashtags,
		tours: post.tours,
		uid: post.uid,
		pid: post.pid,
		timeStamp: post.timeStamp,
		star: 4,
		upvote: [],
		downvote: [],
		comments: [],
	});

	const pid = docRef.id;

	await updateDoc(doc(db, "posts", pid), {
		pid: pid
	});

	await updateDoc(doc(db, "users", uid), {
		listPosts: arrayUnion(pid)
	});
}

export const getTrendings = async () => {
	const docSnap = await getDoc(doc(db, "informations", "trendings"));
	if (docSnap.exists()) {
		return docSnap.data();
	}
	else {
		return null;
	}
}