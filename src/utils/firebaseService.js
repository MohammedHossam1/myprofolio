import { collection,getFirestore, getDoc, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
// import { db } from "./firebase";

const db = getFirestore();

export const checkAdmin = async (user) => {
  const docRef = doc(db, "admins", user.uid); // Store admins by UID in Firestore
  const docSnap = await getDoc(docRef);

  return docSnap.exists(); // Check if the user is an admin
};

// Collection References
const skillsCollectionRef = collection(db, "skills");
const projectsCollectionRef = collection(db, "projects");

// Add a skill
export const addSkill = async (skill) => {
  return await addDoc(skillsCollectionRef, skill);
};
// Add a project
export const addProject = async (project) => {
  return await addDoc(projectsCollectionRef, project);
};


// Fetch all skills
export const getSkills = async () => {
  const data = await getDocs(skillsCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// Update a skill
export const updateSkill = async (id, updatedSkill) => {
  const skillDoc = doc(db, "skills", id);
  return await updateDoc(skillDoc, updatedSkill);
};

// Delete a skill
export const deleteSkill = async (id) => {
  const skillDoc = doc(db, "skills", id);
  return await deleteDoc(skillDoc);
};
